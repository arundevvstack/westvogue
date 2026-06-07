'use client'

import { motion } from 'framer-motion'

export default function CoverStory017() {
  const chapters = [
    'Arrival After Dark',
    'The City of Light',
    'Black Couture Manifesto',
    'Future Elegance',
    'Midnight Finale'
  ]

  return (
    <section className="w-full bg-black py-32 px-10 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Video Player Placeholder */}
        <div className="w-full lg:w-2/3">
          <div className="w-full aspect-video bg-neutral-900 border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 group-hover:bg-black/20 transition-colors duration-500">
              <button className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-md hover:scale-110 transition-transform">
                <span className="ml-2">▶</span>
              </button>
            </div>
            {/* Cinematic Placeholder Image */}
            <div className="w-full h-full bg-gradient-to-r from-neutral-900 to-black animate-pulse" />
          </div>
        </div>

        {/* Story Info */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <h2 className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4">Cover Film</h2>
          <h3 className="text-4xl font-serif text-white uppercase mb-6 leading-tight">A Fashion<br/>Odyssey</h3>
          <p className="text-white/70 font-light leading-relaxed mb-10">
            As fashion enters a new era of hyper-luxury, darkness becomes the ultimate canvas. This issue explores the power of monochrome elegance through couture, architecture, and cinematic storytelling.
          </p>
          
          <div>
            <h4 className="text-xs tracking-[0.2em] text-white uppercase mb-4 border-b border-white/20 pb-2">Chapters</h4>
            <ul className="flex flex-col gap-3">
              {chapters.map((chap, i) => (
                <li key={i} className="text-white/60 font-serif text-lg hover:text-white transition-colors cursor-pointer flex gap-4">
                  <span className="text-white/30 font-sans text-xs pt-1">0{i+1}</span> {chap}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
