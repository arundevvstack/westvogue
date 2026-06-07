'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IMAGES = [
  '/media/media__1780859424596.jpg' // Using a detail image
]

export default function Section05_FashionNote() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)
  
  const hotspots = [
    { id: 1, top: '30%', left: '45%', title: 'Leather Textures', desc: 'Premium espresso-brown leather with architectural stiffness.' },
    { id: 2, top: '55%', left: '50%', title: 'Gold Hardware', desc: 'Custom structural gold accents redefining power dressing.' },
    { id: 3, top: '75%', left: '40%', title: 'Python Detailing', desc: 'Subtle python textures adding depth and luxury.' },
    { id: 4, top: '40%', left: '65%', title: 'Tailored Silhouettes', desc: 'Precision tailoring that balances confidence and sophistication.' }
  ]

  return (
    <section className="w-full h-[150vh] bg-black relative z-20 border-t border-white/10 flex flex-col">
      <div className="py-20 px-10 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono block">The Fashion Note</span>
        <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-wider">Power Dressing Redefined</h2>
      </div>

      <div className="flex-1 w-full relative overflow-hidden group">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105" style={{ backgroundImage: `url('${IMAGES[0]}')` }} />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-1000" />
        
        {hotspots.map((spot) => (
          <div 
            key={spot.id}
            className="absolute w-12 h-12 -ml-6 -mt-6 flex items-center justify-center cursor-pointer group/spot z-10"
            style={{ top: spot.top, left: spot.left }}
            onMouseEnter={() => setActiveHotspot(spot.id)}
            onMouseLeave={() => setActiveHotspot(null)}
          >
            <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover/spot:scale-150 transition-transform" />
            <div className="absolute inset-0 rounded-full border border-white/50 animate-ping" />
            
            <AnimatePresence>
              {activeHotspot === spot.id && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="absolute top-16 left-1/2 -translate-x-1/2 w-72 bg-black/80 backdrop-blur-xl border border-white/20 p-6 pointer-events-none"
                >
                  <h5 className="text-white uppercase tracking-widest text-sm mb-2 font-serif">{spot.title}</h5>
                  <div className="w-full h-[1px] bg-gradient-to-r from-white/50 to-transparent mb-3" />
                  <p className="text-white/70 font-light text-xs leading-relaxed">{spot.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        <div className="absolute bottom-10 right-10 text-right pointer-events-none">
          <span className="text-white/40 uppercase tracking-[0.3em] text-xs font-mono">Interactive Exhibition</span>
        </div>
      </div>
    </section>
  )
}
