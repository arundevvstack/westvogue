'use client'

import { motion } from 'framer-motion'

const PICKS = [
  { topic: 'Digital Luxury', title: 'The Algorithm of Elegance', img: 'https://images.unsplash.com/photo-1550614000-4b95d415eb1a?q=80&w=800&auto=format&fit=crop', excerpt: 'How artificial intelligence is reshaping the atelier.' },
  { topic: 'Modern Icons', title: 'Power Dressing 2026', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop', excerpt: 'The new rules of corporate dominance and silhouette.' },
  { topic: 'Fashion Intelligence', title: 'The Asian Market Boom', img: 'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=800&auto=format&fit=crop', excerpt: 'Why Tokyo, Seoul, and Mumbai are the new fashion capitals.' }
]

export default function Scene07_EditorsPicks() {
  return (
    <section className="w-full bg-black py-40 px-10 relative z-20 border-t border-white/10">
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-32">
        <span className="text-xs uppercase tracking-[0.4em] text-white/50 mb-10 font-mono">Curated Read</span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tighter"
        >
          Editor's Picks
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {PICKS.map((pick, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="group cursor-pointer flex flex-col gap-6"
          >
            <div className="w-full aspect-[4/5] overflow-hidden relative">
              <img 
                src={pick.img} 
                alt={pick.title} 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-500" />
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-white/40 uppercase tracking-[0.2em] font-mono text-[10px]">{pick.topic}</span>
              <h3 className="text-2xl font-serif text-white uppercase tracking-widest">{pick.title}</h3>
              <p className="text-white/50 font-light text-sm line-clamp-2 mt-2">{pick.excerpt}</p>
            </div>
            
            <div className="w-8 h-[1px] bg-white/30 group-hover:w-full group-hover:bg-white transition-all duration-500 mt-2" />
          </motion.div>
        ))}
      </div>

    </section>
  )
}
