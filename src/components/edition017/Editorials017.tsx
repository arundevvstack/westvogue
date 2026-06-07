'use client'

import { motion } from 'framer-motion'

export default function Editorials017() {
  const editorials = [
    { title: "Black Is Infinite", desc: "120-image fashion editorial.", imgCount: 120 },
    { title: "The Architecture of Luxury", desc: "Fashion inspired by modern landmarks.", imgCount: 45 },
    { title: "After Hours", desc: "A visual story set between Paris and Tokyo.", imgCount: 82 }
  ]

  return (
    <section className="w-full bg-neutral-950 py-32 px-10 relative z-30 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-serif text-white uppercase tracking-widest mb-20 text-center">Featured Editorials</h2>
        
        <div className="flex flex-col gap-16">
          {editorials.map((ed, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
            >
              <div className="w-full md:w-1/2 aspect-[4/5] bg-neutral-900 overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-white/5 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 text-white/80 text-xs tracking-widest uppercase">
                  {ed.imgCount} Photos
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
                <span className="text-white/40 tracking-[0.2em] text-xs uppercase mb-4 block">Editorial 0{i+1}</span>
                <h3 className="text-4xl font-serif text-white uppercase mb-6 leading-tight">{ed.title}</h3>
                <p className="text-white/60 font-light text-lg mb-8">{ed.desc}</p>
                <button className="self-start border-b border-white/40 pb-1 text-sm tracking-widest uppercase text-white hover:border-white transition-colors">
                  View Gallery
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
