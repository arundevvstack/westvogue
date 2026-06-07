'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const DESIGNERS = [
  { name: 'Elena Rossi', role: 'Architectural Tailoring', location: 'Milan', img: '/media/media__1780859424676.jpg' },
  { name: 'Hiroshi Kameda', role: 'Cybernetic Textures', location: 'Tokyo', img: '/media/media__1780859414045.jpg' },
  { name: 'Aria Vance', role: 'Digital Couture', location: 'London', img: '/media/media__1780859414116.jpg' },
  { name: 'Julian Thorne', role: 'Avant-Garde Silhouettes', location: 'New York', img: '/media/media__1780859424596.jpg' },
  { name: 'Lila Chen', role: 'Synthetic Materials', location: 'Shanghai', img: '/media/media__1780859442798.jpg' },
  { name: 'Marcus Sterling', role: 'Neo-Minimalism', location: 'Paris', img: '/media/media__1780859442818.jpg' },
]

export default function DesignerUniverse() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <main className="w-full min-h-screen bg-black pt-32 px-10 pb-32 relative overflow-hidden selection:bg-white/30">
      
      {/* Background Image that changes on hover */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 opacity-20">
        {DESIGNERS.map((designer, i) => (
          <div 
            key={designer.name}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 mix-blend-luminosity"
            style={{ 
              backgroundImage: `url('${designer.img}')`,
              opacity: hoveredIndex === i ? 1 : 0
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <span className="text-white/50 tracking-[0.4em] uppercase text-xs font-mono mb-4 block">The Creators</span>
          <h1 className="text-6xl md:text-8xl font-serif text-white uppercase tracking-tighter mb-6">Designer<br/>Universe</h1>
          <p className="text-white/50 tracking-widest uppercase text-xs max-w-xl leading-relaxed font-mono">
            Profiles of the world's most visionary luxury architects. Hover to preview aesthetic signatures.
          </p>
        </motion.div>
        
        <div className="w-full flex flex-col">
          {DESIGNERS.map((designer, i) => (
            <motion.div 
              key={designer.name} 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-16 border-t border-white/10 group cursor-pointer relative"
            >
              {/* Hover Line Effect */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-4xl md:text-7xl font-serif text-white uppercase tracking-wider group-hover:pl-4 transition-all duration-500">
                  {designer.name}
                </h3>
                <span className="text-white/40 uppercase tracking-[0.3em] font-mono text-xs group-hover:pl-4 transition-all duration-500 delay-75">
                  {designer.role}
                </span>
              </div>

              <div className="hidden md:flex flex-col items-end gap-2 relative z-10">
                <span className="text-white/80 font-serif italic text-2xl uppercase">{designer.location}</span>
                <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-mono group-hover:text-white transition-colors">
                  View Dossier
                </span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </main>
  )
}
