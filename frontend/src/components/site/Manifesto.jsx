import { motion } from "framer-motion";

const chapters = [
  {
    num: "01",
    title: "Since 1996.",
    body: "Incorporated in 1996 and growing steadily ever since, B.S. Electronics has become a leading manufacturer of printed circuit boards — serving automotive, industrial automation, consumer electronics and LED lighting customers across India with local roots and global standards.",
    align: "left",
  },
  {
    num: "02",
    title: "The PCB is everything.",
    body: "We recognise the PCB as an integral part of every electronics product. That belief keeps us open, flexible and genuinely willing to understand each customer's requirement — engineering to fit, not to a template.",
    align: "right",
  },
  {
    num: "03",
    title: "Built to last.",
    body: "Our core values are to build products and relationships that last for ages. We improve quality relentlessly through stringent systems and a continuous team-improvement process, backed by IATF 16949, ISO and UL certification.",
    align: "left",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Manifesto() {
  return (
    <section id="manifesto" data-testid="manifesto-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40 bg-white">
      <motion.p
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-[#2E3192] mb-20"
      >
        / About Us
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
            <span className="font-mono text-[#2E3192] text-xl md:text-2xl mb-6 tracking-tight">{c.num}</span>
            <h3 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-4xl sm:text-5xl md:text-7xl mb-8 text-[#0B1533]">
              {c.title}
            </h3>
            <p className="font-mono text-sm md:text-base text-[#5A6684] leading-relaxed max-w-xl">
              {c.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
