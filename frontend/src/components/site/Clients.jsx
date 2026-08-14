import Marquee from "react-fast-marquee";

const partners = [
  "POLYCAB", "HAVELLS", "HALONIX", "ERD", "UTL SOLAR", "ORIENT",
  "IKIO", "HPL", "LIVGUARD", "BLUEBIRD", "PHOENIX",
];

export default function Clients() {
  return (
    <section id="clients" data-testid="clients-section" className="border-y border-[#262626] bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper mb-6">/ Our Partners</p>
        <h2 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-5xl md:text-7xl max-w-3xl">
          Trusted By India's Best.
        </h2>
      </div>

      <Marquee speed={45} gradient={false} pauseOnHover>
        {partners.map((p, i) => (
          <span
            key={i}
            data-testid={`partner-${i}`}
            className="mx-10 font-heading font-900 uppercase tracking-tighter text-4xl md:text-6xl text-[#333333] hover:text-copper transition-colors duration-300"
          >
            {p}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
