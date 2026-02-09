const crafts = [
  {
    title: "Handwoven Rugs",
    location: "Panipat",
    image: "/traditional-handwoven-indian-rug-artisan-panipat.jpg",
  },
  {
    title: "Block Prints",
    location: "Jaipur",
    image: "/traditional-block-print-fabric-jaipur-artisan.jpg",
  },
  {
    title: "Traditional Weaves",
    location: "Tamil Nadu",
    image: "/traditional-silk-weaving-loom-tamil-nadu-artisan.jpg",
  },
  {
    title: "Embroidered Textiles",
    location: "Gujarat",
    image: "/traditional-embroidery-textile-gujarat-artisan.jpg",
  },
]

export function Crafts() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">Indian Craftsmanship</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">
            Stories woven into every thread
          </h2>
          <p className="text-muted-foreground text-lg">
            Every 100 kilometers, India changes its rhythm — new people, new colors, new crafts. Discover the diversity
            we bring to the global market.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {crafts.map((craft, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[5/6]">
                <img
                  src={craft.image || "/placeholder.svg"}
                  alt={craft.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs uppercase tracking-widest text-card/70 mb-1">{craft.location}</p>
                <h3 className="font-serif text-xl text-card font-medium">{craft.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
