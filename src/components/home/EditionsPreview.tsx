'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function EditionsPreview() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])

  return (
    <section ref={containerRef} className="w-full bg-black py-32 px-10 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 pt-20">
          <h2 className="text-4xl md:text-6xl font-serif text-white uppercase mb-8 leading-tight">
            The Future <br/> of Elegance
          </h2>
          <p className="text-lg text-white/70 max-w-md mb-10 leading-relaxed font-light">
            Explore the intersection of high fashion, artificial intelligence, and digital couture. Our immersive storytelling redefines the boundaries of luxury media.
          </p>
          <Link href="/editions/014" className="inline-block border border-white/30 px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all duration-500">
            Read Edition 014
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex gap-6 relative h-[800px] overflow-hidden">
          <motion.div style={{ y: y1 }} className="w-1/2 flex flex-col gap-6 pt-20">
            <div className="w-full aspect-[3/4] bg-neutral-900 rounded overflow-hidden">
              <div className="w-full h-full bg-white/5 animate-pulse" />
            </div>
            <div className="w-full aspect-[3/4] bg-neutral-900 rounded overflow-hidden">
              <div className="w-full h-full bg-white/5 animate-pulse" />
            </div>
          </motion.div>
          <motion.div style={{ y: y2 }} className="w-1/2 flex flex-col gap-6">
            <div className="w-full aspect-[3/4] bg-neutral-900 rounded overflow-hidden">
              <div className="w-full h-full bg-white/5 animate-pulse" />
            </div>
            <div className="w-full aspect-[3/4] bg-neutral-900 rounded overflow-hidden">
              <div className="w-full h-full bg-white/5 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
