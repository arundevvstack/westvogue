import WebGLGraph from '@/components/graph/WebGLGraph'

export default function GraphExplorer() {
  return (
    <main className="w-full h-screen bg-black relative overflow-hidden pt-24">
      <div className="absolute top-32 left-10 z-10 pointer-events-none">
        <h1 className="text-5xl font-serif uppercase text-white mb-2 tracking-wide">Knowledge Graph</h1>
        <p className="text-white/50 tracking-widest text-sm uppercase">Explore the Fashion Universe</p>
      </div>
      
      <div className="w-full h-[calc(100vh-6rem)]">
        <WebGLGraph />
      </div>
    </main>
  )
}
