import { motion } from "framer-motion";

const shots = [
  { url: "/factory/factory2.jpeg", alt: "Electroplating line with PCB panels on hoist" },
  { url: "/factory/factory7.jpeg", alt: "CNC drilling machine" },
  { url: "/factory/factory3.jpeg", alt: "Photo-imaging and exposure room" },
  { url: "/factory/factory6.jpeg", alt: "Operators at punching machines" },
  { url: "/factory/factory5.jpeg", alt: "Wet process rinsing tanks" },
  { url: "/factory/factory4.jpeg", alt: "Operator at machine control panel" },
];

export default function Gallery() {
  return (
    <section id="gallery" data-testid="gallery-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 bg-white">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2E3192] mb-6">/ Gallery</p>
      <h2 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-5xl md:text-7xl text-[#0B1533] mb-4">
        Inside The Plant.
      </h2>
      <p className="font-mono text-sm text-[#5A6684] max-w-md mb-16 leading-relaxed">
        A look inside our manufacturing floor — from imaging and plating to drilling, fabrication and process control.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2E6EF] border border-[#E2E6EF]">
        {shots.map((s, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            data-testid={`gallery-item-${i}`}
            className="group relative overflow-hidden bg-white aspect-[4/3]"
          >
            <img
              src={s.url}
              alt={s.alt}
              loading="lazy"
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-inset ring-[#2E3192]/40 transition-all duration-500 pointer-events-none" />
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
