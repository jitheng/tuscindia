import { IndiaMap } from './india-map'

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-8">
              A decade of connecting worlds
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                For over a decade in the export industry, one realization stood out —
                <strong className="text-foreground">
                  {" "}
                  India isn{"'"}t just a market; it{"'"}s a masterpiece.
                </strong>
              </p>
              <p>
                Every 100 kilometers, our country changes its rhythm — new people, new colors, new crafts, new stories.
                From handwoven rugs in Panipat to block prints in Jaipur and weaves from Tamil Nadu, India{"'"}s
                artistry is as vast as its culture.
              </p>
              <p>
                Yet, amid this beauty lies a quiet truth: Our artisans — the heart of this creativity — often don{"'"}t
                receive the recognition, acknowledgment, or stability they deserve.
              </p>
              <p className="text-foreground font-medium">
                That{"'"}s where TUSC was born — to become the bridge between Indian craftsmanship and global commerce.
              </p>
            </div>
          </div>

          <div>
            <IndiaMap />
          </div>
        </div>
      </div>
    </section>
  )
}
