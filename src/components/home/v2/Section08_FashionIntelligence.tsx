'use client'

import { motion } from 'framer-motion'

export default function Section08_FashionIntelligence() {
  const metrics = [
    { label: "Global Influence Index", value: "+24.8%", status: "up" },
    { label: "Digital Couture Market", value: "$4.2B", status: "up" },
    { label: "Virtual Model Engagement", value: "3.2M", status: "stable" }
  ]

  const rankings = ['Nova Rae', 'Elena Rossi', 'Atelier Eclipse', 'Maison Noir', 'Jules Laurent']

  return (
    <section className="w-full bg-black py-32 px-10 relative z-20 border-t border-white/10 overflow-hidden font-mono">
      {/* Live Ticker Background */}
      <div className="absolute top-10 left-0 w-[200%] flex gap-4 text-white/5 uppercase tracking-widest text-9xl whitespace-nowrap overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-10"
        >
          <span>INTELLIGENCE</span>
          <span>MARKETS</span>
          <span>DATA</span>
          <span>FORECASTS</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-16 border-b border-white/20 pb-6">
          <div>
            <h2 className="text-4xl font-serif text-white uppercase tracking-wider mb-2">Global Fashion Intelligence</h2>
            <span className="text-white/40 uppercase tracking-widest text-xs">Live Terminal Feed</span>
          </div>
          <div className="text-right">
            <span className="text-white uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Live
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Metrics Panel */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between h-48">
                <span className="text-white/50 text-xs uppercase tracking-widest">{m.label}</span>
                <span className={`text-4xl font-light ${m.status === 'up' ? 'text-white' : 'text-white/60'}`}>{m.value}</span>
                <div className="w-full h-1 bg-white/10 mt-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className="h-full bg-white/40"
                  />
                </div>
              </div>
            ))}
            
            {/* Chart Simulation */}
            <div className="col-span-1 md:col-span-3 bg-white/5 backdrop-blur-md border border-white/10 p-6 h-64 flex items-end gap-2">
              {[40, 60, 45, 80, 55, 90, 70, 100, 85, 120, 95, 110].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(h/120)*100}%` }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                  className="flex-1 bg-white/20 hover:bg-white/60 transition-colors cursor-crosshair"
                />
              ))}
            </div>
          </div>

          {/* Rankings Panel */}
          <div className="col-span-1 bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col">
            <span className="text-white/50 text-xs uppercase tracking-widest mb-6">Top Performers</span>
            <div className="flex flex-col gap-4 flex-1">
              {rankings.map((name, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0">
                  <span className="text-white uppercase tracking-widest text-sm flex items-center gap-4">
                    <span className="text-white/30 text-xs">0{i+1}</span>
                    {name}
                  </span>
                  <span className="text-white/50 text-xs">+{15 - i * 2}%</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
