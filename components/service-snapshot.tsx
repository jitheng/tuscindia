import { Button } from '@/components/ui/button'
import { Lightbulb, Search, Cog, Shield, Truck } from 'lucide-react'

const highlights = [
  { icon: Lightbulb, text: 'Product research, development & sampling' },
  { icon: Search, text: 'Certified vendor & factory sourcing' },
  { icon: Cog, text: 'End-to-end order execution with visibility' },
  { icon: Shield, text: 'Quality inspection & assurance' },
  { icon: Truck, text: 'Flexible logistics & global shipping' },
]

export function ServiceSnapshot() {
  return (
    <div className="mb-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-4">Our Services – Snapshot</h2>
        <p className="text-lg text-primary font-medium mb-6">Source Smarter. Manufacture Better. Scale Faster.</p>
      </div>

      {/* Body text */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          We help global buyers turn ideas into market-ready products by managing sourcing, manufacturing, quality, and logistics — end to end.
          From product concept to final delivery, we're your on-ground sourcing partner in India.
        </p>
      </div>

      {/* Highlights row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-12">
        {highlights.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group hover:bg-primary/20 transition-colors">
              <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-medium leading-tight">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Trust statement */}
      <div className="bg-muted/40 border border-border rounded-lg p-6 md:p-8 mb-12 max-w-3xl mx-auto">
        <p className="text-center text-sm md:text-base text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Built for Buyers Who Want Control — Without the Complexity</span><br />
          Whether you're placing a small MOQ or scaling bulk production, we ensure right vendors, right quality, right timelines — every single time.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <Button size="lg" className="w-full md:w-auto">
          Talk to a Sourcing Expert
        </Button>
        <Button size="lg" variant="outline" className="w-full md:w-auto bg-transparent">
          Explore Our Services
        </Button>
      </div>
    </div>
  )
}
