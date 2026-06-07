'use client'

import { motion } from 'framer-motion'

const EDITIONS = [
  { id: '016', title: 'Virtual Eden', year: '2026', img: '/media/media__1780859424596.jpg' },
  { id: '015', title: 'The Algorithm', year: '2026', img: '/media/media__1780859424647.jpg' },
  { id: '014', title: 'Future Elegance', year: '2026', img: '/media/media__1780859424676.jpg' }
]

export default function Section11_EditionArchive() {
  return (
    <section className="w-full bg-neutral-950 py-40 px-10 relative z-20 border-t border-white/10 perspective-1000">
      <div className="max-w-7xl mx-auto text-center mb-32">
        <h2 className="text-4xl font-serif text-white uppercase tracking-wider mb-4">Edition Archive</h2>
        <span className="text-xs uppercase tracking-[0.4em] text-white/50 font-mono">Collector Objects</span>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-20">
        {EDITIONS.map((edition, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, rotateY: 30, z: -100 }}
            whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
            whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05, z: 50 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="w-full max-w-[300px] aspect-[3/4] relative transform-style-3d cursor-pointer shadow-2xl shadow-black/80 group"
          >
            {/* The Physical Object */}
            <div className="absolute inset-0 bg-neutral-900 border border-white/10 rounded-sm overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
                style={{ backgroundImage: `url('${edition.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6">
                <span className="text-xs uppercase tracking-[0.3em] text-white/50 block mb-2 font-mono">Vol {edition.id} • {edition.year}</span>
                <h3 className="text-2xl font-serif text-white uppercase tracking-widest">{edition.title}</h3>
              </div>
            </div>

            {/* Simulated Thickness (Spine) */}
            <div className="absolute top-0 right-0 h-full w-4 bg-neutral-800 origin-right rotate-y-90 border-y border-r border-white/10" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
