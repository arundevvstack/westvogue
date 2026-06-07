'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const IMAGES = [
  '/media/media__1780859403752.jpg',
  '/media/media__1780859403775.jpg'
]

export default function Section02_CurrentEdition() {
  return (
    <section className="w-full bg-neutral-950 py-32 px-10 relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        
        {/* Text Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <span className="text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">Current Edition</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-wider mb-4 leading-tight">
            June 2026
          </h2>
          <h3 className="text-2xl md:text-4xl font-serif text-white/80 uppercase tracking-widest mb-16 italic font-light">
            The Art of Modern Icons
          </h3>
          
          <div className="grid grid-cols-2 gap-y-8 gap-x-12 mb-16 border-l border-white/20 pl-8">
            <div>
              <span className="block text-3xl font-serif text-white mb-1">01</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono">Cover Story</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-white mb-1">05</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono">Fashion Films</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-white mb-1">24</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono">Interactive Moments</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-white mb-1">08</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono">Editorial Pages</span>
            </div>
          </div>

          <Link href="/editions/june-2026">
            <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 hover:scale-105">
              Enter Edition
            </button>
          </Link>
        </div>

        {/* Visual Side */}
        <div className="w-full lg:w-1/2 relative group perspective-1000">
          <motion.div 
            whileHover={{ rotateY: 15, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full aspect-[3/4] relative transform-style-3d cursor-pointer shadow-2xl shadow-black/50"
          >
            <div className="absolute inset-0 bg-cover bg-center border border-white/10" style={{ backgroundImage: `url('${IMAGES[0]}')` }} />
            
            {/* Hover page turn simulation */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center border-l border-white/10 origin-left"
              style={{ backgroundImage: `url('${IMAGES[1]}')` }}
              initial={{ rotateY: 0, opacity: 0 }}
              whileHover={{ rotateY: -160, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
