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
  '/media/media__1780859424575.jpg',
  '/media/media__1780859424596.jpg',
  '/media/media__1780859424647.jpg',
  '/media/media__1780859424676.jpg',
  '/media/media__1780859424684.jpg',
  '/media/media__1780859442696.jpg',
  '/media/media__1780859442744.jpg',
  '/media/media__1780859442798.jpg',
  '/media/media__1780859442818.jpg'
]

export default function Scene10_ImageMosaic() {
  return (
    <section className="w-full bg-black py-40 px-5 md:px-10 relative z-20 border-t border-white/10">
      
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono block">The Archives</span>
        <h2 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tighter">Image Mosaic</h2>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-screen-2xl mx-auto">
        {IMAGES.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.8, delay: (i % 4) * 0.1 }}
            className="w-full relative overflow-hidden group cursor-crosshair break-inside-avoid border border-white/5"
          >
            <img 
              src={img} 
              alt={`Mosaic ${i}`} 
              className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              loading="lazy"
            />
            
            {/* Cinematic Overlay on Hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
              <span className="text-white uppercase tracking-widest font-mono text-[10px] border border-white/30 px-4 py-2">View HQ</span>
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  )
}
