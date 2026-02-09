import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/indian-artisan-weaving-traditional-textile-on-loom.jpg"
          alt="Indian artisan weaving traditional textile"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-6 font-medium">
            The Ultimate Sourcing Company
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight tracking-tight text-balance mb-8">
            Where tradition meets global commerce
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Bridging India{"'"}s centuries of craftsmanship with the world. We don{"'"}t just export products — we
            export stories, skills, and soul.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group">
              <Link href="#contact">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#about">Learn Our Story</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
