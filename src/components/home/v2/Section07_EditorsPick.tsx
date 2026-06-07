'use client'

import { motion } from 'framer-motion'

const IMAGES = [
  '/media/media__1780859424647.jpg'
]

export default function Section07_EditorsPick() {
  return (
    <section className="w-full bg-neutral-950 py-40 px-10 relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <span className="text-xs uppercase tracking-[0.4em] text-white/50 mb-10 font-mono block text-center">Editor's Pick</span>
        
        <div className="max-w-5xl text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-7xl font-serif text-white uppercase tracking-wider leading-tight"
          >
            Modern Power Dressing Meets Digital-Era Influence
          </motion.h2>
        </div>

        <div className="w-full aspect-video relative overflow-hidden group border border-white/10 mb-20">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105 mix-blend-luminosity group-hover:mix-blend-normal" style={{ backgroundImage: `url('${IMAGES[0]}')` }} />
        </div>

        <div className="max-w-3xl text-center">
          <p className="text-xl md:text-3xl font-serif text-white/80 font-light leading-relaxed mb-10 italic">
            "Nova Rae redefines contemporary luxury through a seamless blend of fashion, technology, and artistic identity."
          </p>
          <p className="text-lg text-white/50 font-light leading-relaxed uppercase tracking-widest text-sm">
            More than a fashion statement, this aesthetic represents confidence, vision, and global connectivity.
          </p>
        </div>

      </div>
    </section>
  )
}
