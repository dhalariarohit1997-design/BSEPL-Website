import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const certs = [
  { name: "IATF 16949:2016", note: "Automotive Quality" },
  { name: "ISO 9001:2015", note: "Quality Management" },
  { name: "ISO 14001:2015", note: "Environmental" },
  { name: "ISO 45001:2018", note: "Health & Safety" },
  { name: "RoHS", note: "Compliant" },
  { name: "UL", note: "Expected 2025" },
];

export default function Certifications() {
  return (
    <section id="certifications" data-testid="certifications-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper mb-6">/ Quality & Compliance</p>
          <h2 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-5xl md:text-7xl">
            Certified<br />To The Core.
          </h2>
        </div>
        <p className="font-mono text-sm text-[#A3A3A3] max-w-sm leading-relaxed">
          Quality improved through stringent systems and a continuous team-improvement process — verified by international standards.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#262626] border border-[#262626]">
        {certs.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            data-testid={`cert-${i}`}
            className="group bg-[#0A0A0A] p-8 flex flex-col gap-4 hover:bg-[#121212] transition-colors duration-300"
          >
            <BadgeCheck className="w-6 h-6 text-[#404040] group-hover:text-copper transition-colors duration-300" strokeWidth={1.5} />
            <div>
              <p className="font-heading font-700 text-lg tracking-tight leading-none">{c.name}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3] mt-2">{c.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
