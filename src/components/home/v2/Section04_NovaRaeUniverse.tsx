'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const IMAGES = [
  '/media/media__1780859414099.jpg',
  '/media/media__1780859414116.jpg',
  '/media/media__1780859424575.jpg'
]

export default function Section04_NovaRaeUniverse() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const rightY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <section ref={containerRef} className="w-full bg-black py-32 relative z-20 border-t border-white/10 overflow-hidden">
      <div className="max-w-[100vw] mx-auto flex flex-col md:flex-row gap-0">
        
        {/* Left: Portrait Imagery (Parallax Down) */}
        <motion.div style={{ y: leftY }} className="w-full md:w-1/2 h-[120vh] relative group cursor-crosshair">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url('${IMAGES[0]}')` }} />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
          
          <div className="absolute bottom-20 left-10 z-10 mix-blend-difference">
            <h2 className="text-[8vw] font-serif text-white uppercase leading-none tracking-tighter">NOVA</h2>
            <h2 className="text-[8vw] font-serif text-white uppercase leading-none tracking-tighter indent-20">RAE</h2>
          </div>
        </motion.div>

        {/* Right: Editorial Story (Parallax Up) */}
        <motion.div style={{ y: rightY }} className="w-full md:w-1/2 h-[120vh] bg-neutral-950 p-20 flex flex-col justify-center border-l border-white/10">
          <span className="text-xs uppercase tracking-[0.4em] text-white/50 mb-10 font-mono">Nova Rae Universe</span>
          
          <h3 className="text-3xl font-serif text-white uppercase tracking-widest mb-4">Virtual Artist.</h3>
          <h3 className="text-3xl font-serif text-white uppercase tracking-widest mb-4 text-white/70">Cultural Icon.</h3>
          <h3 className="text-3xl font-serif text-white uppercase tracking-widest mb-16 text-white/40">Modern Influence.</h3>
          
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-16">
            {['Fashion', 'Music', 'Culture', 'Technology', 'Luxury'].map((tag, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-[1px] bg-white/20 group-hover:bg-white transition-colors" />
                <span className="text-white/60 group-hover:text-white uppercase tracking-widest text-sm transition-colors">{tag}</span>
              </div>
            ))}
          </div>

          {/* Inline Editorial Image */}
          <div className="w-full aspect-video relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000" style={{ backgroundImage: `url('${IMAGES[1]}')` }} />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
