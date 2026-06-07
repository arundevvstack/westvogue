'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function NovaRaeMesh() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  return (
    <Float floatIntensity={1} rotationIntensity={0.5} speed={1.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        {/* Placeholder for Nova Rae 3D Model */}
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.9} 
          roughness={0.1}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  )
}

export default function CoverSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Scroll animations
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacityTitle = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scaleMesh = useTransform(scrollYProgress, [0, 1], [1, 1.5])

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {/* WebGL Cover Experience */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <Environment preset="studio" />
            <ambientLight intensity={0.2} />
            <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
            <directionalLight position={[-5, -5, -5]} intensity={1} color="#ff3366" />
            
            <group>
              <NovaRaeMesh />
            </group>
            
            {/* Fabric Particles (Sparkles as placeholder) */}
            <Sparkles count={500} scale={12} size={2} speed={0.4} opacity={0.5} color="#ffffff" />
          </Canvas>
        </div>

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10 pointer-events-none" />

        {/* Holographic Typography */}
        <motion.div 
          style={{ y: yTitle, opacity: opacityTitle }}
          className="relative z-20 flex flex-col items-center text-center mix-blend-difference"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-white uppercase text-sm md:text-base font-sans tracking-[0.4em] mb-4"
          >
            Westvogue Edition 014
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-serif text-white uppercase tracking-tighter leading-none"
          >
            Future<br/>Of<br/><span className="italic font-light">Elegance</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="mt-8 text-white max-w-md text-sm md:text-base font-light tracking-wide uppercase mix-blend-normal"
          >
            Featuring Nova Rae
          </motion.p>
        </motion.div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs uppercase tracking-widest">Experience</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-full bg-white absolute top-[-100%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
