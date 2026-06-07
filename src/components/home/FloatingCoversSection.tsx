'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, Float, PresentationControls } from '@react-three/drei'

function CoverMesh({ position, rotation, url }: { position: [number, number, number], rotation: [number, number, number], url: string }) {
  return (
    <Float floatIntensity={2} rotationIntensity={0.5} speed={2}>
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={[3, 4, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
      </mesh>
    </Float>
  )
}

export default function FloatingCoversSection() {
  return (
    <section className="relative w-full h-[120vh] bg-obsidian flex flex-col items-center justify-center py-20 z-10">
      <div className="absolute inset-0 pointer-events-none z-20 flex flex-col items-center pt-32">
        <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-wider mb-4">Latest Editions</h2>
        <p className="text-white/50 tracking-widest uppercase text-sm">Interactive 3D Archive</p>
      </div>

      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-1, 0.75]} snap={true}>
            <group position={[0, -0.5, 0]}>
              <CoverMesh position={[-3.5, 0, 1]} rotation={[0, Math.PI / 6, 0]} url="" />
              <CoverMesh position={[0, 0, 2]} rotation={[0, 0, 0]} url="" />
              <CoverMesh position={[3.5, 0, 1]} rotation={[0, -Math.PI / 6, 0]} url="" />
            </group>
          </PresentationControls>
        </Canvas>
      </div>
    </section>
  )
}
