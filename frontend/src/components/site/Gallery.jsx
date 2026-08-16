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

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((n) => {
    setDir(n);
    setIndex((prev) => (prev + n + shots.length) % shots.length);
  }, []);

  const goTo = (i) => {
    setDir(i > index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 4500);
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

      <div className="relative w-full aspect-[16/9] overflow-hidden border border-[#E2E6EF] bg-[#0B1533]" data-testid="gallery-slideshow">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.img
            key={index}
            src={shots[index].url}
            alt={shots[index].alt}
            custom={dir}
            initial={{ opacity: 0, x: dir * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -80 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            data-testid="gallery-current-slide"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <button
          onClick={() => go(-1)}
          data-testid="gallery-prev"
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-[#2E3192] hover:text-white text-[#0B1533] transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => go(1)}
          data-testid="gallery-next"
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-[#2E3192] hover:text-white text-[#0B1533] transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute top-4 right-4 z-10 font-mono text-xs uppercase tracking-widest text-white bg-[#0B1533]/50 backdrop-blur-sm px-3 py-1.5" data-testid="gallery-counter">
          {String(index + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {shots.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              data-testid={`gallery-dot-${i}`}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 transition-all duration-300 ${i === index ? "w-8 bg-white" : "w-3 bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
