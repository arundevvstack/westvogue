'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const ALL_IMAGES = [
  '/media/media__1780859403752.jpg',
  '/media/media__1780859403775.jpg',
  '/media/media__1780859404113.jpg',
  '/media/media__1780859404127.jpg',
  '/media/media__1780859413985.jpg',
  '/media/media__1780859414021.jpg',
  '/media/media__1780859414045.jpg',
  '/media/media__1780859414099.jpg',
  '/media/media__1780859414116.jpg',
  '/media/media__1780859424575.jpg',
  '/media/media__1780859424596.jpg',
  '/media/media__1780859424647.jpg',
  '/media/media__1780859424676.jpg',
  '/media/media__1780859424684.jpg',
  '/media/media__1780859442696.jpg',
  '/media/media__1780859442744.jpg',
  '/media/media__1780859442798.jpg',
  '/media/media__1780859442818.jpg'
]

function Manifesto() {
  return (
    <section className="w-full min-h-screen relative flex items-center justify-center overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-40 animate-pulse-slow mix-blend-luminosity"
          style={{ backgroundImage: `url('${ALL_IMAGES[10]}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black backdrop-blur-sm" />
      </div>
      <div className="relative z-10 text-center px-10">
        <h2 className="text-[10vw] font-serif text-white uppercase leading-none tracking-tighter mb-8 text-shadow-luxury">WESTVOGUE</h2>
        <p className="text-xl md:text-3xl text-white/80 font-light max-w-4xl mx-auto leading-relaxed uppercase tracking-widest mb-12">
          Where fashion, culture, intelligence, technology, and creativity converge.
        </p>
        <p className="text-sm text-platinum/50 uppercase tracking-[0.4em] font-mono">
          "More than a magazine. More than a platform. WESTVOGUE is the world's living fashion universe."
        </p>
      </div>
    </section>
  )
}

function QuickAccess() {
  const links = ['Editions', 'Editorials', 'Fashion Films', 'WESTVOGUE TV', 'Fashion Intelligence', 'Virtual Models', 'Designers', 'Brands', 'Fashion Weeks', 'Awards', 'Events', 'WESTVOGUE BLACK']
  return (
    <section className="w-full bg-black py-32 px-10 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
        {links.map((link, i) => (
          <Link key={i} href="#" className="group relative w-fit">
            <span className="text-xl font-serif text-white/60 uppercase tracking-widest group-hover:text-white group-hover:text-shadow-luxury transition-all duration-500">
              {link}
            </span>
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
          </Link>
        ))}
      </div>
    </section>
  )
}

function FeaturedCards() {
  return (
    <section className="w-full bg-neutral-950 py-32 px-10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Featured Edition */}
        <div className="w-full md:w-1/2 p-12 border border-white/10 relative overflow-hidden group cursor-pointer bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-1000 mix-blend-luminosity" 
            style={{ backgroundImage: `url('${ALL_IMAGES[3]}')` }}
          />
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.3em] text-white/50 block mb-4">Edition 021</span>
            <h3 className="text-5xl font-serif text-white uppercase tracking-wider mb-8">Fashion Capitals<br/>2030</h3>
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="text-white/60 text-sm uppercase tracking-widest">420 Editorials</div>
              <div className="text-white/60 text-sm uppercase tracking-widest">30 Films</div>
            </div>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm uppercase tracking-widest font-bold group-hover:bg-white group-hover:text-black transition-colors">Enter Edition</button>
          </div>
        </div>

        {/* Featured Virtual Model */}
        <div className="w-full md:w-1/2 p-12 border border-white/10 relative overflow-hidden group cursor-pointer bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-top opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-1000 mix-blend-luminosity" 
            style={{ backgroundImage: `url('${ALL_IMAGES[13]}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 h-full flex flex-col justify-end">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-white/50 block mb-4">Featured Virtual Model</span>
              <h3 className="text-5xl font-serif text-white uppercase tracking-wider mb-8">Nova Rae</h3>
              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="text-white/60 text-sm uppercase tracking-widest">48 Features</div>
                <div className="text-white/60 text-sm uppercase tracking-widest">3.2M Reach</div>
              </div>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-colors">Explore Nova</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NetworkAndTV() {
  const cities = ['Paris', 'Milan', 'London', 'New York', 'Dubai', 'Mumbai', 'Seoul', 'Tokyo']
  const tvShows = ['Midnight Luxury', 'Black Future', 'After Hours', 'The Last Light']

  return (
    <section className="w-full bg-black py-32 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-10 mb-32">
        <h3 className="text-3xl font-serif text-white uppercase tracking-wider mb-12 text-center">Global Fashion Network</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {cities.map((city, i) => (
            <div key={i} className="px-6 py-3 border border-white/20 rounded-full text-white/60 hover:text-white hover:border-white cursor-pointer uppercase tracking-widest text-sm transition-all hover:bg-white/5 hover:scale-105">
              {city}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full pl-10">
        <h3 className="text-3xl font-serif text-white uppercase tracking-wider mb-12">WESTVOGUE TV</h3>
        <div className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {tvShows.map((show, i) => (
            <div key={i} className="flex-none w-[300px] aspect-[3/4] bg-neutral-900 border border-white/10 relative overflow-hidden group cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                style={{ backgroundImage: `url('${ALL_IMAGES[i+4]}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 z-10">
                <h4 className="text-xl font-serif text-white uppercase mb-2">{show}</h4>
                <p className="text-xs text-white/50 uppercase tracking-widest">Cinematic Film</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ImageWall() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <section className="w-full bg-black py-32 px-10 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-serif text-white uppercase tracking-wider mb-12 text-center">The Archives</h3>
        
        {/* Masonry Grid Simulation */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {ALL_IMAGES.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="relative overflow-hidden group cursor-pointer border border-white/5"
              onClick={() => setActiveImage(img)}
            >
              <img src={img} alt={`Archive ${i}`} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000 mix-blend-luminosity group-hover:mix-blend-normal" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-10 cursor-pointer"
          >
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={activeImage} 
              alt="Lightbox" 
              className="max-w-full max-h-full object-contain shadow-2xl" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function NewsletterAndLegal() {
  const socials = ['Instagram', 'YouTube', 'TikTok', 'Pinterest', 'LinkedIn']
  const legal = ['Privacy Policy', 'Terms', 'Accessibility', 'Cookies', 'Careers', 'Press', 'Partners', 'Investor Relations']

  return (
    <footer className="w-full bg-neutral-950 pt-32 pb-10 px-10 relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20 mb-32 relative">
        {/* Particle Burst Area */}
        <div className="w-full md:w-1/2 relative z-10">
          <h3 className="text-4xl font-serif text-white uppercase tracking-wider mb-6">Enter The World<br/>of Westvogue</h3>
          <p className="text-white/60 font-light mb-8 max-w-md">Receive exclusive editorials, fashion intelligence reports, trend forecasts, designer interviews, and premium edition releases.</p>
          <div className="flex gap-4">
            <input type="email" placeholder="YOUR EMAIL" className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white uppercase tracking-widest placeholder:text-white/30 focus:outline-none focus:border-white transition-colors" />
            <button className="text-white uppercase tracking-widest text-sm border-b border-white hover:text-platinum transition-colors whitespace-nowrap">Subscribe</button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
          <h4 className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6 font-mono">Join 500,000+ Innovators</h4>
          <div className="flex flex-col gap-4 items-start md:items-end">
            {socials.map((social, i) => (
              <a key={i} href="#" className="text-2xl font-serif text-white/60 hover:text-white uppercase tracking-widest transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 gap-6">
        <div className="text-white/40 text-xs uppercase tracking-widest">© 2026 DP WESTVOGUE. The Global Fashion Authority.</div>
        <div className="flex flex-wrap gap-4 justify-center">
          {legal.map((item, i) => (
            <a key={i} href="#" className="text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default function OmegaFooter() {
  return (
    <div className="w-full bg-black">
      <Manifesto />
      <QuickAccess />
      <FeaturedCards />
      <NetworkAndTV />
      <ImageWall />
      <NewsletterAndLegal />
    </div>
  )
}
