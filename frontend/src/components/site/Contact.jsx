import { MapPin, Mail, Phone, CircuitBoard } from "lucide-react";

const details = [
  { icon: MapPin, label: "Address", value: "Plot No. 327, Phase-V, Sector-56, EHTP Industrial Area, Kundli, Sonepat, Haryana 131028, India" },
  { icon: Phone, label: "Phone", value: "+91 00000 00000" },
  { icon: Mail, label: "Email", value: "info@bselectronics.example" },
];

export default function Contact() {
  return (
    <footer id="contact" data-testid="contact-section" className="border-t border-[#262626]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <CircuitBoard className="w-6 h-6 text-copper" strokeWidth={1.5} />
              <span className="font-heading font-900 text-xl tracking-tighter uppercase">B.S.<span className="text-copper">Electronics</span></span>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-copper mb-6">Complete PCB Solution · Est. 1996</p>
            <h3 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-4xl md:text-6xl max-w-xl">
              Let's build your circuit.
            </h3>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
            {details.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i} data-testid={`contact-detail-${i}`} className={`bg-[#0A0A0A] p-8 ${i === 0 ? "sm:col-span-2" : ""}`}>
                  <Icon className="w-5 h-5 text-copper mb-4" strokeWidth={1.5} />
                  <p className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3] mb-2">{d.label}</p>
                  <p className="font-mono text-sm text-white leading-relaxed">{d.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#262626] flex flex-col md:flex-row justify-between gap-4 font-mono text-xs uppercase tracking-widest text-[#525252]">
          <span>© {new Date().getFullYear()} B.S. Electronics Pvt. Ltd. — All rights reserved</span>
          <span>Complete PCB Solution</span>
        </div>
      </div>
    </footer>
  );
}
