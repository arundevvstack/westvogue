import { getEpisodeById, getRelatedEpisodes } from '@/lib/tv-data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Play, Plus, Share2, Info } from 'lucide-react'
import Carousel from '@/components/tv/Carousel'

interface PageProps {
  params: {
    id: string
  }
}

export default function EpisodePage({ params }: PageProps) {
  const episode = getEpisodeById(params.id)

  if (!episode) {
    notFound()
  }

  const related = getRelatedEpisodes(episode.id, 6)

  return (
    <main className="w-full min-h-screen bg-black overflow-x-hidden text-white font-sans selection:bg-white/30">
      
      {/* Massive Cinematic Player Hero */}
      <section className="relative w-full h-[80vh] bg-neutral-900 border-b border-white/10 group cursor-none">
        
        {/* Background Poster fallback */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${episode.posterImg}')` }}
        />
        
        {/* Simulated Video Player */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-90"
        >
          <source src={episode.videoUrl} type="video/mp4" />
        </video>

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none opacity-80" />

        {/* Player UI (Simulated) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center bg-black/30 backdrop-blur-md shadow-[0_0_50px_rgba(255,255,255,0.2)]">
              <Play className="w-10 h-10 text-white ml-2 fill-white" />
           </div>
        </div>

        {/* Episode Metadata Overlay */}
        <div className="absolute bottom-16 left-10 md:left-20 max-w-3xl z-20 pointer-events-auto">
          <span className="text-white/70 uppercase tracking-[0.4em] font-mono text-xs mb-4 block">
            {episode.category} • {episode.duration}
          </span>
          
          <h1 className="text-6xl md:text-8xl font-serif uppercase tracking-tighter leading-none mb-6 drop-shadow-2xl">
            {episode.title}
          </h1>
          
          <p className="text-white/80 font-light text-lg md:text-xl leading-relaxed mb-8 max-w-2xl drop-shadow-md">
            {episode.description}
          </p>
          
          <div className="flex items-center gap-4">
            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 transition-colors flex items-center gap-2">
              <Play className="w-4 h-4 fill-black" /> Play Episode
            </button>
            <button className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-md">
              <Plus className="w-5 h-5 text-white" />
            </button>
            <button className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-md">
              <Share2 className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        
        {/* Custom Player Scrubber Simulation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 cursor-pointer pointer-events-auto">
          <div className="h-full bg-white w-1/3 relative">
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
          </div>
        </div>

      </section>

      {/* Details & Credits */}
      <section className="w-full max-w-7xl mx-auto px-10 md:px-20 py-20 border-b border-white/10 flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-2/3">
          <div className="flex items-center gap-2 mb-6">
            <Info className="w-5 h-5 text-white/50" />
            <h3 className="text-white text-xl font-serif uppercase tracking-widest">Synopsis</h3>
          </div>
          <p className="text-white/60 leading-relaxed font-light text-lg">
            {episode.description} This cinematic experience was shot on location, exploring the intricate details and creative mastery behind the collection. Designed for immersive viewing, the film pushes the boundaries of modern fashion documentation.
          </p>
        </div>
        
        <div className="w-full md:w-1/3 flex flex-col gap-8">
          <div>
            <span className="text-white/40 uppercase tracking-widest font-mono text-[10px] block mb-2">Director</span>
            <span className="text-white uppercase tracking-wider font-serif text-lg">{episode.director}</span>
          </div>
          <div>
            <span className="text-white/40 uppercase tracking-widest font-mono text-[10px] block mb-2">Audio</span>
            <span className="text-white uppercase tracking-wider font-serif text-lg">Dolby Atmos • Stereo</span>
          </div>
          <div>
            <span className="text-white/40 uppercase tracking-widest font-mono text-[10px] block mb-2">Release Format</span>
            <span className="text-white border border-white/20 px-2 py-1 text-xs font-mono uppercase tracking-widest mr-2 inline-block">4K HDR</span>
            <span className="text-white border border-white/20 px-2 py-1 text-xs font-mono uppercase tracking-widest inline-block">Vision Pro</span>
          </div>
        </div>
      </section>

      {/* Up Next / Related */}
      <section className="w-full py-20 pb-32">
        <Carousel title="Up Next" items={related} />
      </section>

    </main>
  )
}
