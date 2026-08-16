import { motion } from "framer-motion";

const chapters = [
  {
    num: "01",
    title: "Since 1996.",
    body: "Incorporated in 1996 and growing steadily ever since, B.S. Electronics has become a leading manufacturer of printed circuit boards — serving automotive, industrial automation, consumer electronics and LED lighting customers across India with local roots and global standards.",
    align: "left",
    bg: "/about/building.jpeg",
    fit: "cover",
    pos: "object-right",
  },
  {
    num: "02",
    title: "The PCB is everything.",
    body: "We recognise the PCB as an integral part of every electronics product. That belief keeps us open, flexible and genuinely willing to understand each customer's requirement — engineering to fit, not to a template.",
    align: "right",
    bg: "/about/circuit.jpeg",
  },
  {
    num: "03",
    title: "Built to last.",
    body: "Our core values are to build products and relationships that last for ages. We improve quality relentlessly through stringent systems and a continuous team-improvement process, backed by IATF 16949, ISO and UL certification.",
    align: "left",
    bg: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDB8fHx8MTc4Njg1OTYxMnww&ixlib=rb-4.1.0&q=85",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Manifesto() {
  return (
    <section id="manifesto" data-testid="manifesto-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 bg-white">
      <motion.p
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-[#2E3192] mb-14"
      >
        / About Us
      </motion.p>

      <div className="space-y-6 md:space-y-8">
        {chapters.map((c) => {
          const isRight = c.align === "right";
          return (
            <motion.div
              key={c.num}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              className="relative overflow-hidden border border-[#E2E6EF] bg-white group"
            >
              <img
                src={c.bg}
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 w-full h-full ${c.fit === "contain" ? "object-contain object-center" : `object-cover ${c.pos || "object-center"}`} opacity-[0.28] group-hover:opacity-[0.38] transition-opacity duration-700 pointer-events-none`}
              />
              <div
                className={`absolute inset-0 pointer-events-none bg-gradient-to-${isRight ? "l" : "r"} from-white via-white/55 to-transparent`}
              />
              <div
                className={`relative z-10 p-10 md:p-16 min-h-[380px] md:min-h-[440px] flex flex-col justify-center max-w-2xl ${
                  isRight ? "md:ml-auto md:text-right md:items-end" : ""
                }`}
              >
                <span className="font-mono text-black text-xl md:text-2xl mb-5 tracking-tight">{c.num}</span>
                <h3 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-4xl sm:text-5xl md:text-6xl mb-6 text-black">
                  {c.title}
                </h3>
                <p className="font-mono text-sm md:text-base text-black leading-relaxed max-w-xl">
                  {c.body}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
