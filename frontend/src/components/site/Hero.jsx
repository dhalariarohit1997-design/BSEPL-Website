import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1592659762303-90081d34b277?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwyfHxwcmludGVkJTIwY2lyY3VpdCUyMGJvYXJkJTIwbWFjcm98ZW58MHx8fHwxNzg2NzIxMjA1fDA&ixlib=rb-4.1.0&q=85";

const lines = ["PRECISION.", "LAYER", "BY LAYER."];

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 + i * 0.13 },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.65, 0.9]);

  return (
    <section ref={ref} data-testid="hero-section" className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={HERO_IMG} alt="Macro printed circuit board" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div style={{ opacity: overlay }} className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />

      <div className="relative z-10 h-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-copper mb-6"
        >
          / Complete PCB Solution — Kundli, Est. 1996
        </motion.p>

        <h1 className="font-heading font-900 uppercase tracking-tighter leading-[0.85] text-6xl sm:text-7xl md:text-8xl lg:text-[10rem]">
          {lines.map((line, i) => (
            <span key={i} className="line-mask">
              <motion.span
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block"
              >
                {line === "LAYER" ? (
                  <span className="text-copper">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 max-w-xl font-mono text-sm md:text-base text-[#A3A3A3] leading-relaxed"
        >
          Single-sided, double-sided & metal-clad printed circuit boards.
          Manufactured in Kundli since 1996 for automotive, LED lighting and
          consumer electronics — built with obsessive tolerance.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 z-10 max-w-[1600px] mx-auto px-6 md:px-12 flex items-end justify-between"
      >
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#A3A3A3]">
          <ArrowDown className="w-4 h-4 animate-bounce text-copper" />
          Scroll
        </div>
        <div className="hidden md:flex gap-10 font-mono text-xs uppercase tracking-widest text-[#A3A3A3]">
          <span><span className="text-white font-700">EST. 1996</span> Heritage</span>
          <span><span className="text-white font-700">±0.1mm</span> Tolerance</span>
          <span><span className="text-white font-700">18,500</span> Sq.m / Month</span>
        </div>
      </motion.div>
    </section>
  );
}
