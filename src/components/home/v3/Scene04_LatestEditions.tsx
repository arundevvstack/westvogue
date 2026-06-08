'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

// Using real DP WestVogue content titles
const YOUTUBE_EDITIONS = [
  {
    id: 'EPI-1',
    title: 'Meet the model: Apsara',
    theme: 'Miss India 2021 First Runner-up',
    date: '2025',
    duration: '14:20',
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop',
    videoId: 'dummy1' // Placeholder for actual YT ID
  },
  {
    id: 'EPI-2',
    title: 'Meet the model: Aswathy Mukundan',
    theme: 'The Digital Renaissance',
    date: '2025',
    duration: '12:05',
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
    videoId: 'dummy2'
  },
  {
    id: 'EPI-3',
    title: 'Meet the model: Abee Suhana',
    theme: 'Cultural Visions',
    date: '2025',
    duration: '18:45',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop',
    videoId: 'dummy3'
  },
  {
    id: 'FILM',
    title: 'Nayana Josan',
    theme: 'Fashion Film Exclusive',
    date: '2025',
    duration: '06:30',
    img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop',
    videoId: 'dummy4'
  }
]

export default function Scene04_LatestEditions() {
  return (
    <section className="w-full bg-black py-40 relative z-20 border-t border-white/10 overflow-hidden">
      
      <div className="px-10 mb-20">
        <span className="text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono block">DP WestVogue Series</span>
        <h2 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tighter">Latest Editions</h2>
      </div>

      {/* Netflix-style cinematic carousel */}
      <div className="flex gap-8 overflow-x-auto px-10 pb-20 hide-scrollbar snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {YOUTUBE_EDITIONS.map((edition, i) => (
          <motion.div 
            key={i} 
            className="flex-none w-[85vw] md:w-[600px] aspect-video bg-neutral-900 border border-white/10 relative overflow-hidden group cursor-pointer snap-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105 opacity-80 group-hover:opacity-100"
              style={{ backgroundImage: `url('${edition.img}')` }}
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/20 transition-colors duration-700" />
            
            {/* Hover Video Simulation (Using CSS overlay for glow/playback simulation) */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
               {/* In a real integration, an actual YouTube Iframe would mount here on hover/click */}
               <div className="w-20 h-20 rounded-full border border-white/50 flex items-center justify-center bg-black/50 shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" />
               </div>
            </div>

            {/* Edition Data */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-end gap-4">
              <div>
                <span className="text-white/80 font-mono text-xs uppercase tracking-widest mb-2 block">{edition.id} • {edition.duration}</span>
                <h3 className="text-3xl md:text-4xl font-serif text-white uppercase tracking-wider leading-none mb-2">{edition.title}</h3>
                <p className="text-white/60 font-light italic">{edition.theme}</p>
              </div>
              
              <div className="hidden md:block">
                <span className="text-white/30 uppercase tracking-[0.2em] font-mono text-[10px]">Released {edition.date}</span>
              </div>
            </div>
            
            {/* Netflix-style progress bar simulation on hover */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[10s] ease-linear" />
          </motion.div>
        ))}
      </div>
      
    </section>
  )
}
