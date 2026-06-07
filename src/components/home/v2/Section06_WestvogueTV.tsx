'use client'

import { motion } from 'framer-motion'

const CATEGORIES = [
  { name: 'Fashion Films', images: ['/media/media__1780859424676.jpg', '/media/media__1780859424684.jpg'] },
  { name: 'Documentaries', images: ['/media/media__1780859442696.jpg', '/media/media__1780859442744.jpg'] },
  { name: 'Editorial Films', images: ['/media/media__1780859442798.jpg', '/media/media__1780859442818.jpg'] }
]

export default function Section06_WestvogueTV() {
  return (
    <section className="w-full bg-black py-32 relative z-20 border-t border-white/10">
      <div className="px-10 mb-20 text-center">
        <h2 className="text-[10vw] font-serif text-white uppercase leading-none tracking-tighter mix-blend-overlay">WESTVOGUE TV</h2>
      </div>

      <div className="flex flex-col gap-20">
        {CATEGORIES.map((category, i) => (
          <div key={i} className="w-full pl-10">
            <h3 className="text-xl font-serif text-white uppercase tracking-widest mb-8">{category.name}</h3>
            <div className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {category.images.map((img, j) => (
                <div key={j} className="flex-none w-[300px] aspect-[2/3] bg-neutral-900 border border-white/10 relative overflow-hidden group cursor-pointer">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs text-white/50 uppercase tracking-widest font-mono mb-2 block">12m Runtime</span>
                    <h4 className="text-lg font-serif text-white uppercase tracking-wider line-clamp-2">Exclusive Look: Behind The Scenes</h4>
                  </div>
                </div>
              ))}
              
              {/* See All Card */}
              <div className="flex-none w-[300px] aspect-[2/3] border border-white/10 flex items-center justify-center group cursor-pointer hover:bg-white/5 transition-colors">
                <span className="text-white/50 group-hover:text-white uppercase tracking-widest text-sm font-serif transition-colors">View All {category.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
