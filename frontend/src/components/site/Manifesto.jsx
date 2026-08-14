import { motion } from "framer-motion";

const chapters = [
  {
    num: "01",
    title: "Rooted in Kundli.",
    body: "From the industrial heart of Haryana, we fabricate printed circuit boards for makers, startups and manufacturers across India. Local roots, exacting global standards.",
    align: "left",
  },
  {
    num: "02",
    title: "Copper is a craft.",
    body: "Every trace, via and pad is treated as an act of precision engineering. We control etching, lamination and drilling to hold tolerances that most bench-top shops cannot.",
    align: "right",
  },
  {
    num: "03",
    title: "From one to one million.",
    body: "A single prototype overnight, or a production run of thousands — the same rigorous process, the same inspection discipline, scaled to your ambition.",
    align: "left",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Manifesto() {
  return (
    <section id="manifesto" data-testid="manifesto-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40">
      <motion.p
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-copper mb-20"
      >
        / The Studio
      </motion.p>

      <div className="space-y-28 md:space-y-40">
        {chapters.map((c) => (
          <motion.div
            key={c.num}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className={`flex flex-col ${c.align === "right" ? "md:items-end md:text-right md:pl-[30%]" : "md:pr-[30%]"}`}
          >
            <span className="font-mono text-copper text-xl md:text-2xl mb-6 tracking-tight">{c.num}</span>
            <h3 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-4xl sm:text-5xl md:text-7xl mb-8">
              {c.title}
            </h3>
            <p className="font-mono text-sm md:text-base text-[#A3A3A3] leading-relaxed max-w-xl">
              {c.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
