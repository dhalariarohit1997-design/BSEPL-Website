import { useState } from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "Havells", domain: "havells.com" },
  { name: "Livguard", domain: "livguard.com" },
  { name: "Phoenix Contact", domain: "phoenixcontact.com" },
  { name: "Lava International", domain: "lavamobiles.com" },
  { name: "Deltron (CDIL)", domain: "cdil.com" },
  { name: "Elin Electronics", domain: "elinelectronics.com" },
];

function ClientCard({ name, domain, index }) {
  const [failed, setFailed] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      data-testid={`client-${index}`}
      className="group bg-white p-10 flex items-center justify-center min-h-[150px] hover:bg-[#F2F4FA] transition-colors duration-300"
    >
      {failed ? (
        <span className="font-heading font-900 uppercase tracking-tighter text-2xl md:text-3xl text-[#0B1533] group-hover:text-[#2E3192] transition-colors duration-300 text-center leading-tight">
          {name}
        </span>
      ) : (
        <img
          src={`https://logo.clearbit.com/${domain}?size=256`}
          alt={name}
          onError={() => setFailed(true)}
          className="max-h-14 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        />
      )}
    </motion.div>
  );
}

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
          <ClientCard key={c.name} name={c.name} domain={c.domain} index={i} />
        ))}
      </div>
    </section>
  );
}
