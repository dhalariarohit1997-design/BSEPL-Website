import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CircuitBoard } from "lucide-react";

const links = [
  { label: "About", href: "#manifesto" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Clients", href: "#clients" },
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
        scrolled ? "bg-[#050505]/90 backdrop-blur-md border-b border-[#262626]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <CircuitBoard className="w-6 h-6 text-copper" strokeWidth={1.5} />
          <span className="font-heading font-900 text-lg tracking-tighter uppercase">
            B.S.<span className="text-copper">Electronics</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              onClick={() => go(l.href)}
              className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3] hover:text-copper transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          data-testid="nav-quote-button"
          onClick={() => go("#quote")}
          className="font-mono text-xs uppercase tracking-widest bg-copper hover:bg-copper-hover text-[#050505] px-5 py-3 transition-colors duration-300 font-700"
        >
          Request Quote
        </button>
      </div>
    </motion.nav>
  );
}
