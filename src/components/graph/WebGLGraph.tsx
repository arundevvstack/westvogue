'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { MOCK_GRAPH_DATA, GraphNode, GraphEdge } from '@/lib/graph/engine'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function Node({ node, position }: { node: GraphNode, position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  const color = useMemo(() => {
    switch(node.type) {
      case 'designer': return '#ff3366'
      case 'brand': return '#33ccff'
      case 'model': return '#cc33ff'
      default: return '#ffffff'
    }
  }, [node.type])

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[node.influenceScore / 50, 1]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
      <Text position={[0, -1.5, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
        {node.label}
      </Text>
    </group>
  )
}

function Edges({ nodes, edges }: { nodes: GraphNode[], edges: GraphEdge[] }) {
  const lineGeometry = useMemo(() => {
    // This is a simplified static mock of line segments for demonstration
    // In a real force-directed graph, positions would be calculated dynamically
    const points = []
    points.push(new THREE.Vector3(0, 0, 0))
    points.push(new THREE.Vector3(5, 2, -3))
    points.push(new THREE.Vector3(0, 0, 0))
    points.push(new THREE.Vector3(-4, -1, 2))
    
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [nodes, edges])

  return (
    <lineSegments geometry={lineGeometry}>
      <lineBasicMaterial color="#ffffff" opacity={0.2} transparent />
    </lineSegments>
  )
}

export default function WebGLGraph() {
  return (
    <div className="w-full h-full bg-obsidian cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls enableDamping dampingFactor={0.05} autoRotate autoRotateSpeed={0.5} />
        
        <group>
          <Node node={MOCK_GRAPH_DATA.nodes[0]} position={[0, 0, 0]} />
          <Node node={MOCK_GRAPH_DATA.nodes[1]} position={[5, 2, -3]} />
          <Node node={MOCK_GRAPH_DATA.nodes[2]} position={[-4, -1, 2]} />
          <Node node={MOCK_GRAPH_DATA.nodes[3]} position={[2, -5, 4]} />
          <Edges nodes={MOCK_GRAPH_DATA.nodes} edges={MOCK_GRAPH_DATA.edges} />
        </group>
      </Canvas>
    </div>
  )
}
