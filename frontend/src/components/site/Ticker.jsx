import Marquee from "react-fast-marquee";

const items = [
  "UP TO 4-LAYER PCBs",
  "MADE IN KUNDLI, HARYANA",
  "RAPID PROTOTYPING",
  "HIGH VOLUME PRODUCTION",
  "IPC-A-600 STANDARDS",
  "FR-4 · ALUMINIUM · ROGERS",
];

export default function Ticker() {
  return (
    <div data-testid="ticker" className="border-y border-[#262626] bg-[#0A0A0A] py-4">
      <Marquee speed={40} gradient={false}>
        {items.map((t, i) => (
          <span key={i} className="mx-8 flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-[#A3A3A3]">
            {t}
            <span className="text-copper">◆</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
