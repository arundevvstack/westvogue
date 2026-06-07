'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const EDITIONS = [
  {
    id: 'desert-queen',
    title: 'Desert Queen',
    subtitle: 'AI Fashion Film',
    cover: '/media/media__1780859424684.jpg',
    type: 'Digital Showcase',
    date: 'Vol 002'
  },
  {
    id: 'june-2026',
    title: 'June 2026',
    subtitle: 'The Art of Modern Icons',
    cover: '/media/media__1780859403752.jpg',
    type: 'Full Edition',
    date: 'Vol 001'
  },
  {
    id: '017',
    title: 'Midnight Luxury',
    subtitle: 'Black Is Infinite',
    cover: '/media/media__1780859442696.jpg',
    type: 'Archival Issue',
    date: 'Vol 017'
  },
  {
    id: '014',
    title: 'Tokyo Lights',
    subtitle: 'Cyber Couture',
    cover: '/media/media__1780859413985.jpg',
    type: 'Archival Issue',
    date: 'Vol 014'
  },
  {
    id: '015',
    title: 'The Architecture',
    subtitle: 'Structural Forms',
    cover: '/media/media__1780859414099.jpg',
    type: 'Archival Issue',
    date: 'Vol 015'
  },
  {
    id: '016',
    title: 'Eclipse',
    subtitle: 'Shadow & Light',
    cover: '/media/media__1780859404113.jpg',
    type: 'Archival Issue',
    date: 'Vol 016'
  }
]

export default function EditionsArchive() {
  return (
    <main className="w-full min-h-screen bg-black pt-32 px-10 pb-32 overflow-x-hidden selection:bg-white/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <span className="text-white/50 tracking-[0.4em] uppercase text-xs font-mono mb-6 block">The Vault</span>
          <h1 className="text-[8vw] md:text-8xl font-serif text-white uppercase tracking-tighter leading-none">Editions</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {EDITIONS.map((edition, i) => (
            <Link key={edition.id} href={`/editions/${edition.id}`}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="flex flex-col gap-6 group cursor-pointer"
              >
                <div className="w-full aspect-[3/4] bg-neutral-900 overflow-hidden relative border border-white/10 group-hover:border-white/40 transition-colors duration-700 shadow-[0_0_50px_rgba(255,255,255,0.02)]">
                  {/* Cover Image */}
                  <img 
                    src={edition.cover} 
                    alt={edition.title} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                  />
                  
                  {/* Lighting Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="px-6 py-3 border border-white bg-black/40 backdrop-blur-md text-white uppercase tracking-widest text-xs">
                      Enter Edition
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-6 left-6 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-[0.2em] font-mono">
                    {edition.date}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs text-white/50 uppercase tracking-[0.3em] font-mono">{edition.type}</span>
                  <h3 className="text-3xl font-serif text-white uppercase tracking-wider">{edition.title}</h3>
                  <p className="text-lg font-serif text-white/70 italic font-light">{edition.subtitle}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
