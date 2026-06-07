'use client'

import { motion } from 'framer-motion'

export default function Scene11_WestvogueBlack() {
  return (
    <section className="w-full min-h-screen bg-black relative z-20 border-t border-white/10 flex items-center justify-center overflow-hidden">
      
      {/* Obsidian Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
      
      {/* Abstract Animated Aura */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full blur-[120px] bg-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      {/* Gold Particle Simulation using Box-Shadow trick or simple divs */}
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,215,0,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div className="relative z-10 w-full max-w-5xl px-10 flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-white/50 uppercase tracking-[0.6em] mb-12"
        >
          Exclusive Membership
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-6xl md:text-9xl font-serif text-white uppercase tracking-tighter mb-8"
        >
          WESTVOGUE <br/><span className="text-white/20">BLACK</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-white/60 font-light max-w-2xl mx-auto mb-20 leading-relaxed text-lg md:text-xl"
        >
          Enter the obsidian vault. Gain absolute access to private digital editions, confidential fashion intelligence reports, and global masterclasses.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {['Private Reports', 'Exclusive Editions', 'Industry Access', 'Masterclasses'].map((benefit, i) => (
            <span key={i} className="px-6 py-2 border border-white/20 text-white/70 text-xs font-mono uppercase tracking-widest bg-white/5 backdrop-blur-md">
              {benefit}
            </span>
          ))}
        </motion.div>

        <motion.button 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="px-16 py-6 bg-white text-black font-bold uppercase tracking-[0.3em] text-sm hover:bg-neutral-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
        >
          Request Access
        </motion.button>
      </div>

    </section>
  )
}
