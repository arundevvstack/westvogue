'use client'

import { motion } from 'framer-motion'

export default function Scene12_Footer() {
  return (
    <section className="w-full bg-black relative z-20 border-t border-white/10 overflow-hidden flex flex-col justify-end min-h-screen">
      
      {/* Slow Cinematic Montage Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <img src="/media/media__1780859424684.jpg" alt="Footer Cinematic" className="w-full h-full object-cover mix-blend-luminosity" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 mb-32 text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-4xl md:text-6xl font-serif text-white leading-relaxed font-light mb-8 italic"
        >
          "Style is not about what you wear."
        </motion.h3>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-4xl md:text-6xl font-serif text-white leading-relaxed font-light mb-16 italic"
        >
          "It's about the world you create."
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-white/50 uppercase tracking-[0.4em] font-mono text-sm"
        >
          — Nova Rae
        </motion.p>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-end pb-20 gap-16">
        <div>
          <motion.h1 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 2 }}
            className="text-5xl md:text-8xl font-serif text-white uppercase tracking-tighter leading-none mb-6 drop-shadow-2xl"
          >
            WESTVOGUE
          </motion.h1>
          <span className="text-white/40 uppercase tracking-[0.5em] font-mono text-xs block mb-12">The Global Fashion Authority</span>
          
          <div className="flex gap-4 max-w-sm">
            <input type="email" placeholder="YOUR EMAIL" className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white uppercase tracking-widest text-sm placeholder:text-white/30 focus:outline-none focus:border-white transition-colors" />
            <button className="text-white uppercase tracking-widest text-xs border-b border-white hover:text-white/70 transition-colors whitespace-nowrap">Subscribe</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-col items-start md:items-end gap-x-8 gap-y-4 text-white/60 text-xs uppercase tracking-[0.2em] font-mono">
          {['Editions', 'Films', 'Designers', 'Brands', 'Fashion Intelligence', 'Social Network', 'Privacy', 'Terms'].map((link, i) => (
            <span key={i} className="hover:text-white cursor-pointer transition-colors whitespace-nowrap">{link}</span>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 w-full border-t border-white/10 py-8 text-center bg-black">
        <span className="text-white/30 text-xs uppercase tracking-[0.3em] font-mono">
          © 2026 DP WESTVOGUE. All Rights Reserved.
        </span>
      </div>
    </section>
  )
}
