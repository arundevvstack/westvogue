'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Parallax effect using GSAP
    if (!containerRef.current) return
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const xPos = (clientX / window.innerWidth - 0.5) * 40
      const yPos = (clientY / window.innerHeight - 0.5) * 40
      
      gsap.to(containerRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out"
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Film Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="w-full h-full bg-gradient-to-b from-neutral-900 to-black animate-pulse opacity-50" />
      </div>

      <div ref={containerRef} className="relative z-10 text-center flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[8vw] leading-none font-serif uppercase tracking-tight text-white mb-6 font-bold"
        >
          Westvogue<br />
          <span className="text-white/40 italic">Omega</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg tracking-[0.2em] uppercase text-white/70 max-w-xl text-center"
        >
          The Definitive Digital Fashion Authority
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-white absolute top-[-100%]"
          />
        </div>
      </motion.div>
    </section>
  )
}
