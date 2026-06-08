'use client'

import { motion } from 'framer-motion'

const IMAGES = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550614000-4b95d415eb1a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512413914565-eb738f6d649a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop'
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
