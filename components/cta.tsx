import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">Ready to Begin?</p>
          <h2 className="font-serif text-4xl md:text-6xl font-medium leading-tight mb-8 text-balance">
            When tradition meets trust, magic happens
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Partner with TUSC and bring the soul of Indian craftsmanship to your global customers. Let{"'"}s write the
            next chapter together.
          </p>
          <Button size="lg" asChild className="group">
            <Link href="#contact">
              Start Your Sourcing Journey
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
