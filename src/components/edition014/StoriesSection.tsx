'use client'

import { motion } from 'framer-motion'

export default function StoriesSection() {
  const stories = [
    { title: "The Future of Elegance", desc: "A deep exploration of how luxury fashion is evolving through digital craftsmanship, AI-assisted design, and sustainable innovation." },
    { title: "Inside Tomorrow's Atelier", desc: "Exclusive access to five experimental fashion houses redefining couture through technology." },
    { title: "The New Digital Icons", desc: "How virtual personalities are becoming global cultural ambassadors." },
    { title: "Luxury Beyond Reality", desc: "A visual essay examining immersive fashion experiences in virtual and physical worlds." }
  ]

  return (
    <section className="w-full bg-neutral-950 py-32 px-10 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-10">
          <h2 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-wider">Featured<br/>Stories</h2>
          <span className="text-white/50 tracking-[0.3em] uppercase text-sm">Volume 014</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {stories.map((story, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="w-full aspect-[16/9] bg-neutral-900 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-white/5 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-3xl font-serif text-white uppercase mb-4 group-hover:text-platinum transition-colors">{story.title}</h3>
              <p className="text-white/60 font-light leading-relaxed max-w-md">{story.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
