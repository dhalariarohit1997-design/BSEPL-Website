import Marquee from "react-fast-marquee";

const items = [
  "SINGLE-SIDED · DOUBLE-SIDED · METAL-CLAD PCBs",
  "PROUDLY MADE IN INDIA SINCE 1996",
  "IATF 16949 · ISO 9001 · UL CERTIFIED",
  "18,500 SQ.M / MONTH CAPACITY",
  "AUTOMOTIVE · INDUSTRIAL AUTOMATION · CONSUMER ELECTRONICS · LED",
];

export default function Ticker() {
  return (
    <div data-testid="ticker" className="border-y border-[#E2E6EF] bg-[#2E3192] py-4">
      <Marquee speed={40} gradient={false}>
        {items.map((t, i) => (
          <span key={i} className="mx-8 flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-white/90">
            {t}
            <span className="text-white/40">◆</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
