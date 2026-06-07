'use client'

import { motion } from 'framer-motion'

const EDITIONS = [
  { id: '017', title: 'Midnight Luxury', date: 'March 2026', img: '/media/media__1780859404113.jpg', duration: '12m' },
  { id: '018', title: 'Ocean of Dreams', date: 'April 2026', img: '/media/media__1780859404127.jpg', duration: '08m' },
  { id: '019', title: 'AI Couture', date: 'May 2026', img: '/media/media__1780859413985.jpg', duration: '15m' },
  { id: '020', title: 'The New Royalty', date: 'June 2026', img: '/media/media__1780859414021.jpg', duration: '10m' },
  { id: '021', title: 'Fashion Capitals 2030', date: 'July 2026', img: '/media/media__1780859414045.jpg', duration: '22m' },
]

export default function Section03_EditionCinema() {
  return (
    <section className="w-full bg-black py-32 relative z-20 border-t border-white/10 overflow-hidden">
      <div className="px-10 mb-16">
        <span className="text-xs uppercase tracking-[0.4em] text-white/50 mb-4 block font-mono">Edition Cinema</span>
        <h2 className="text-4xl font-serif text-white uppercase tracking-wider">Every Edition is a Film</h2>
      </div>

      <div className="w-full flex gap-6 px-10 overflow-x-auto pb-10 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {EDITIONS.map((edition, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex-none w-[350px] md:w-[450px] aspect-video bg-neutral-900 relative group cursor-pointer border border-white/10 overflow-hidden"
          >
            {/* Background Image/Video Trailer simulation */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-1000 mix-blend-luminosity group-hover:mix-blend-normal"
              style={{ backgroundImage: `url('${edition.img}')` }}
            />
            
            {/* Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-[-10px] group-hover:translate-y-0">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs uppercase tracking-widest border border-white/20">Edition {edition.id}</span>
                <span className="text-white/60 text-xs font-mono tracking-widest">{edition.duration}</span>
              </div>
              
              <div className="translate-y-[20px] group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-serif text-white uppercase tracking-widest mb-2">{edition.title}</h3>
                <div className="flex items-center gap-4 text-xs text-white/50 uppercase tracking-[0.2em] font-mono">
                  <span>{edition.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/50" />
                  <span>Cinematic</span>
                </div>
              </div>
            </div>

            {/* Progress Indicator (simulated Netflix style on hover) */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.div 
                className="h-full bg-white"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 10, ease: "linear" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
