import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#manifesto" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Quality Certifications", href: "#certifications" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-[#E2E6EF]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-24 flex items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="nav-logo"
          className="flex items-center shrink-0"
        >
          <img src="/bsepl-logo.png" alt="B.S. Electronics — Complete PCB Solution" className="h-16 md:h-20 w-auto" />
        </button>

        <span className="hidden xl:block ml-6 font-heading font-900 uppercase tracking-tight text-[#E1251B] text-xl 2xl:text-2xl leading-none whitespace-nowrap" style={{ WebkitTextStroke: "0.5px #E1251B" }}>B.S. Electronics Pvt. Ltd.</span>

        <div className="hidden md:flex items-center gap-9 ml-6 xl:ml-8">
          {links.map((l) => (
            <button
              key={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              onClick={() => go(l.href)}
              className="font-mono text-xs uppercase tracking-widest text-black hover:text-[#2E3192] transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          data-testid="nav-contact-button"
          onClick={() => go("#contact")}
          className="font-mono text-xs uppercase tracking-widest bg-[#2E3192] hover:bg-[#3B3FB0] text-white px-5 py-3 transition-colors duration-300 font-700 ml-auto"
        >
          Contact Us
        </button>
      </div>
    </motion.nav>
  );
}
