export default function EditorsLetter() {
  return (
    <section className="w-full bg-neutral-950 py-32 px-10 relative z-30 flex justify-center border-t border-white/10">
      <div className="max-w-3xl text-center">
        <h2 className="text-sm tracking-[0.4em] text-white/50 uppercase mb-16">Editor's Letter</h2>
        
        <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-16 font-light">
          "Fashion has always been about imagination. Today imagination is becoming reality. This edition explores the intersection between innovation and beauty, where digital experiences amplify rather than replace creativity."
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-white/10 mb-4" />
          <h4 className="text-lg font-serif text-white uppercase tracking-widest">Mansi Malhotra</h4>
          <span className="text-xs text-white/40 uppercase tracking-[0.2em]">Editor-in-Chief</span>
        </div>
      </div>
    </section>
  )
}
