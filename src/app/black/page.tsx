'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Lock } from 'lucide-react'

const TIERS = [
  {
    name: 'Intelligence Vault',
    desc: 'Unfiltered access to raw data streams, trend forecasting algorithms, and predictive market reports reserved for industry leaders.',
    img: '/media/media__1780859424596.jpg'
  },
  {
    name: 'Collector Editions',
    desc: 'High-fidelity 3D digital magazines with interactive WebGL covers. Own exclusive NFT-backed fashion artifacts.',
    img: '/media/media__1780859404127.jpg'
  },
  {
    name: 'Masterclasses',
    desc: 'Learn directly from creative directors, 3D artists, and AI prompt engineers of the most influential digital fashion houses.',
    img: '/media/media__1780859414099.jpg'
  }
]

export default function WestvogueBlack() {
  return (
    <main className="w-full min-h-screen bg-[#050505] pt-32 px-10 pb-32 overflow-x-hidden selection:bg-white/30 text-white">
      
      {/* Immersive Black Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center mb-32 w-full flex flex-col items-center"
        >
          <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <Lock className="w-6 h-6 text-white/50" />
          </div>
          <span className="text-white/40 tracking-[0.5em] uppercase text-xs font-mono mb-6 block">Private Access</span>
          <h1 className="text-6xl md:text-[140px] font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 uppercase tracking-tighter leading-none mb-10">
            BLACK
          </h1>
          <p className="text-white/50 text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
            The exclusive digital members club for the vanguard of fashion, technology, and culture.
          </p>
          
          <button className="mt-16 px-12 py-5 bg-white text-black font-semibold uppercase tracking-widest text-xs hover:bg-neutral-300 transition-colors flex items-center gap-4">
            Apply for Membership <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Features Split Layout */}
        <div className="w-full flex flex-col gap-32">
          {TIERS.map((tier, i) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 md:gap-24 items-center group`}
            >
              {/* Image Reveal */}
              <div className="w-full md:w-1/2 aspect-[4/3] bg-neutral-900 relative overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                 <img 
                   src={tier.img} 
                   alt={tier.name} 
                   className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                 
                 {/* Decorative Corner */}
                 <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/30" />
                 <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/30" />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <span className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-mono border-b border-white/10 pb-4 inline-block max-w-max">
                  Tier 0{i + 1} Benefit
                </span>
                <h3 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-wider leading-tight">
                  {tier.name}
                </h3>
                <p className="text-white/50 text-lg font-light leading-relaxed max-w-lg">
                  {tier.desc}
                </p>
                <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-widest text-white/50 cursor-pointer hover:text-white transition-colors">
                  Explore Privilege <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}
