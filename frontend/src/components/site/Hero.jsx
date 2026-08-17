import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function CountUp({ value, duration = 1.8, delay = 0 }) {
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (target === null || !inView) return;
    let raf;
    const start = performance.now() + delay * 1000;
    const tick = (now) => {
      const t = Math.min(1, Math.max(0, (now - start) / (duration * 1000)));
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, delay]);

  if (target === null) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{n}{suffix}</span>;
}

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
    <section ref={ref} data-testid="hero-section" className="relative min-h-screen w-full bg-white pt-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-6rem)]">
        <div className="flex flex-col justify-center px-6 md:px-12 py-16 lg:py-0">
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
              data-testid="hero-contact-button"
              onClick={() => scrollTo("#contact")}
              className="group flex items-center gap-2 bg-[#2E3192] hover:bg-[#3B3FB0] text-white font-mono font-700 uppercase tracking-widest text-xs px-6 py-4 transition-colors duration-300"
            >
              Get in Touch
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
            className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E6EF] border border-[#E2E6EF] max-w-2xl"
          >
            {stats.map((s, i) => {
              const isBlue = i % 2 === 1;
              return (
                <div key={s.k} className={`${isBlue ? "bg-[#2E3192]" : "bg-white"} px-5 py-6`}>
                  <div className={`font-heading font-900 text-3xl md:text-4xl tracking-tight ${isBlue ? "text-white" : "text-[#0B1533]"}`}>
                    <CountUp value={s.k} delay={0.3 + i * 0.15} />
                  </div>
                  <div className={`font-mono text-[10px] md:text-xs uppercase tracking-wider mt-2 leading-tight ${isBlue ? "text-white/70" : "text-[#5A6684]"}`}>{s.v}</div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="relative min-h-[50vh] lg:min-h-full overflow-hidden border-l border-[#E2E6EF]">
          <motion.div style={{ y, scale }} className="absolute inset-0">
            <img src={HERO_IMG} alt="Macro printed circuit board" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2E3192]/25 via-transparent to-transparent" />
          <div className="absolute top-6 left-6 w-3 h-3 bg-[#E1251B]" />
          <div className="hidden lg:flex absolute bottom-6 left-6 items-center gap-3 font-mono text-xs uppercase tracking-widest text-white z-10">
            <ArrowDown className="w-4 h-4 animate-bounce" />
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}
