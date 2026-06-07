'use client'

import { motion } from 'framer-motion'

export default function Scene08_Intelligence() {
  const metrics = [
    { label: "Global Influence Index", value: "+24.8%", status: "up" },
    { label: "Digital Couture Market", value: "$4.2B", status: "up" },
    { label: "Virtual Model Engagement", value: "3.2M", status: "stable" }
  ]

  const rankings = ['Nova Rae', 'Elena Rossi', 'Atelier Eclipse', 'Maison Noir', 'Jules Laurent']

  return (
    <section className="w-full bg-neutral-950 py-40 px-10 relative z-20 border-t border-white/10 overflow-hidden font-mono">
      {/* Live Ticker Background */}
      <div className="absolute top-20 left-0 w-[200%] flex gap-4 text-white/5 uppercase tracking-widest text-9xl whitespace-nowrap overflow-hidden pointer-events-none">
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/20 pb-6 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-tighter mb-4">Fashion Intelligence</h2>
            <span className="text-white/40 uppercase tracking-widest text-xs block">Live Bloomberg Terminal Feed</span>
          </div>
          <div className="flex gap-4">
            <span className="text-white uppercase tracking-widest text-sm flex items-center gap-2 border border-white/20 px-4 py-2 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              LIVE DATA
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Metrics Panel */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between h-48 relative overflow-hidden group hover:border-white/30 transition-colors cursor-crosshair">
                <span className="text-white/50 text-xs uppercase tracking-widest relative z-10">{m.label}</span>
                <span className={`text-4xl font-light relative z-10 ${m.status === 'up' ? 'text-white' : 'text-white/60'}`}>{m.value}</span>
                
                {/* Simulated Data Bar */}
                <div className="w-full h-1 bg-white/10 mt-4 overflow-hidden relative z-10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className="h-full bg-white/40 group-hover:bg-white transition-colors"
                  />
                </div>
              </div>
            ))}
            
            {/* Chart Simulation */}
            <div className="col-span-1 md:col-span-3 bg-white/5 backdrop-blur-md border border-white/10 p-6 h-64 flex items-end gap-2 group cursor-crosshair hover:border-white/30 transition-colors">
              {[40, 60, 45, 80, 55, 90, 70, 100, 85, 120, 95, 110].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(h/120)*100}%` }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                  className="flex-1 bg-white/20 group-hover:bg-white/40 transition-colors hover:!bg-white"
                />
              ))}
            </div>
          </div>

          {/* Rankings Panel */}
          <div className="col-span-1 bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col hover:border-white/30 transition-colors">
            <span className="text-white/50 text-xs uppercase tracking-widest mb-8">Emerging Icons Index</span>
            <div className="flex flex-col gap-6 flex-1">
              {rankings.map((name, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 group cursor-pointer">
                  <span className="text-white/80 uppercase tracking-widest text-sm flex items-center gap-4 group-hover:text-white transition-colors">
                    <span className="text-white/30 text-xs font-mono">0{i+1}</span>
                    {name}
                  </span>
                  <span className="text-white/50 text-xs font-mono">+{15 - i * 2}%</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
