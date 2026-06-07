'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Play } from 'lucide-react'

export default function Scene02_CurrentEdition() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Deep Parallax for the entire section
  const yOffset = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="w-full h-[150vh] bg-neutral-950 relative z-20 flex items-center justify-center overflow-hidden border-t border-white/10 perspective-1000">
      
      <div className="absolute top-20 left-10 text-white/50 text-xs font-mono uppercase tracking-[0.4em]">Current Edition</div>
      <div className="absolute top-20 right-10 text-white/50 text-xs font-mono uppercase tracking-[0.4em]">Vol. 001</div>

      <motion.div style={{ y: yOffset }} className="w-full max-w-7xl px-10 flex flex-col md:flex-row items-center gap-20">
        
        {/* Left: 3D Floating Magazine */}
        <div className="w-full md:w-1/2 flex justify-center perspective-[2000px]">
          <motion.div 
            className="w-[80%] max-w-[400px] aspect-[3/4] relative transform-style-3d cursor-pointer"
            initial={{ rotateY: 20, rotateX: 10 }}
            animate={{ 
              rotateY: isHovered ? 0 : 20, 
              rotateX: isHovered ? 0 : 10,
              scale: isHovered ? 1.05 : 1,
              z: isHovered ? 50 : 0
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Front Cover */}
            <div className="absolute inset-0 bg-neutral-900 border border-white/10 shadow-[20px_20px_50px_rgba(0,0,0,0.8)] origin-left transition-transform duration-1000 z-20 overflow-hidden" style={{ transform: isHovered ? 'rotateY(-15deg)' : 'rotateY(0deg)' }}>
              <img src="/media/media__1780859404113.jpg" alt="Cover" className="w-full h-full object-cover" />
            </div>

            {/* Inner Spread (Preview Video) */}
            <div className="absolute inset-0 bg-black border border-white/20 origin-left transition-transform duration-1000 z-10 overflow-hidden flex items-center justify-center" style={{ transform: isHovered ? 'rotateY(-5deg) translateZ(-2px)' : 'rotateY(0deg) translateZ(-2px)' }}>
              {isHovered && (
                <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80">
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-on-a-rooftop-34440-large.mp4" type="video/mp4" />
                </video>
              )}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                <Play className="w-12 h-12 text-white/50" />
              </div>
            </div>

            {/* Spine */}
            <div className="absolute top-0 right-0 h-full w-6 bg-neutral-800 origin-right rotate-y-90 border-y border-r border-white/10" />
          </motion.div>
        </div>

        {/* Right: Editorial Typography */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-8">
          <motion.h4 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white/60 font-serif text-2xl italic"
          >
            June 2026
          </motion.h4>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-serif text-white uppercase tracking-tighter leading-none"
          >
            The Art Of <br/> Modern Icons
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 border-l border-white/20 pl-6 my-4"
          >
            <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-mono">Cover Star</span>
            <span className="text-white text-2xl font-serif uppercase tracking-widest">Nova Rae</span>
          </motion.div>

          <div className="flex gap-4 mt-8">
            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 transition-colors">
              Read Edition
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors flex items-center gap-3">
              <Play className="w-4 h-4" /> Watch Film
            </button>
          </div>
        </div>

      </motion.div>
    </section>
  )
}
