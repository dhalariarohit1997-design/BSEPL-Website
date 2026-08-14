import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Ticker from "@/components/site/Ticker";
import Manifesto from "@/components/site/Manifesto";
import Capabilities from "@/components/site/Capabilities";
import Gallery from "@/components/site/Gallery";
import Certifications from "@/components/site/Certifications";
import Clients from "@/components/site/Clients";
import QuoteForm from "@/components/site/QuoteForm";
import Contact from "@/components/site/Contact";

export default function Home() {
  return (
    <main data-testid="home-page" className="bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <Ticker />
      <Manifesto />
      <Capabilities />
      <Gallery />
      <Certifications />
      <Clients />
      <QuoteForm />
      <Contact />
    </main>
  );
}
