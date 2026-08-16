import { motion } from "framer-motion";

const clients = [
  { name: "Havells", logo: "/clients/havells.png" },
  { name: "Livguard", logo: "/clients/livguard.png" },
  { name: "Phoenix Contact", logo: "/clients/phoenix.png" },
  { name: "Lava International", logo: "/clients/lava.png" },
  { name: "Deltron (CDIL)", logo: null },
  { name: "Elin Electronics", logo: "/clients/elin.png" },
];

export default function Clients() {
  return (
    <section id="clients" data-testid="clients-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 bg-white">
      <div className="mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2E3192] mb-6">/ Our Clients</p>
        <h2 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-5xl md:text-7xl text-[#0B1533] max-w-3xl">
          Trusted By India's Best.
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#E2E6EF] border border-[#E2E6EF]">
        {clients.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            data-testid={`client-${i}`}
            className="group bg-white p-10 flex items-center justify-center min-h-[160px] hover:bg-[#F2F4FA] transition-colors duration-300"
          >
            {c.logo ? (
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-16 md:max-h-20 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            ) : (
              <span className="font-heading font-900 uppercase tracking-tighter text-2xl md:text-3xl text-[#0B1533] group-hover:text-[#2E3192] transition-colors duration-300 text-center leading-tight">
                {c.name}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
