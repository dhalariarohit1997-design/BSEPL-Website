import { motion } from "framer-motion";

const clients = [
  { name: "Havells", logo: "/clients/havells.png", fit: "cover" },
  { name: "Livguard", logo: "/clients/livguard.png", fit: "cover" },
  { name: "Phoenix Contact", logo: "/clients/phoenix.webp", fit: "contain" },
  { name: "Lava International", logo: "/clients/lava.png", fit: "cover" },
  { name: "Deltron (CDIL)", logo: null },
  { name: "Elin Electronics", logo: "/clients/elin.png", fit: "cover" },
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
            className="group relative bg-white overflow-hidden aspect-[16/9] flex items-center justify-center"
          >
            {!c.logo ? (
              <span className="font-heading font-900 uppercase tracking-tighter text-2xl md:text-3xl text-[#0B1533] group-hover:text-[#2E3192] transition-colors duration-300 text-center leading-tight px-4">
                {c.name}
              </span>
            ) : c.fit === "cover" ? (
              <img
                src={c.logo}
                alt={c.name}
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-[80%] max-w-[88%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
