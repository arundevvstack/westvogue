'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function OmegaNavigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-10 py-6 ${
        scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="flex gap-8 text-sm uppercase tracking-widest text-white/80">
        <Link href="/editions" className="hover:text-white transition-colors">Editions</Link>
        <Link href="/virtual-models" className="hover:text-white transition-colors">Models</Link>
        <Link href="/designers" className="hover:text-white transition-colors">Designers</Link>
      </div>

      <Link href="/" className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl tracking-[0.3em] font-serif uppercase text-white font-bold">
          DP <span className="text-white/50">WestVogue</span>
        </h1>
      </Link>

      <div className="flex gap-8 text-sm uppercase tracking-widest text-white/80 items-center">
        <Link href="/tv" className="hover:text-white transition-colors">TV</Link>
        <Link href="/intelligence" className="hover:text-white transition-colors">Intelligence</Link>
        <Link href="/black" className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-white/90 transition-colors">
          Black
        </Link>
      </div>
    </motion.header>
  )
}
