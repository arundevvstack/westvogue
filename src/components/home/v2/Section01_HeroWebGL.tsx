'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Section01_HeroWebGL() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const logoOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const t1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 0])
  const t2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 0])
  const t3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0])
  const t4Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.9], [0, 1, 0])
  const t5Opacity = useTransform(scrollYProgress, [0.8, 0.9, 1.0], [0, 1, 1])

  return (
    <section ref={containerRef} className="w-full h-[300vh] bg-black relative z-10">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* Cinematic Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-60"
          >
            {/* High-Quality Dummy Fashion Video */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-on-a-rooftop-34440-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        {/* Global Logo */}
        <motion.div 
          style={{ opacity: logoOpacity }}
          className="absolute top-10 w-full flex justify-center z-20 pointer-events-none"
        >
          <h1 className="text-2xl font-serif text-white uppercase tracking-[0.5em] mix-blend-overlay">WESTVOGUE</h1>
        </motion.div>

        {/* Cinematic Scroll Typography Sequence */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center text-center px-10">
          <motion.h2 style={{ opacity: t1Opacity }} className="absolute text-3xl md:text-5xl font-serif text-white uppercase tracking-[0.3em]">THE GLOBAL FASHION AUTHORITY</motion.h2>
          <motion.h2 style={{ opacity: t2Opacity }} className="absolute text-4xl md:text-6xl font-serif text-white uppercase tracking-[0.3em]">VOLUME 001</motion.h2>
          <motion.h2 style={{ opacity: t3Opacity }} className="absolute text-5xl md:text-7xl font-serif text-white uppercase tracking-[0.3em]">JUNE 2026</motion.h2>
          <motion.h2 style={{ opacity: t4Opacity }} className="absolute text-4xl md:text-6xl font-serif text-white uppercase tracking-[0.2em] leading-tight">THE ART OF<br/>MODERN ICONS</motion.h2>
          <motion.h2 style={{ opacity: t5Opacity }} className="absolute text-[12vw] font-serif text-white uppercase tracking-tighter leading-none">NOVA RAE</motion.h2>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: logoOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 pointer-events-none"
        >
          <span className="text-white/50 uppercase tracking-[0.3em] text-xs font-mono">Scroll to Enter</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>

      </div>
    </section>
  )
}
