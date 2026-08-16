import { motion } from "framer-motion";

const shots = [
  { url: "/factory/factory2.jpeg", alt: "Electroplating line with PCB panels on hoist", caption: "Electroplating line", span: "md:col-span-8 aspect-video" },
  { url: "/factory/factory7.jpeg", alt: "CNC drilling machine", caption: "CNC drilling", span: "md:col-span-4 aspect-square" },
  { url: "/factory/factory6.jpeg", alt: "Operators at punching machines", caption: "Punching & fabrication", span: "md:col-span-4 aspect-square" },
  { url: "/factory/factory3.jpeg", alt: "Photo-imaging and exposure room", caption: "Photo-imaging & exposure", span: "md:col-span-8 aspect-video" },
  { url: "/factory/factory5.jpeg", alt: "Wet process rinsing tanks", caption: "Wet process & rinsing", span: "md:col-span-8 aspect-video" },
  { url: "/factory/factory4.jpeg", alt: "Operator at machine control panel", caption: "Process control", span: "md:col-span-4 aspect-square" },
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

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {shots.map((s, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            data-testid={`gallery-item-${i}`}
            className={`group relative overflow-hidden border border-[#E2E6EF] ${s.span}`}
          >
            <img
              src={s.url}
              alt={s.alt}
              loading="lazy"
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-inset ring-[#2E3192]/40 transition-all duration-500 pointer-events-none" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0B1533]/85 to-transparent font-mono text-xs uppercase tracking-widest text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-white/60">— </span>{s.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
