import HeroPlayer from '@/components/tv/HeroPlayer'
import Carousel from '@/components/tv/Carousel'
import { getEpisodesByCategory } from '@/lib/tv-data'

export default function WestvogueTV() {
  const featured = getEpisodesByCategory('Featured Premieres');
  const documentaries = getEpisodesByCategory('Designer Documentaries');
  const archives = getEpisodesByCategory('Runway Archives');
  const originals = getEpisodesByCategory('Westvogue Originals');

  return (
    <main className="w-full min-h-screen bg-black overflow-x-hidden pt-20">
      <HeroPlayer />
      
      <div className="mt-10 relative z-20 pb-32">
        <Carousel 
          title="Featured Premieres" 
          items={featured} 
        />
        
        <Carousel 
          title="Designer Documentaries" 
          items={documentaries} 
        />
        
        <Carousel 
          title="Runway Archives" 
          items={archives} 
        />

        <Carousel 
          title="Westvogue Originals" 
          items={originals} 
        />
      </div>
    </main>
  )
}
