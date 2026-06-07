'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const FEATURED_FILMS = [
  {
    id: 'FHMWAmxHEng',
    title: 'Desert Queen',
    subtitle: 'AI Fashion Film',
    duration: '0:51'
  },
  {
    id: 'E7WI-WdYrig',
    title: 'The Archive',
    subtitle: 'Editorial Documentary',
    duration: 'Featured'
  },
  {
    id: 'rqX9l2GaVuA',
    title: 'Neon Shadows',
    subtitle: 'Digital Runway',
    duration: 'Featured'
  }
]

function VideoPlayer({ video }: { video: typeof FEATURED_FILMS[0] }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-6 w-full"
    >
      <div className="w-full aspect-video bg-neutral-900 border border-white/10 relative overflow-hidden group">
        {!isPlaying ? (
          <>
            <img 
              src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
              alt={video.title} 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:scale-110 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                <Play className="w-8 h-8 text-white ml-2 fill-white" />
              </div>
            </div>
            
            <div className="absolute bottom-6 right-6 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-[0.2em] font-mono">
              {video.duration}
            </div>
          </>
        ) : (
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div>
        <h3 className="text-3xl font-serif text-white uppercase tracking-wider mb-2">{video.title}</h3>
        <span className="text-xs text-white/50 uppercase tracking-[0.3em] font-mono">{video.subtitle}</span>
      </div>
    </motion.div>
  )
}

export default function Scene06_FashionFilm() {
  return (
    <section className="w-full bg-black py-32 relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-10">
        
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono block">DP WestVogue TV</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tighter leading-none">Featured<br/>Cinematics</h2>
          </div>
          <button className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors self-start md:self-auto">
            Explore All Films
          </button>
        </div>

        {/* Hero Video (First Video) */}
        <div className="mb-20">
          <VideoPlayer video={FEATURED_FILMS[0]} />
        </div>

        {/* Secondary Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <VideoPlayer video={FEATURED_FILMS[1]} />
          <VideoPlayer video={FEATURED_FILMS[2]} />
        </div>
        
      </div>
    </section>
  )
}
