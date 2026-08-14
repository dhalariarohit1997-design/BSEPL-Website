import { motion } from "framer-motion";

const shots = [
  {
    url: "https://images.unsplash.com/photo-1562408590-e32931084e23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwxfHxwcmludGVkJTIwY2lyY3VpdCUyMGJvYXJkJTIwbWFjcm98ZW58MHx8fHwxNzg2NzIxMjA1fDA&ixlib=rb-4.1.0&q=85",
    alt: "Circuit board traces",
    caption: "Trace routing",
    span: "md:col-span-8 aspect-video",
  },
  {
    url: "https://images.unsplash.com/photo-1760842543713-108c3cadbba1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxjb3BwZXIlMjBlbGVjdHJvbmljJTIwY29tcG9uZW50c3xlbnwwfHx8fDE3ODY3MjEyMDV8MA&ixlib=rb-4.1.0&q=85",
    alt: "Copper components close up",
    caption: "Component detail",
    span: "md:col-span-4 aspect-square",
  },
  {
    url: "https://images.pexels.com/photos/7178310/pexels-photo-7178310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Manufacturing facility",
    caption: "The floor",
    span: "md:col-span-4 aspect-square",
  },
  {
    url: "https://images.unsplash.com/photo-1592659762303-90081d34b277?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwyfHxwcmludGVkJTIwY2lyY3VpdCUyMGJvYXJkJTIwbWFjcm98ZW58MHx8fHwxNzg2NzIxMjA1fDA&ixlib=rb-4.1.0&q=85",
    alt: "Macro PCB",
    caption: "4-layer stackup",
    span: "md:col-span-8 aspect-video",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" data-testid="gallery-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper mb-6">/ Gallery</p>
      <h2 className="font-heading font-900 uppercase tracking-tighter leading-[0.9] text-5xl md:text-7xl mb-16">
        Made Here.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {shots.map((s, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            data-testid={`gallery-item-${i}`}
            className={`group relative overflow-hidden border border-[#262626] ${s.span}`}
          >
            <img
              src={s.url}
              alt={s.alt}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent font-mono text-xs uppercase tracking-widest text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-copper">— </span>{s.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
