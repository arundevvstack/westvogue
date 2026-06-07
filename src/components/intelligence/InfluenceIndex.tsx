'use client'

import { motion } from 'framer-motion'

export default function InfluenceIndex() {
  const data = [
    { name: 'Nova Rae', score: 98, category: 'Virtual Model' },
    { name: 'Maison Vertex', score: 95, category: 'Brand' },
    { name: 'Aria Vance', score: 92, category: 'Designer' },
    { name: 'Zephyr', score: 88, category: 'Virtual Model' },
    { name: 'Lumiere', score: 85, category: 'Brand' },
  ]

  return (
    <div className="w-full p-8 bg-white/5 border border-white/10 rounded-sm">
      <h3 className="text-xl font-serif text-white uppercase tracking-widest mb-8">Influence Index (Live)</h3>
      
      <div className="flex flex-col gap-6">
        {data.map((item, i) => (
          <div key={i} className="w-full">
            <div className="flex justify-between mb-2">
              <span className="text-white font-medium">{item.name}</span>
              <span className="text-white/50 text-sm">{item.score}</span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${item.score}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
