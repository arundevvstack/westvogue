'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Play } from 'lucide-react'
import Link from 'next/link'
import type { TVEpisode } from '@/lib/tv-data'

interface CarouselProps {
  title: string
  items: TVEpisode[]
}

export default function Carousel({ title, items }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full mb-16 pl-6 md:pl-12">
      <div className="flex items-center justify-between pr-6 md:pr-12 mb-6">
        <h3 className="text-xl md:text-2xl font-serif text-white uppercase tracking-widest">{title}</h3>
        <button className="text-white/50 hover:text-white uppercase tracking-widest text-xs font-mono flex items-center gap-2 transition-colors group">
          View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div 
        ref={containerRef}
        className="flex gap-4 overflow-x-auto pb-8 hide-scrollbar pr-12 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, i) => (
          <Link href={`/tv/${item.id}`} key={item.id} className="block snap-start outline-none">
            <motion.div 
              className="flex-none w-[280px] md:w-[400px] aspect-[16/9] bg-neutral-900 border border-white/10 relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Poster Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                style={{ backgroundImage: `url('${item.posterImg}')` }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Video Playback Simulation on Hover */}
              {hoveredIndex === i && (
                <div className="absolute inset-0 z-10 pointer-events-none">
                   <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 mix-blend-screen">
                      <source src={item.videoUrl} type="video/mp4" />
                   </video>
                </div>
              )}

              {/* Play Icon Glow */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100 z-20 pointer-events-none">
                <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center bg-black/40 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <Play className="w-6 h-6 text-white ml-1 fill-white" />
                </div>
              </div>

              {/* Metadata */}
              <div className="absolute bottom-4 left-4 right-4 z-20 transition-transform duration-500 group-hover:translate-y-2">
                <span className="text-white/90 text-[10px] uppercase tracking-widest font-mono mb-1 block shadow-black drop-shadow-md">
                  {item.duration} • {item.director}
                </span>
                <h4 className="text-lg font-serif text-white uppercase tracking-wider leading-tight drop-shadow-lg shadow-black group-hover:text-white">
                  {item.title}
                </h4>
              </div>
              
              {/* Progress Bar Simulation */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[8s] ease-linear z-30" />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
