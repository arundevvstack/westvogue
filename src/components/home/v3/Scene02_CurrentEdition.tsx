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
  const yOffset = useTransform(scrollYProgress, [0, 1], [150, -150])

  // Refined, elegant 3D Scroll Animations (no janky cover opening)
  const magRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -25])
  const magRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, 15])
  const magScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 0.85])
  const magZ = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 20, -100])
  const magOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])

  return (
    <section ref={containerRef} className="w-full h-[150vh] bg-neutral-950 relative z-20 flex items-center justify-center overflow-hidden border-t border-white/10 perspective-1000">
      
      <div className="absolute top-20 left-10 text-white/50 text-xs font-mono uppercase tracking-[0.4em]">Current Edition</div>
      <div className="absolute top-20 right-10 text-white/50 text-xs font-mono uppercase tracking-[0.4em]">Vol. 001</div>

      <motion.div style={{ y: yOffset }} className="w-full max-w-7xl px-10 flex flex-col md:flex-row items-center gap-20">
        
        {/* Left: 3D Floating Magazine */}
        <div className="w-full md:w-1/2 flex justify-center perspective-[2500px]">
          <motion.div 
            className="w-[80%] max-w-[400px] aspect-[3/4] relative transform-style-3d cursor-pointer"
            style={{ 
              rotateY: magRotateY, 
              rotateX: magRotateX,
              scale: magScale,
              z: magZ,
              opacity: magOpacity
            }}
          >
            {/* Front Cover Only - clean and elegant */}
            <div className="absolute inset-0 bg-neutral-900 shadow-[30px_30px_60px_rgba(0,0,0,0.9),-10px_-10px_20px_rgba(255,255,255,0.05)] z-20 overflow-hidden rounded-r-md">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" alt="Cover" className="w-full h-full object-cover" />
              
              {/* Glossy overlay reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50 mix-blend-overlay" />
            </div>

            {/* Thick Spine Simulation */}
            <div className="absolute top-0 left-0 h-full w-8 bg-neutral-950 origin-left rotate-y-[90deg] border-y border-l border-white/5" />
            
            {/* Pages Edge Simulation */}
            <div className="absolute top-0 right-0 h-full w-8 bg-[#ddd] origin-right -rotate-y-[90deg] flex flex-col justify-evenly overflow-hidden">
              {Array.from({length: 20}).map((_, i) => (
                 <div key={i} className="w-full h-[1px] bg-black/10" />
              ))}
            </div>

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
