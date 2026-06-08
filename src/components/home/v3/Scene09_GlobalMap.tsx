'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const CITIES = [
  { name: 'Paris', top: '35%', left: '48%', active: true },
  { name: 'Milan', top: '38%', left: '50%', active: false },
  { name: 'London', top: '32%', left: '46%', active: false },
  { name: 'New York', top: '38%', left: '25%', active: false },
  { name: 'Dubai', top: '48%', left: '60%', active: false },
  { name: 'Mumbai', top: '55%', left: '70%', active: true },
  { name: 'Seoul', top: '42%', left: '85%', active: false },
  { name: 'Tokyo', top: '45%', left: '88%', active: false }
]

export default function Scene09_GlobalMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  return (
    <section className="w-full h-screen bg-black relative z-20 border-t border-white/10 overflow-hidden flex items-center justify-center">
      
      {/* Background Map Grid Simulation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 z-0 opacity-20 invert bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-no-repeat bg-contain" />

      <div className="absolute top-20 left-10 z-20">
        <span className="text-xs uppercase tracking-[0.4em] text-white/50 mb-4 font-mono block">Global Network</span>
        <h2 className="text-4xl font-serif text-white uppercase tracking-widest">Fashion Capitals</h2>
      </div>

      <div className="relative w-full max-w-6xl aspect-[2/1] z-10">
        {CITIES.map((city) => (
          <div 
            key={city.name}
            className="absolute group"
            style={{ top: city.top, left: city.left }}
            onMouseEnter={() => setHoveredCity(city.name)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            {/* Ping animation for active cities */}
            {city.active && (
              <div className="absolute inset-0 rounded-full bg-white/20 animate-ping -m-2 p-2 pointer-events-none" />
            )}
            
            {/* City Dot */}
            <div className={`w-3 h-3 rounded-full border border-black transition-all duration-300 ${hoveredCity === city.name || city.active ? 'bg-white scale-150' : 'bg-white/50'}`} />
            
            {/* City Name */}
            <span className={`absolute top-4 left-1/2 -translate-x-1/2 uppercase tracking-widest font-mono text-[10px] whitespace-nowrap transition-all duration-300 ${hoveredCity === city.name ? 'text-white opacity-100' : 'text-white/30 opacity-0 group-hover:opacity-100'}`}>
              {city.name}
            </span>

            {/* Hover Data Card */}
            {hoveredCity === city.name && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-10 left-1/2 -translate-x-1/2 w-48 bg-white/10 backdrop-blur-md border border-white/20 p-4 pointer-events-none"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-white text-xs uppercase font-mono tracking-widest">Live</span>
                </div>
                <p className="text-white/80 font-serif text-sm">24 new editorials</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-2 font-mono">Fashion Week Prep</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
