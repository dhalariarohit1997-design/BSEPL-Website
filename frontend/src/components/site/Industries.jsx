import { motion } from "framer-motion";
import { Car, Cog, Cpu, Lightbulb, RadioTower } from "lucide-react";

const industries = [
  { icon: Car, name: "Automotive", desc: "Reliability-first boards built to IATF 16949 for demanding automotive electronics.", bg: "https://images.unsplash.com/photo-1605036242577-8ee228902af1?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
  { icon: Cog, name: "Industrial Automation", desc: "Rugged PCBs for controllers, drives and factory automation systems.", bg: "https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
  { icon: Cpu, name: "Consumer Electronics", desc: "High-volume, cost-optimised boards for everyday connected devices.", bg: "https://images.unsplash.com/photo-1515940175183-6798529cb860?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
  { icon: Lightbulb, name: "LED Lighting", desc: "Metal-clad aluminium PCBs engineered for superior thermal performance.", bg: "https://images.unsplash.com/photo-1523376460408-aeb5f5d051b8?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
  { icon: RadioTower, name: "Telecom", desc: "Precision boards for networking, communication and signal infrastructure.", bg: "https://images.unsplash.com/photo-1643155193188-38eb08e2b54f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200" },
];

export default function Industries() {
  return (
    <section id="industries" data-testid="industries-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 bg-white">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2E3192] mb-6">/ Industries We Serve</p>
      <h2 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-5xl md:text-7xl text-[#0B1533] mb-16">
        Where Our<br />Boards Go.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#E2E6EF] border border-[#E2E6EF]">
        {industries.map((ind, i) => {
          const Icon = ind.icon;
          const isLast = i === industries.length - 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              data-testid={`industry-${i}`}
              className={`group relative overflow-hidden bg-white ${isLast ? "md:col-span-2 lg:col-span-1" : ""} p-8 md:p-10 flex flex-col gap-6 min-h-[280px]`}
            >
              <img
                src={ind.bg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.21] group-hover:opacity-[0.31] transition-opacity duration-500 pointer-events-none"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-white/75 to-white/45" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs text-[#2E3192]">0{i + 1}</span>
                <Icon className="w-7 h-7 text-[#2E3192]" strokeWidth={1.5} />
              </div>
              <div className="relative z-10 mt-auto">
                <h3 className="font-heading font-700 text-2xl tracking-tight leading-tight text-black">
                  {ind.name}
                </h3>
                <p className="font-mono text-xs mt-3 leading-relaxed text-black">
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
