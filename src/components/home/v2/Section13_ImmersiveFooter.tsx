'use client'

import { motion } from 'framer-motion'

const IMAGES = [
  '/media/media__1780859424684.jpg',
  '/media/media__1780859442696.jpg'
]

export default function Section13_ImmersiveFooter() {
  return (
    <section className="w-full bg-black relative z-20 border-t border-white/10 overflow-hidden flex flex-col justify-end min-h-screen pt-32">
      {/* Background Montage */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity" style={{ backgroundImage: `url('${IMAGES[0]}')` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 mb-20 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-serif text-white leading-relaxed font-light mb-8 italic"
        >
          "Fashion is not simply what we wear."
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-5xl font-serif text-white leading-relaxed font-light mb-20 italic"
        >
          "It's the story we leave behind."
        </motion.p>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-end pb-20 gap-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-tighter leading-none mb-4">WESTVOGUE</h2>
          <span className="text-white/40 uppercase tracking-[0.5em] font-mono text-xs block mb-10">The Global Fashion Authority</span>
          
          <div className="flex gap-4 max-w-sm">
            <input type="email" placeholder="YOUR EMAIL" className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white uppercase tracking-widest text-sm placeholder:text-white/30 focus:outline-none focus:border-white transition-colors" />
            <button className="text-white uppercase tracking-widest text-xs border-b border-white hover:text-platinum transition-colors whitespace-nowrap">Subscribe</button>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 text-white/50 text-xs uppercase tracking-[0.2em] font-mono">
          {['Editions', 'Intelligence', 'Westvogue TV', 'Nova Rae', 'Black Vault', 'Privacy', 'Terms'].map((link, i) => (
            <span key={i} className="hover:text-white cursor-pointer transition-colors">{link}</span>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 w-full border-t border-white/10 py-6 text-center text-white/30 text-xs uppercase tracking-widest font-mono">
        © 2026 DP WESTVOGUE. All Rights Reserved.
      </div>
    </section>
  )
}
