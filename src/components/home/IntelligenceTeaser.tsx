'use client'

import Link from 'next/link'

export default function IntelligenceTeaser() {
  return (
    <section className="w-full bg-neutral-950 py-32 border-t border-white/10 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-10 relative z-10 flex flex-col items-center text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-platinum/50 mb-6 font-mono">DP WestVogue</span>
        <h2 className="text-5xl font-serif text-white uppercase tracking-wide mb-8">
          Fashion Intelligence Center
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mb-12 font-light">
          Access real-time analytics, predictive trend forecasting, and global luxury market insights powered by our proprietary AI Fashion Engine.
        </p>
        
        <div className="flex gap-6">
          <Link href="/intelligence" className="px-8 py-4 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:bg-platinum transition-colors">
            Enter Dashboard
          </Link>
          <Link href="/black" className="px-8 py-4 border border-white/30 text-white uppercase tracking-widest text-sm hover:bg-white/5 transition-colors">
            Join Black
          </Link>
        </div>
      </div>
    </section>
  )
}
