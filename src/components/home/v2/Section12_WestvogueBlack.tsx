'use client'

import { motion } from 'framer-motion'

export default function Section12_WestvogueBlack() {
  return (
    <section className="w-full h-screen bg-black relative z-20 border-t border-white/10 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-neutral-900" />
      
      {/* Abstract Obsidian Shapes */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[100px] bg-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 text-center px-10">
        <h2 className="text-sm font-mono text-white/50 uppercase tracking-[0.6em] mb-10">Exclusive Membership</h2>
        <h3 className="text-6xl md:text-8xl font-serif text-white uppercase tracking-widest mb-6">WESTVOGUE <span className="text-white/20">BLACK</span></h3>
        <p className="text-white/60 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
          Access private editions, exclusive industry intelligence reports, global masterclasses, and highly curated premium content.
        </p>
        
        <button className="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-neutral-200 transition-colors">
          Request Access
        </button>
      </div>
    </section>
  )
}
