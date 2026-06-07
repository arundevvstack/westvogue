'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const CITIES = [
  { name: 'Paris', status: 'Live Coverage', img: '/media/media__1780859424684.jpg' },
  { name: 'Milan', status: 'Upcoming', img: '/media/media__1780859424676.jpg' },
  { name: 'Tokyo', status: 'Archived', img: '/media/media__1780859413985.jpg' },
  { name: 'London', status: 'Upcoming', img: '/media/media__1780859414116.jpg' },
  { name: 'New York', status: 'Archived', img: '/media/media__1780859404113.jpg' },
  { name: 'Seoul', status: 'Live Coverage', img: '/media/media__1780859442696.jpg' },
]

export default function FashionWeekHub() {
  return (
    <main className="w-full min-h-screen bg-black pt-32 px-10 pb-32 overflow-x-hidden selection:bg-white/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <span className="text-white/50 tracking-[0.4em] uppercase text-xs font-mono mb-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> 
            Global Runway Operating System
          </span>
          <h1 className="text-[10vw] md:text-[120px] font-serif text-white uppercase tracking-tighter leading-none mb-6">FW_26</h1>
          <p className="text-white/60 text-lg font-light max-w-2xl">
            Real-time access to the world's most exclusive runway shows, collections, and backstage intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {CITIES.map((city, i) => (
            <Link key={city.name} href={`/fashion-week/${city.name.toLowerCase().replace(' ', '-')}`}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="w-full aspect-[16/9] bg-neutral-900 relative group overflow-hidden border border-white/10 cursor-crosshair shadow-[0_0_50px_rgba(255,255,255,0.02)]"
              >
                <img 
                  src={city.img} 
                  alt={city.name} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Tech UI Elements */}
                <div className="absolute top-6 left-6 z-20 flex gap-4">
                  <div className={`px-3 py-1 border text-[10px] uppercase tracking-[0.2em] font-mono backdrop-blur-md ${
                    city.status === 'Live Coverage' ? 'border-red-500 text-red-500 bg-red-500/10' :
                    city.status === 'Upcoming' ? 'border-white text-white bg-white/10' :
                    'border-white/30 text-white/50 bg-black/50'
                  }`}>
                    {city.status}
                  </div>
                </div>

                <div className="absolute top-6 right-6 z-20">
                   <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white transition-colors backdrop-blur-sm">
                      <span className="text-white text-lg">+</span>
                   </div>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                  <div>
                    <h3 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tighter mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/40 transition-all duration-500">
                      {city.name}
                    </h3>
                    <div className="flex gap-6 text-[10px] text-white/50 uppercase tracking-[0.3em] font-mono">
                      <span className="hover:text-white transition-colors">42 Shows</span>
                      <span className="hover:text-white transition-colors">Intelligence</span>
                      <span className="hover:text-white transition-colors">Street Style</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
