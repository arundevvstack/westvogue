'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const IMAGES = [
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

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          // Assuming Page 1 cover image is one of the early ones
          style={{ backgroundImage: `url('${IMAGES[0]}')`, scale }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        
        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center flex flex-col items-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-[12vw] font-serif text-white uppercase leading-none tracking-tighter mix-blend-overlay"
          >
            WESTVOGUE
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="flex gap-8 mt-6 text-xs text-white/70 uppercase tracking-[0.4em] font-mono"
          >
            <span>June 2026</span>
            <span>The Art of Modern Icons</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function CoverFilmSequence() {
  const [activeScene, setActiveScene] = useState(0)
  
  const scenes = [
    { img: IMAGES[0], text1: "Some follow trends.", text2: "Others create worlds." },
    { img: IMAGES[1], text1: "Virtual Artist.", text2: "Cultural Icon." },
    { img: IMAGES[2], text1: "Power. Presence. Precision." },
    { img: IMAGES[3], text1: "Modern Authority." },
    { img: IMAGES[4], text1: "Leather. Gold.", text2: "Texture. Craftsmanship." },
    { img: IMAGES[5], text1: "Creative. Intentional. Global." }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % scenes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [scenes.length])

  return (
    <section className="w-full h-screen bg-black relative z-10 overflow-hidden cursor-pointer group">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeScene}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${scenes[activeScene].img}')` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-1000" />
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-10 pointer-events-none">
        <span className="text-xs uppercase tracking-[0.4em] text-white/50 mb-10 font-mono">Cover Film • Nova Rae: The Modern Icon</span>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScene}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-widest">{scenes[activeScene].text1}</h2>
            {scenes[activeScene].text2 && (
              <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-widest italic font-light">{scenes[activeScene].text2}</h2>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-10 left-10 right-10 h-[2px] bg-white/10 flex gap-2">
        {scenes.map((_, i) => (
          <div key={i} className="flex-1 h-full bg-white/20 relative overflow-hidden">
            {activeScene === i && (
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-white"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function FeatureStory() {
  return (
    <section className="w-full bg-neutral-950 py-32 px-10 relative z-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-sm tracking-[0.4em] text-white/50 uppercase mb-8 font-mono">Nova Rae</h3>
        <h2 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-wider mb-16 leading-tight">
          The New Generation<br/>of Influence
        </h2>
        
        <div className="flex justify-center gap-12 mb-16 border-y border-white/10 py-10">
          <div className="text-xl font-serif text-white/60 uppercase">Part Artist.</div>
          <div className="text-xl font-serif text-white/60 uppercase">Part Storyteller.</div>
          <div className="text-xl font-serif text-white/60 uppercase">Part Fashion Icon.</div>
          <div className="text-xl font-serif text-white/60 uppercase">Part Digital Visionary.</div>
        </div>

        <p className="text-2xl text-white/80 font-light leading-relaxed">
          Nova Rae represents a new category of cultural figure. Through fashion, music, technology, and visual culture she continues to shape a new narrative for modern influence.
        </p>
      </div>
    </section>
  )
}

function FashionNote() {
  return (
    <section className="w-full bg-black py-32 px-10 relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/2">
          <img src={IMAGES[2]} alt="Power Dressing" className="w-full h-auto border border-white/10 object-cover aspect-[3/4]" />
        </div>
        <div className="w-full lg:w-1/2">
          <h4 className="text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">Fashion Note</h4>
          <h3 className="text-5xl font-serif text-white uppercase tracking-widest mb-10">Power Dressing Redefined</h3>
          <p className="text-xl text-white/70 font-light mb-12">Feature the espresso-brown leather jumpsuit.</p>
          
          <ul className="flex flex-col gap-6 border-l border-white/20 pl-8">
            <li className="text-lg font-serif text-white/80 uppercase">Rich leather construction.</li>
            <li className="text-lg font-serif text-white/80 uppercase">Python-textured detailing.</li>
            <li className="text-lg font-serif text-white/80 uppercase">Gold hardware accents.</li>
            <li className="text-lg font-serif text-white/80 uppercase">Architectural tailoring.</li>
            <li className="text-lg font-serif text-white/80 uppercase">A silhouette that balances confidence and sophistication.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function BehindTheLook() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)
  
  const hotspots = [
    { id: 1, top: '20%', left: '40%', title: 'Gold Earrings', desc: 'Custom structural gold earrings adding an architectural edge to the portrait.' },
    { id: 2, top: '45%', left: '50%', title: 'Leather Tailoring', desc: 'Precision espresso-brown leather crafted for dynamic movement.' },
    { id: 3, top: '70%', left: '60%', title: 'Signature Belt', desc: 'Python-textured statement belt with structural gold hardware.' }
  ]

  return (
    <section className="w-full h-screen bg-black relative z-20 border-t border-white/10 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('${IMAGES[4]}')` }} />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 w-full max-w-5xl aspect-video bg-neutral-900 border border-white/10">
        <img src={IMAGES[4]} alt="Detail" className="w-full h-full object-cover opacity-80" />
        
        {hotspots.map((spot) => (
          <div 
            key={spot.id}
            className="absolute w-8 h-8 -ml-4 -mt-4 rounded-full border-2 border-white flex items-center justify-center cursor-pointer group hover:bg-white transition-colors"
            style={{ top: spot.top, left: spot.left }}
            onMouseEnter={() => setActiveHotspot(spot.id)}
            onMouseLeave={() => setActiveHotspot(null)}
          >
            <div className="w-2 h-2 rounded-full bg-white group-hover:bg-black" />
            
            <AnimatePresence>
              {activeHotspot === spot.id && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-12 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-md border border-white/20 p-6 z-50 pointer-events-none"
                >
                  <h5 className="text-white uppercase tracking-widest text-sm mb-2 font-serif">{spot.title}</h5>
                  <p className="text-white/60 font-light text-xs leading-relaxed">{spot.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
        <h4 className="text-xs uppercase tracking-[0.4em] text-white/50 font-mono">Behind The Look</h4>
        <p className="text-white uppercase tracking-widest mt-2 font-serif">Hover hotspots for detailed fashion commentary</p>
      </div>
    </section>
  )
}

function EditorsPickAndLifestyle() {
  return (
    <section className="w-full bg-neutral-950 relative z-20 border-t border-white/10">
      {/* Editor's Pick */}
      <div className="py-32 px-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2">
            <h4 className="text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">Editor's Pick</h4>
            <h3 className="text-5xl font-serif text-white uppercase tracking-widest mb-10 leading-tight">Modern Power<br/>Dressing</h3>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-8">
              Modern power dressing meets digital-era influence.
            </p>
            <p className="text-lg text-white/50 font-light leading-relaxed mb-8">
              Nova Rae redefines contemporary luxury through a seamless blend of fashion, technology, and artistic identity. More than a fashion statement, this aesthetic represents confidence, vision, and global connectivity.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={IMAGES[6]} alt="Editor's Pick" className="w-full h-auto border border-white/10" />
          </div>
        </div>
      </div>

      {/* Lifestyle */}
      <div className="py-32 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-20 items-center">
          <div className="w-full md:w-1/2">
            <h4 className="text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">The Nova Rae Lifestyle</h4>
            <div className="flex flex-wrap gap-4 mb-10">
              {['Fashion', 'Music', 'Travel', 'Technology', 'Culture', 'Luxury'].map((cat, i) => (
                <span key={i} className="px-6 py-2 border border-white/20 text-white/60 uppercase tracking-widest text-xs">{cat}</span>
              ))}
            </div>
            <p className="text-2xl font-serif text-white leading-relaxed font-light mb-8">
              Nova Rae's world is built around intentional living.
            </p>
            <p className="text-lg text-white/50 font-light leading-relaxed">
              Every collaboration, campaign, and appearance reflects a commitment to creativity and innovation.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={IMAGES[5]} alt="Lifestyle" className="w-full h-auto border border-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

function DigitalExhibition() {
  return (
    <section className="w-full py-32 px-10 bg-black relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h4 className="text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">Digital Exhibition Mode</h4>
        <h3 className="text-5xl font-serif text-white uppercase tracking-widest mb-4">Museum Installation</h3>
        <p className="text-white/40 tracking-widest uppercase text-sm">Scroll to experience parallax depth</p>
      </div>
      
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {IMAGES.slice(0, 9).map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: (i % 3) * 0.2 }}
            className="w-full relative overflow-hidden group cursor-pointer border border-white/5"
          >
            <img src={img} alt={`Exhibition ${i}`} className="w-full h-auto group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function EndingExperience() {
  return (
    <section className="w-full h-screen bg-black relative flex items-center justify-center z-20 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity" style={{ backgroundImage: `url('${IMAGES[8]}')` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      <div className="relative z-10 text-center max-w-4xl px-10">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-4xl md:text-6xl font-serif text-white leading-snug font-light mb-8"
        >
          "Style is not about what you wear."
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="text-4xl md:text-6xl font-serif text-white leading-snug font-light mb-16 italic"
        >
          "It's about the world you create."
        </motion.p>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="text-white/60 uppercase tracking-[0.3em] font-mono block mb-20"
        >
          — Nova Rae
        </motion.span>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 3 }}
        >
          <h2 className="text-[6vw] font-serif text-white uppercase tracking-tighter leading-none mb-4">WESTVOGUE</h2>
          <span className="text-white/40 uppercase tracking-[0.5em] font-mono text-xs">June 2026 Edition</span>
        </motion.div>
      </div>
    </section>
  )
}

export default function June2026Edition() {
  return (
    <main className="w-full bg-black overflow-x-hidden selection:bg-white/30">
      <HeroSection />
      <CoverFilmSequence />
      <FeatureStory />
      <FashionNote />
      <BehindTheLook />
      <EditorsPickAndLifestyle />
      <DigitalExhibition />
      
      {/* Issue Metrics */}
      <section className="w-full bg-neutral-950 py-20 px-10 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10">
          <div className="text-center">
            <span className="block text-4xl font-serif text-white mb-2">08</span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono">Editorial Pages</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-serif text-white mb-2">05</span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono">Fashion Films</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-serif text-white mb-2">24</span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono">Hotspots</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-serif text-white mb-2">001</span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono">Volume</span>
          </div>
        </div>
      </section>

      <EndingExperience />
    </main>
  )
}
