'use client'

import { motion } from 'framer-motion'
import { Activity, BarChart2, Globe2 } from 'lucide-react'
import MarketDashboard from '@/components/intelligence/MarketDashboard'
import InfluenceIndex from '@/components/intelligence/InfluenceIndex'

export default function IntelligenceCenter() {
  return (
    <main className="w-full min-h-screen bg-black pt-32 px-10 pb-32 overflow-x-hidden selection:bg-white/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-10"
        >
          <div>
            <span className="text-white/50 tracking-[0.4em] uppercase text-xs font-mono mb-4 block flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> 
              Global Fashion Analytics
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-white uppercase tracking-tighter leading-none mb-4">
              Intelligence
            </h1>
            <p className="text-white/60 text-lg font-light max-w-xl">
              Predictive trend forecasting, market sentiment analysis, and influence tracking powered by real-time data nodes.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-neutral-900 border border-white/10 text-white/70 text-xs uppercase tracking-widest font-mono flex items-center gap-3 rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <Activity className="w-4 h-4 text-blue-400" /> System Active
            </div>
          </div>
        </motion.div>

        {/* Existing Dashboards */}
        <div className="mb-8">
          <MarketDashboard />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <InfluenceIndex />
          
          {/* Enhanced Map / Visualization Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full p-8 bg-neutral-900 border border-white/10 rounded-sm min-h-[500px] flex flex-col relative group overflow-hidden"
          >
            <div className="flex justify-between items-center mb-8 relative z-10">
              <h3 className="text-xl font-serif text-white uppercase tracking-widest flex items-center gap-3">
                <Globe2 className="w-5 h-5 text-white/50" /> Global Trend Map
              </h3>
              <span className="text-xs text-white/40 uppercase tracking-widest font-mono border border-white/20 px-3 py-1">Live Tracking</span>
            </div>
            
            <div className="flex-1 w-full bg-black border border-white/5 rounded-sm flex items-center justify-center relative overflow-hidden">
               {/* Background Map Imagery */}
               <div className="absolute inset-0 bg-cover bg-center opacity-30 grayscale mix-blend-screen" style={{ backgroundImage: "url('/media/media__1780859442744.jpg')" }} />
               
               {/* Overlay Data Visuals */}
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black/80 to-black/90" />
               <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
               
               {/* Pulse Nodes */}
               <div className="absolute top-[30%] left-[40%] w-3 h-3 bg-white rounded-full shadow-[0_0_20px_white] animate-pulse" />
               <div className="absolute top-[60%] left-[70%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_15px_blue] animate-ping" />
               <div className="absolute top-[45%] left-[20%] w-2 h-2 bg-white/50 rounded-full shadow-[0_0_10px_white] animate-pulse" />

               <p className="text-white/80 uppercase tracking-widest text-sm relative z-10 font-mono flex items-center gap-3 bg-black/60 px-6 py-3 border border-white/10 backdrop-blur-md">
                 <BarChart2 className="w-4 h-4 text-white" /> Connecting to Geospatial Data...
               </p>
            </div>
          </motion.div>
        </div>

        {/* Intelligence Report Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full relative overflow-hidden border border-white/10 p-12 md:p-20 group"
        >
          <div className="absolute inset-0 bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000" style={{ backgroundImage: "url('/media/media__1780859424684.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="text-blue-400 tracking-[0.4em] uppercase text-xs font-mono mb-6 block">Featured Report</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-tighter mb-6">
              The Evolution of<br/>Synthetic Fabrics
            </h2>
            <p className="text-white/60 text-lg font-light mb-10 leading-relaxed">
              Our latest predictive model indicates a 400% surge in synthetic luxury materials driven by digital-first fashion houses and virtual garment adoption over the next 18 months.
            </p>
            <button className="px-8 py-4 border border-white text-white font-semibold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors">
              Download Report [PDF]
            </button>
          </div>
        </motion.div>

      </div>
    </main>
  )
}
