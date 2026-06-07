import CoverSection017 from '@/components/edition017/CoverSection017'
import CoverStory017 from '@/components/edition017/CoverStory017'
import Editorials017 from '@/components/edition017/Editorials017'
import DesignersBrands017 from '@/components/edition017/DesignersBrands017'

export const metadata = {
  title: 'WESTVOGUE EDITION 017 | Midnight Luxury',
  description: 'Ultra-cinematic black couture explored in the dark.'
}

export default function Edition017() {
  return (
    <main className="w-full bg-black overflow-x-hidden">
      <CoverSection017 />
      <CoverStory017 />
      <Editorials017 />
      <DesignersBrands017 />
      
      {/* Editor's Letter */}
      <section className="w-full bg-neutral-950 py-32 px-10 relative z-30 flex justify-center border-t border-white/10">
        <div className="max-w-3xl text-center">
          <h2 className="text-xs tracking-[0.5em] text-white/40 uppercase mb-12">Editor's Letter</h2>
          <p className="text-3xl md:text-4xl font-serif text-white leading-snug mb-16 font-light">
            "Luxury is no longer loud. It whispers through silhouette, movement, and atmosphere."
          </p>
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-xl font-serif text-white uppercase tracking-widest">Mansi Malhotra</h4>
            <span className="text-xs text-white/40 uppercase tracking-[0.2em]">Editor-in-Chief</span>
          </div>
        </div>
      </section>
    </main>
  )
}
