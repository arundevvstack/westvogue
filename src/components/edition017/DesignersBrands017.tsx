export default function DesignersBrands017() {
  const designers = ['Elena Rossi', 'Jules Laurent', 'Maya Sato', 'Adrian Black']
  const brands = ['Maison Noir', 'Louis Vero', 'Atelier Eclipse', 'Obsidian Couture']

  return (
    <section className="w-full bg-black py-32 px-10 border-t border-white/10 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 justify-between">
        
        <div className="w-full md:w-1/2">
          <h2 className="text-sm tracking-[0.4em] text-white/50 uppercase mb-12">Featured Designers</h2>
          <div className="flex flex-col">
            {designers.map((designer, i) => (
              <div key={i} className="group cursor-pointer border-b border-white/10 py-8 first:pt-0">
                <h3 className="text-3xl font-serif text-white/60 uppercase group-hover:text-white transition-colors flex justify-between items-center">
                  {designer}
                  <span className="text-sm font-sans tracking-widest text-white/30 group-hover:text-white transition-colors">→</span>
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-sm tracking-[0.4em] text-white/50 uppercase mb-12">Featured Brands</h2>
          <div className="flex flex-col">
            {brands.map((brand, i) => (
              <div key={i} className="group cursor-pointer border-b border-white/10 py-8 first:pt-0">
                <h3 className="text-3xl font-serif text-white/60 uppercase group-hover:text-white transition-colors flex justify-between items-center">
                  {brand}
                  <span className="text-sm font-sans tracking-widest text-white/30 group-hover:text-white transition-colors">→</span>
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
