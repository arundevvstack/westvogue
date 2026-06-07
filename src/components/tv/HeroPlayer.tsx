'use client'

import { motion } from 'framer-motion'
import { Play, Info } from 'lucide-react'

export default function HeroPlayer() {
  return (
    <div className="relative w-full h-[80vh] bg-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      
      {/* Placeholder for Cinematic Autoplay Video */}
      <div className="absolute inset-0 w-full h-full bg-black/50 animate-pulse" />
      
      <div className="absolute bottom-20 left-10 z-20 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-serif text-white uppercase tracking-wide mb-4 text-shadow-luxury"
        >
          Architects of Tomorrow
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/80 mb-8 font-light"
        >
          An exclusive documentary exploring the visionary minds shaping the future of digital couture and sustainable luxury.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4"
        >
          <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded hover:bg-platinum transition-colors font-semibold uppercase tracking-widest text-sm">
            <Play size={18} fill="currentColor" /> Play Film
          </button>
          <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded hover:bg-white/30 transition-colors uppercase tracking-widest text-sm">
            <Info size={18} /> Details
          </button>
        </motion.div>
      </div>
    </div>
  )
}
