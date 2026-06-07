'use client'

import { motion } from 'framer-motion'

export default function Scene03_EditorsLetter() {
  return (
    <section className="w-full min-h-screen bg-black relative z-20 flex flex-col items-center justify-center py-40 px-10 overflow-hidden border-t border-white/10">
      
      {/* Cinematic Footage Background generated from uploaded image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <img src="/media/media__1780859404127.jpg" alt="Editor Background" className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] text-white/50 mb-16 font-mono"
        >
          Editor's Letter
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-3xl md:text-5xl font-serif text-white leading-relaxed mb-12 italic"
        >
          "Fashion today exists beyond runways. It lives through creators, innovators, artists, and visionaries shaping culture worldwide."
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-20 max-w-2xl"
        >
          WESTVOGUE exists to document, celebrate, and define that future. We are not just observing the shift; we are archiving the very fabric of tomorrow's luxury.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 rounded-full border border-white/20 overflow-hidden">
            <img src="/media/media__1780859413985.jpg" alt="Editor" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          <span className="text-white uppercase tracking-widest font-serif text-lg">Mansi Malhotra</span>
          <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-mono">Editor-In-Chief</span>
        </motion.div>
      </div>
      
    </section>
  )
}
