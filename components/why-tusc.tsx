import { Check } from "lucide-react"

const challenges = [
  "Communication gaps between global buyers and local artisans",
  "Unmet quality expectations due to lack of oversight",
  "Long lead times without proper project management",
  "Limited transparency in production processes",
  "Lack of ground-level support and visibility",
]

const solutions = [
  "Dedicated communication managers fluent in multiple languages",
  "Rigorous quality control with real-time reporting",
  "Efficient project management with clear timelines",
  "Complete transparency through factory visits and updates",
  "On-ground teams ensuring smooth operations",
]

export function WhyTusc() {
  return (
    <section id="why-tusc" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] opacity-80 mb-4 font-medium">The TUSC Difference</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">
            Why India lags in exports — and how we{"'"}re changing that
          </h2>
          <p className="opacity-80 text-lg">
            Despite centuries of craftsmanship, a disconnect between local and global has held India back. We{"'"}re
            here to bridge that gap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto">
          <div className="bg-primary-foreground/10 p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-medium mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm">✕</span>
              The Challenge
            </h3>
            <ul className="space-y-4">
              {challenges.map((item, index) => (
                <li key={index} className="flex items-start gap-3 opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary-foreground/10 p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-medium mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-foreground text-primary flex items-center justify-center">
                <Check className="w-4 h-4" />
              </span>
              The TUSC Solution
            </h3>
            <ul className="space-y-4">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary-foreground shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
