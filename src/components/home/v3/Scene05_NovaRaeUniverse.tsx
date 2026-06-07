'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Scene05_NovaRaeUniverse() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Deep parallax for the giant background portrait
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const portraitScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.1])
  
  const sections = [
    'Biography',
    'Fashion Films',
    'Lifestyle',
    'Editorial Features',
    'Campaigns',
    'Music',
    'Luxury Travel'
  ]

  return (
    <section ref={containerRef} className="w-full h-[200vh] bg-black relative z-20 overflow-hidden border-t border-white/10">
      
      {/* Immersive Portrait Background */}
      <motion.div style={{ y: portraitY, scale: portraitScale }} className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <img src="/media/media__1780859424575.jpg" alt="Nova Rae Universe" className="w-full h-full object-cover origin-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </motion.div>

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-10 flex flex-col justify-center">
        
        {/* Giant Typography Reveal */}
        <div className="mb-20">
          <motion.h2 
            className="text-[15vw] font-serif text-white uppercase tracking-tighter leading-[0.8] mix-blend-overlay"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            NOVA
          </motion.h2>
          <motion.h2 
            className="text-[15vw] font-serif text-white uppercase tracking-tighter leading-[0.8] ml-20 mix-blend-overlay"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          >
            RAE
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-20">
          {/* Identity Block */}
          <div className="w-full md:w-1/3">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l border-white/20 pl-6 flex flex-col gap-4"
            >
              <h3 className="text-white text-2xl font-serif italic">Virtual Artist.</h3>
              <h3 className="text-white/70 text-2xl font-serif italic">Cultural Icon.</h3>
              <h3 className="text-white/40 text-2xl font-serif italic">Fashion Visionary.</h3>
            </motion.div>
          </div>

          {/* Interactive Universe Menu */}
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {sections.map((section, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer flex items-center gap-6"
              >
                <div className="w-12 h-[1px] bg-white/20 group-hover:bg-white group-hover:w-20 transition-all duration-500" />
                <span className="text-white/50 group-hover:text-white uppercase tracking-[0.2em] font-mono text-sm transition-colors duration-500">{section}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Floating Gallery Elements (Foreground Parallax) */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [200, -200]) }}
        className="absolute right-20 top-1/3 w-64 aspect-[3/4] z-20 pointer-events-none hidden lg:block"
      >
        <img src="/media/media__1780859424596.jpg" alt="Gallery 1" className="w-full h-full object-cover border border-white/10 shadow-2xl" />
      </motion.div>

    </section>
  )
}
