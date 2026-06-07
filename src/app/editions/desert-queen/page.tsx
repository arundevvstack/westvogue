'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Play, PlayCircle } from 'lucide-react'

function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* We use the YouTube poster as the initial background or a dummy video loop */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ scale }}
        >
          {/* Using a desert-themed fallback video or the YouTube thumbnail */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://i.ytimg.com/vi/FHMWAmxHEng/maxresdefault.jpg')" }} />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-black/30" />
        
        <motion.div 
          style={{ opacity, y: textY }}
          className="relative z-10 text-center flex flex-col items-center w-full px-10"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white/50 font-mono uppercase tracking-[0.4em] text-xs mb-8"
          >
            Digital Edition • Volume 002
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-[10vw] font-serif text-white uppercase leading-none tracking-tighter drop-shadow-2xl"
          >
            DESERT QUEEN
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-serif text-white/80 uppercase tracking-widest mt-6 italic font-light"
          >
            An AI Fashion Film
          </motion.h2>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40"
        >
          <span className="text-white/60 uppercase tracking-[0.3em] text-[10px] font-mono animate-pulse">Scroll to explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

function MainFeatureFilm() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="w-full bg-black py-32 px-10 relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h4 className="text-xs uppercase tracking-[0.4em] text-white/50 mb-12 font-mono text-center">The Feature Presentation</h4>
        
        <div className="w-full aspect-video bg-neutral-900 border border-white/10 relative overflow-hidden group">
          {!isPlaying ? (
            <>
              <img 
                src="https://i.ytimg.com/vi/FHMWAmxHEng/maxresdefault.jpg" 
                alt="Desert Queen Poster" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <div className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:scale-110 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                  <Play className="w-10 h-10 text-white ml-2 fill-white" />
                </div>
              </div>
            </>
          ) : (
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/FHMWAmxHEng?autoplay=1&rel=0&modestbranding=1" 
              title="Desert Queen | AI Fashion Film" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed font-light mb-8">
            Set against vast desert landscapes, this fashion campaign blends high-fashion aesthetics, cinematic visual storytelling, luxury costume design, and advanced artificial intelligence production techniques.
          </p>
          <div className="flex justify-center gap-6 text-xs uppercase tracking-widest font-mono text-white/40 border-t border-white/10 pt-8">
            <span>Director: West Vogue</span>
            <span>Duration: 0:51</span>
            <span>Format: AI Generation</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function EditorialGallery() {
  const themeImages = [
    '/media/media__1780859424575.jpg',
    '/media/media__1780859424596.jpg',
    '/media/media__1780859424647.jpg'
  ]

  return (
    <section className="w-full bg-neutral-950 py-32 relative z-20 border-t border-white/10">
      <div className="px-10 mb-20 text-center">
        <h4 className="text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">The Aesthetic</h4>
        <h2 className="text-5xl font-serif text-white uppercase tracking-widest leading-tight">
          Next-Generation<br/>Couture
        </h2>
      </div>

      <div className="flex overflow-x-auto gap-8 px-10 pb-20 hide-scrollbar snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {themeImages.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="flex-none w-[80vw] md:w-[600px] aspect-[4/5] relative group cursor-crosshair snap-center"
          >
            <img src={img} alt={`Editorial ${i}`} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
            <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function DesertQueenEdition() {
  return (
    <main className="w-full bg-black overflow-x-hidden selection:bg-white/30">
      <HeroVideo />
      <MainFeatureFilm />
      <EditorialGallery />
      
      {/* End Note */}
      <section className="w-full h-[50vh] bg-black flex items-center justify-center relative z-20 border-t border-white/10">
        <div className="text-center px-10">
          <span className="text-white/30 uppercase tracking-[0.4em] font-mono text-xs block mb-8">End of Exhibition</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-widest italic font-light">
            Luxury Beyond Reality.
          </h2>
        </div>
      </section>
    </main>
  )
}
