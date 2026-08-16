import { motion } from "framer-motion";
import { Car, Cog, Cpu, Lightbulb } from "lucide-react";

const industries = [
  { icon: Car, name: "Automotive", desc: "Reliability-first boards built to IATF 16949 for demanding automotive electronics." },
  { icon: Cog, name: "Industrial Automation", desc: "Rugged PCBs for controllers, drives and factory automation systems." },
  { icon: Cpu, name: "Consumer Electronics", desc: "High-volume, cost-optimised boards for everyday connected devices." },
  { icon: Lightbulb, name: "LED Lighting", desc: "Metal-clad aluminium PCBs engineered for superior thermal performance." },
];

export default function Industries() {
  return (
    <section id="industries" data-testid="industries-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 bg-white">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2E3192] mb-6">/ Industries We Serve</p>
      <h2 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-5xl md:text-7xl text-[#0B1533] mb-16">
        Where Our<br />Boards Go.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E6EF] border border-[#E2E6EF]">
        {industries.map((ind, i) => {
          const Icon = ind.icon;
          const isBlue = i % 2 === 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              data-testid={`industry-${i}`}
              className={`${isBlue ? "bg-[#2E3192]" : "bg-white"} p-8 md:p-10 flex flex-col gap-6 min-h-[260px] transition-colors duration-300`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono text-xs ${isBlue ? "text-white/70" : "text-[#2E3192]"}`}>0{i + 1}</span>
                <Icon className={`w-7 h-7 ${isBlue ? "text-white" : "text-[#2E3192]"}`} strokeWidth={1.5} />
              </div>
              <div className="mt-auto">
                <h3 className={`font-heading font-700 text-2xl tracking-tight leading-tight ${isBlue ? "text-white" : "text-[#0B1533]"}`}>
                  {ind.name}
                </h3>
                <p className={`font-mono text-xs mt-3 leading-relaxed ${isBlue ? "text-white/80" : "text-[#5A6684]"}`}>
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
