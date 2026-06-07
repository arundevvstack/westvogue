import CoverSection from '@/components/edition014/CoverSection'
import StoriesSection from '@/components/edition014/StoriesSection'
import DesignersBrandsSection from '@/components/edition014/DesignersBrandsSection'
import EditorsLetter from '@/components/edition014/EditorsLetter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WESTVOGUE EDITION 014 | Future of Elegance',
  description: 'The world\'s first global virtual supermodel emerges as the face of a new luxury era.'
}

export default function Edition014() {
  return (
    <main className="w-full bg-black">
      <CoverSection />
      
      {/* Featured Fashion Film Hero */}
      <section className="w-full h-screen bg-black relative z-30 flex items-center justify-center border-t border-white/10 overflow-hidden group">
        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-1000" />
        <div className="text-center z-10 p-10">
          <span className="text-xs text-white/50 tracking-[0.4em] uppercase block mb-6">Featured Fashion Film</span>
          <h2 className="text-6xl md:text-8xl font-serif text-white uppercase tracking-widest mb-8">Future Walk</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            A six-minute cinematic film following Nova Rae through floating digital cities, futuristic runways, and immersive luxury environments.
          </p>
          <button className="px-12 py-4 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-500">
            Play Film
          </button>
        </div>
      </section>

      <StoriesSection />
      <DesignersBrandsSection />
      <EditorsLetter />
    </main>
  )
}
