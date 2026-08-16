import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const shots = [
  { url: "/factory/factory2.jpeg", alt: "Electroplating line with PCB panels on hoist" },
  { url: "/factory/factory10.jpeg", alt: "Multi-spindle CNC drilling machine" },
  { url: "/factory/factory3.jpeg", alt: "Photo-imaging and exposure room" },
  { url: "/factory/factory6.jpeg", alt: "Operators at punching machines" },
  { url: "/factory/factory5.jpeg", alt: "Wet process rinsing tanks" },
  { url: "/factory/factory4.jpeg", alt: "Operator at machine control panel" },
  { url: "/factory/factory8.jpeg", alt: "Operator running a PCB processing machine" },
  { url: "/factory/factory9.jpeg", alt: "PCB panel inspection and measurement station" },
];

// Group images into pairs (2 per slide)
const pages = [];
for (let i = 0; i < shots.length; i += 2) pages.push(shots.slice(i, i + 2));

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((n) => {
    setDir(n);
    setIndex((prev) => (prev + n + pages.length) % pages.length);
  }, []);

  const goTo = (i) => {
    setDir(i > index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, [go]);

  return (
    <section id="gallery" data-testid="gallery-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 bg-white">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2E3192] mb-6">/ Gallery</p>
      <h2 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-5xl md:text-7xl text-[#0B1533] mb-4">
        Inside The Plant.
      </h2>
      <p className="font-mono text-sm text-[#5A6684] max-w-md mb-12 leading-relaxed">
        A look inside our manufacturing floor — from imaging and plating to drilling, fabrication and process control.
      </p>

      <div className="relative w-full" data-testid="gallery-slideshow">
        <div className="relative w-full overflow-hidden">
          <AnimatePresence initial={false} custom={dir} mode="wait">
            <motion.div
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              data-testid="gallery-current-slide"
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {pages[index].map((s, i) => (
                <figure key={i} className="relative aspect-[4/3] overflow-hidden border border-[#E2E6EF] bg-[#0B1533]">
                  <img src={s.url} alt={s.alt} className="w-full h-full object-cover" />
                </figure>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => go(-1)}
          data-testid="gallery-prev"
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-[#2E3192] hover:text-white text-[#0B1533] shadow-md transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => go(1)}
          data-testid="gallery-next"
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-[#2E3192] hover:text-white text-[#0B1533] shadow-md transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              data-testid={`gallery-dot-${i}`}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 transition-all duration-300 ${i === index ? "w-10 bg-[#2E3192]" : "w-4 bg-[#C7CEDE] hover:bg-[#5A6684]"}`}
            />
          ))}
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-[#5A6684]" data-testid="gallery-counter">
          {String(index + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}
