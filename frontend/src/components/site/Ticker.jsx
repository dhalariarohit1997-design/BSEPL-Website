import Marquee from "react-fast-marquee";

const items = [
  "SINGLE-SIDED · DOUBLE-SIDED · METAL-CLAD PCBs",
  "MADE IN KUNDLI SINCE 1996",
  "IATF 16949 · ISO 9001 CERTIFIED",
  "18,500 SQ.M / MONTH CAPACITY",
  "FR-4 · ALUMINIUM · CEM",
  "AUTOMOTIVE · LED · CONSUMER ELECTRONICS",
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
