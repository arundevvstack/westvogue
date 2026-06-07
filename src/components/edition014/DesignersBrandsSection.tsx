export default function DesignersBrandsSection() {
  const designers = [
    { name: "Ava Laurent", desc: "Neo-couture specialist blending architecture and fashion." },
    { name: "Luca Moretti", desc: "Known for adaptive garments and responsive textiles." },
    { name: "Maya Sato", desc: "Leading designer in sustainable luxury innovation." }
  ]

  const brands = [
    "Atelier Noir",
    "Eclipse Maison",
    "Aurora Couture",
    "WestVogue Atelier",
    "Aether Luxury"
  ]

  return (
    <section className="w-full bg-black py-32 px-10 border-t border-white/10 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-serif text-white uppercase tracking-wider mb-12">Featured Designers</h2>
          <div className="flex flex-col gap-10">
            {designers.map((d, i) => (
              <div key={i} className="flex gap-6 items-start group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white/5 flex-shrink-0 group-hover:bg-white/20 transition-colors" />
                <div>
                  <h3 className="text-xl font-serif text-white uppercase mb-2 group-hover:text-platinum transition-colors">{d.name}</h3>
                  <p className="text-white/50 text-sm font-light max-w-sm">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-serif text-white uppercase tracking-wider mb-12">Featured Brands</h2>
          <div className="flex flex-col gap-6">
            {brands.map((brand, i) => (
              <div key={i} className="group cursor-pointer border-b border-white/10 pb-6">
                <h3 className="text-2xl font-serif text-white/70 uppercase group-hover:text-white transition-colors">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
