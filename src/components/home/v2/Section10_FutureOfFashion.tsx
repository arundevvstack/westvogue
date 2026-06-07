'use client'

import { motion } from 'framer-motion'

export default function Section10_FutureOfFashion() {
  return (
    <section className="w-full h-[150vh] bg-black relative z-20 border-t border-white/10 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-50 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-7xl px-10 text-center">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[0.5em] text-white/50 mb-16 font-mono"
        >
          The Future of Fashion
        </motion.h4>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-serif text-white uppercase tracking-tighter leading-none mix-blend-difference mb-20"
        >
          Intelligence <br/>
          <span className="text-white/20">Meets</span> <br/>
          Craftsmanship
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {[
            { title: "AI Predictions", desc: "Generative adversarial networks predicting silhouette evolution." },
            { title: "Designer Insights", desc: "How virtual materiality is replacing physical prototyping." },
            { title: "Trend Forecasts", desc: "The rise of hyper-personalization via neural fashion models." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="border-l border-white/20 pl-6"
            >
              <h5 className="text-white uppercase tracking-widest font-serif mb-4 text-xl">{item.title}</h5>
              <p className="text-white/50 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating typography elements */}
      <motion.div 
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 text-white/10 font-serif text-8xl uppercase pointer-events-none select-none"
      >
        VISION
      </motion.div>
      <motion.div 
        animate={{ y: [20, -20, 20], x: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 text-white/10 font-serif text-9xl uppercase pointer-events-none select-none"
      >
        DATA
      </motion.div>
    </section>
  )
}
