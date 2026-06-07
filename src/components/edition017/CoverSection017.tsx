'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function GlassArchitecture() {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <octahedronGeometry args={[3, 0]} />
      <MeshTransmissionMaterial 
        backside
        samples={4}
        thickness={2}
        chromaticAberration={0.05}
        anisotropy={0.1}
        distortion={0.5}
        distortionScale={0.5}
        temporalDistortion={0.1}
        color="#ffffff"
      />
    </mesh>
  )
}

export default function CoverSection017() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacityTitle = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative w-full h-[120vh] bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Abstract WebGL Glass Architecture */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <Environment preset="night" />
            <ambientLight intensity={0.1} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
            <directionalLight position={[-5, -10, -5]} intensity={0.5} color="#4444ff" />
            <GlassArchitecture />
          </Canvas>
        </div>

        {/* Cinematic Darkness Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-10 pointer-events-none" />

        {/* Typography */}
        <motion.div 
          style={{ y: yTitle, opacity: opacityTitle }}
          className="relative z-20 flex flex-col items-center text-center px-6"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-white/60 uppercase text-xs tracking-[0.5em] mb-6 font-mono"
          >
            Edition 017
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-serif text-white uppercase tracking-widest leading-none text-shadow-luxury"
          >
            Midnight<br/>Luxury
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="mt-8 text-white max-w-sm text-sm font-light tracking-[0.2em] uppercase"
          >
            Cover Star: Nova Rae
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
