'use client'

import { motion } from 'framer-motion'

const IMAGES = [
  '/media/media__1780859403752.jpg',
  '/media/media__1780859403775.jpg',
  '/media/media__1780859404113.jpg',
  '/media/media__1780859404127.jpg',
  '/media/media__1780859413985.jpg',
  '/media/media__1780859414021.jpg',
  '/media/media__1780859414045.jpg',
  '/media/media__1780859414099.jpg',
  '/media/media__1780859414116.jpg',
  '/media/media__1780859424575.jpg'
]

export default function Section09_FilmWall() {
  return (
    <section className="w-full bg-black py-32 px-10 relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-4xl font-serif text-white uppercase tracking-wider mb-4">Fashion Film Wall</h2>
        <span className="text-xs uppercase tracking-[0.4em] text-white/50 font-mono">Immersive Editorial Clips</span>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
        {IMAGES.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: (i % 5) * 0.1 }}
            className="w-full relative overflow-hidden group border border-white/10"
          >
            {/* Using Ken Burns style animation on the image */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 10 + (i % 5), ease: "linear" }}
              className="w-full h-full"
            >
              <img 
                src={img} 
                alt={`Film ${i}`} 
                className="w-full h-auto object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
              />
            </motion.div>
            
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
            
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="w-8 h-8 rounded-full border border-white flex items-center justify-center bg-black/50 backdrop-blur-md">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-[2px]" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
