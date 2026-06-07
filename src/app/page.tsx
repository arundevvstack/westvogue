'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import Lenis from 'lenis'

// Lazy load the V4 Documentary Experience scenes
const Scene01 = dynamic(() => import('@/components/home/v3/Scene01_Hero'), { ssr: false })
const Scene02 = dynamic(() => import('@/components/home/v3/Scene02_CurrentEdition'))
const Scene03 = dynamic(() => import('@/components/home/v3/Scene03_EditorsLetter'))
const Scene04 = dynamic(() => import('@/components/home/v3/Scene04_LatestEditions'))
const Scene05 = dynamic(() => import('@/components/home/v3/Scene05_NovaRaeUniverse'))
const Scene06 = dynamic(() => import('@/components/home/v3/Scene06_FashionFilm'))
const Scene07 = dynamic(() => import('@/components/home/v3/Scene07_EditorsPicks'))
const Scene08 = dynamic(() => import('@/components/home/v3/Scene08_Intelligence'))
const Scene09 = dynamic(() => import('@/components/home/v3/Scene09_GlobalMap'))
const Scene10 = dynamic(() => import('@/components/home/v3/Scene10_ImageMosaic'))
const Scene11 = dynamic(() => import('@/components/home/v3/Scene11_WestvogueBlack'))
const Scene12 = dynamic(() => import('@/components/home/v3/Scene12_Footer'))

export default function Home() {

  // Initialize Lenis Smooth Scroll for Documentary Feel
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative w-full min-h-screen bg-black overflow-x-hidden selection:bg-white/30 text-white font-sans">
      <Scene01 />
      <Scene02 />
      <Scene03 />
      <Scene04 />
      <Scene05 />
      <Scene06 />
      <Scene07 />
      <Scene08 />
      <Scene09 />
      <Scene10 />
      <Scene11 />
      <Scene12 />
    </main>
  );
}
