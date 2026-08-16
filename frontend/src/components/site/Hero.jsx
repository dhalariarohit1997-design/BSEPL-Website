import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

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

const stats = [
  { k: "30+", v: "Years of Experience" },
  { k: "200+", v: "Happy Customers" },
  { k: "150+", v: "Employees" },
  { k: "UL", v: "Certified Products" },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} data-testid="hero-section" className="relative min-h-screen w-full bg-white pt-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
        <div className="flex flex-col justify-center px-6 md:px-12 py-16 lg:py-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#2E3192] mb-6"
          >
            / Complete PCB Solution — Est. 1996
          </motion.p>

          <h1 className="font-heading font-900 uppercase tracking-tighter leading-[0.85] text-6xl sm:text-7xl md:text-8xl text-[#0B1533]">
            {lines.map((line, i) => (
              <span key={i} className="line-mask">
                <motion.span custom={i} variants={lineVariants} initial="hidden" animate="visible" className="block">
                  {line === "LAYER" ? <span className="text-[#2E3192]">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 max-w-xl font-mono text-sm md:text-base text-[#5A6684] leading-relaxed"
          >
            One stop solution for all your PCB needs — single-sided, double-sided &
            metal-clad printed circuit boards. We build circuits and relationships
            that last forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              data-testid="hero-quote-button"
              onClick={() => scrollTo("#quote")}
              className="group flex items-center gap-2 bg-[#2E3192] hover:bg-[#3B3FB0] text-white font-mono font-700 uppercase tracking-widest text-xs px-6 py-4 transition-colors duration-300"
            >
              Request a Quote
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
            <button
              data-testid="hero-capabilities-button"
              onClick={() => scrollTo("#capabilities")}
              className="flex items-center gap-2 border border-[#0B1533] hover:border-[#2E3192] hover:text-[#2E3192] text-[#0B1533] font-mono font-700 uppercase tracking-widest text-xs px-6 py-4 transition-colors duration-300"
            >
              Our Capabilities
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E6EF] border border-[#E2E6EF] max-w-xl"
          >
            {stats.map((s) => (
              <div key={s.k} className="bg-white px-3 py-3">
                <div className="font-heading font-900 text-xl md:text-2xl tracking-tight text-[#0B1533]">{s.k}</div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-[#5A6684] mt-1 leading-tight">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative min-h-[50vh] lg:min-h-full overflow-hidden border-l border-[#E2E6EF]">
          <motion.div style={{ y, scale }} className="absolute inset-0">
            <img src={HERO_IMG} alt="Macro printed circuit board" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2E3192]/25 via-transparent to-transparent" />
          <div className="absolute top-6 left-6 w-3 h-3 bg-[#E1251B]" />
          <div className="absolute bottom-6 right-6 font-mono text-[10px] uppercase tracking-widest text-white/80 bg-[#0B1533]/40 backdrop-blur-sm px-3 py-2">
            IATF 16949 · ISO 9001 · UL Certified
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-6 left-6 items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#5A6684] z-10">
        <ArrowDown className="w-4 h-4 animate-bounce text-[#2E3192]" />
        Scroll
      </div>
    </section>
  );
}
