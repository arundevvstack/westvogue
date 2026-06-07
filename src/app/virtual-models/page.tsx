'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const MODELS = [
  {
    name: 'Nova Rae',
    role: 'Virtual Artist & Cultural Icon',
    img: '/media/media__1780859403775.jpg',
    stats: { height: "5'11\"", traits: 'Avante-Garde, Cybernetic', origin: 'Paris / Tokyo' }
  },
  {
    name: 'Aura',
    role: 'Digital Muse & Runway Protocol',
    img: '/media/media__1780859414021.jpg',
    stats: { height: "6'0\"", traits: 'Ethereal, Minimalist', origin: 'London Server' }
  },
  {
    name: 'Zephyr',
    role: 'Streetwear Entity & Producer',
    img: '/media/media__1780859424647.jpg',
    stats: { height: "6'1\"", traits: 'Urban, Structural', origin: 'Seoul Network' }
  },
  {
    name: 'Lumi',
    role: 'High-Fashion Algorithmic Model',
    img: '/media/media__1780859442744.jpg',
    stats: { height: "5'10\"", traits: 'Haute Couture, Synthetic', origin: 'Milan Data Center' }
  }
]

export default function VirtualModels() {
  return (
    <main className="w-full min-h-screen bg-black pt-32 pb-32 overflow-x-hidden selection:bg-white/30">
      <div className="max-w-7xl mx-auto px-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-10 border-b border-white/10 pb-12"
        >
          <div>
            <span className="text-white/50 tracking-[0.4em] uppercase text-xs font-mono mb-4 block">The Roster</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-wider">Virtual<br/>Models</h1>
          </div>
          <div className="max-w-md">
            <p className="text-white/60 font-light text-lg leading-relaxed">
              The next generation of supermodels. Built from data, defined by algorithms, and styled by the world's leading visionary artists.
            </p>
          </div>
        </motion.div>
        
        <div className="flex flex-col gap-32">
          {MODELS.map((model, i) => (
            <motion.div 
              key={model.name}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center group cursor-pointer`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden bg-neutral-900 shadow-[0_0_50px_rgba(255,255,255,0.02)]">
                <img 
                  src={model.img} 
                  alt={model.name} 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                />
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-500 pointer-events-none" />
                
                {/* View Target UI overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                    <ArrowUpRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col gap-8">
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-[0.3em] font-mono block mb-2">{model.role}</span>
                  <h2 className="text-6xl md:text-8xl font-serif text-white uppercase tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/40 transition-all duration-700">
                    {model.name}
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-8 border-y border-white/10 py-8">
                  <div>
                    <span className="block text-[10px] text-white/40 uppercase tracking-[0.2em] font-mono mb-1">Height Config</span>
                    <span className="font-serif text-white uppercase text-xl">{model.stats.height}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/40 uppercase tracking-[0.2em] font-mono mb-1">Origin Node</span>
                    <span className="font-serif text-white uppercase text-xl">{model.stats.origin}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-[10px] text-white/40 uppercase tracking-[0.2em] font-mono mb-1">Primary Traits</span>
                    <span className="font-serif text-white uppercase text-xl">{model.stats.traits}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                  <span className="w-8 h-[1px] bg-white/30 group-hover:bg-white group-hover:w-16 transition-all duration-500" />
                  Access Data File
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
