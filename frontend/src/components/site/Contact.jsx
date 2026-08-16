import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" data-testid="contact-section" className="border-t border-[#E2E6EF] bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <img src="/bsepl-logo.png" alt="B.S. Electronics — Complete PCB Solution" className="h-20 w-auto mb-8" />
            <h3 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-4xl md:text-6xl max-w-xl text-[#0B1533]">
              Let's build your circuit.
            </h3>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E2E6EF] border border-[#E2E6EF]">
            <div data-testid="contact-detail-address" className="bg-white p-8 sm:col-span-2">
              <MapPin className="w-5 h-5 text-[#2E3192] mb-4" strokeWidth={1.5} />
              <p className="font-mono text-xs uppercase tracking-widest text-[#5A6684] mb-2">Address</p>
              <p className="font-mono text-sm text-[#0B1533] leading-relaxed">
                Plot No. 327, Phase-V, Sector-56, EHTP Industrial Area, Kundli, Sonepat, Haryana 131028, India
              </p>
            </div>
            <div data-testid="contact-detail-phone" className="bg-white p-8">
              <Phone className="w-5 h-5 text-[#2E3192] mb-4" strokeWidth={1.5} />
              <p className="font-mono text-xs uppercase tracking-widest text-[#5A6684] mb-2">Phone</p>
              <a href="tel:+918708348204" className="font-mono text-sm text-[#0B1533] hover:text-[#2E3192] transition-colors duration-300">+91 87083 48204</a>
            </div>
            <div data-testid="contact-detail-email" className="bg-white p-8">
              <Mail className="w-5 h-5 text-[#2E3192] mb-4" strokeWidth={1.5} />
              <p className="font-mono text-xs uppercase tracking-widest text-[#5A6684] mb-2">Email</p>
              <a href="mailto:info@bsepl.com" className="block font-mono text-sm text-[#0B1533] hover:text-[#2E3192] transition-colors duration-300">info@bsepl.com</a>
              <a href="mailto:rohit@bsepl.com" className="block font-mono text-sm text-[#0B1533] hover:text-[#2E3192] transition-colors duration-300 mt-1">rohit@bsepl.com</a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#E2E6EF] flex flex-col md:flex-row justify-between gap-4 font-mono text-xs uppercase tracking-widest text-[#9AA6BD]">
          <span>© {new Date().getFullYear()} B.S. Electronics Pvt. Ltd. — All rights reserved</span>
          <span>Complete PCB Solution</span>
        </div>
      </div>
    </footer>
  );
}
