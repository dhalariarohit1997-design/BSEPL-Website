import { motion } from "framer-motion";
import { Layers, Ruler, Cpu, Gauge, ShieldCheck, Boxes } from "lucide-react";

const cells = [
  {
    span: "md:col-span-7 md:row-span-2",
    label: "Monthly Capacity",
    value: "18,500",
    unit: "Sq. Meters / Month",
    desc: "Across two dedicated plants — Unit I for single-sided & metal-clad PCBs (15,000 sq.m) and Unit II for double-sided PCBs (3,500 sq.m) — from prototype to high-volume production.",
    icon: Boxes,
    big: true,
  },
  { span: "md:col-span-5", label: "Min Track / Spacing", value: "0.20", unit: "mm", icon: Ruler },
  { span: "md:col-span-5", label: "Min Via Hole", value: "0.30", unit: "mm (finish)", icon: Cpu },
  { span: "md:col-span-4", label: "Base Material", value: "FR-4", unit: "· Aluminium · CEM", icon: Layers },
  { span: "md:col-span-4", label: "Surface Finish", value: "HAL", unit: "· OSP · Lacquer", icon: ShieldCheck },
  { span: "md:col-span-4", label: "Tolerance", value: "±0.1", unit: "mm", icon: Gauge },
];

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] } }),
};

export default function Capabilities() {
  return (
    <section id="capabilities" data-testid="capabilities-section" className="bg-[#F7F8FA] border-y border-[#E2E6EF]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#2E3192] mb-6">/ Capabilities</p>
            <h2 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-5xl md:text-7xl text-[#0B1533]">
              The Spec Sheet
            </h2>
          </div>
          <p className="font-mono text-sm text-[#5A6684] max-w-sm leading-relaxed">
            A fabrication window tuned for reliability, across single-sided, double-sided and metal-clad boards. Need something outside these bounds? Ask — we engineer to fit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#E2E6EF] border border-[#E2E6EF]">
          {cells.map((c, i) => {
            const Icon = c.icon;
            const isBlue = i % 2 === 1;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                data-testid={`capability-cell-${i}`}
                className={`group relative ${isBlue ? "bg-[#2E3192]" : "bg-white hover:bg-[#F2F4FA]"} p-8 md:p-10 overflow-hidden ${c.span} flex flex-col justify-between min-h-[180px] ${c.big ? "md:min-h-[380px]" : ""} transition-colors duration-300`}
              >
                <div className="flex items-start justify-between">
                  <span className={`font-mono text-xs uppercase tracking-widest ${isBlue ? "text-white/70" : "text-[#5A6684]"}`}>{c.label}</span>
                  <Icon className={`w-5 h-5 transition-colors duration-300 ${isBlue ? "text-white" : "text-[#C7CEDE] group-hover:text-[#2E3192]"}`} strokeWidth={1.5} />
                </div>
                <div>
                  <div className={`font-heading font-900 tracking-tighter leading-none ${isBlue ? "text-white" : "text-[#0B1533]"} ${c.big ? "text-7xl md:text-9xl" : "text-5xl md:text-6xl"}`}>
                    {c.value}
                  </div>
                  <div className={`font-mono text-sm mt-2 ${isBlue ? "text-white/80" : "text-[#2E3192]"}`}>{c.unit}</div>
                  {c.desc && <p className={`font-mono text-sm mt-6 max-w-md leading-relaxed ${isBlue ? "text-white/80" : "text-[#5A6684]"}`}>{c.desc}</p>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
