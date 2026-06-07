'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Scene01_Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Deep scroll parallax values
  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0])
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 5])
  const logoOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0])
  const text1Y = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const text1Opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <section ref={containerRef} className="w-full h-[400vh] bg-black relative z-10">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* Animated Background Atmosphere */}
        <motion.div style={{ opacity: videoOpacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster="/media/media__1780859403752.jpg"
            className="w-full h-full object-cover mix-blend-screen opacity-50"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-background-of-a-liquid-texture-moving-32694-large.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* CSS Floating Logo (Replacing Heavy 3D Canvas) */}
        <motion.div 
          style={{ scale: logoScale, opacity: logoOpacity }} 
          className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <h1 className="text-[12vw] font-serif text-white uppercase tracking-[0.2em] whitespace-nowrap drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">
              WESTVOGUE
            </h1>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-multiply pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Floating Editorial Layers (Images) */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -500]), opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]) }}
          className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
        >
          <div className="w-[40vw] aspect-[3/4] relative opacity-50 blur-sm mix-blend-screen translate-x-20 translate-y-20 shadow-[0_0_100px_rgba(255,255,255,0.1)]">
            <img src="/media/media__1780859403752.jpg" alt="Layer 1" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -800]), opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]) }}
          className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
        >
          <div className="w-[30vw] aspect-[3/4] relative -translate-x-32 -translate-y-10 shadow-[0_0_100px_rgba(255,255,255,0.1)] border border-white/5">
            <img src="/media/media__1780859403775.jpg" alt="Layer 2" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Typography Reveal */}
        <motion.div 
          style={{ y: text1Y, opacity: text1Opacity }}
          className="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-end pb-32 text-center"
        >
          <h2 className="text-xl md:text-3xl font-serif text-white uppercase tracking-[0.5em] mb-10 mix-blend-overlay">The Global Fashion Authority</h2>
          <div className="flex gap-8 text-white/50 text-xs uppercase tracking-[0.3em] font-mono">
            <span>Fashion</span>
            <span>Culture</span>
            <span>Intelligence</span>
            <span>Innovation</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40">
          <span className="text-white uppercase tracking-[0.3em] text-[10px] font-mono animate-pulse">Enter the world of Westvogue</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        </div>

      </div>
    </section>
  )
}
