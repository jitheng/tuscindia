'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Lightbulb, Briefcase, CheckCircle2, Eye, Truck, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from '@/components/ui/button'
import { ProcessFlow } from './process-flow'

const services = [
  {
    icon: Lightbulb,
    title: "Product Research & Development",
    shortDescription: "From concept to market-ready product with full feasibility checks",
    highlights: [
      "Product ideation, concepts, and specification sheets",
      "End-user requirement mapping",
      "Sample development and iterations",
      "Product proof of concept (PoC) before scale-up",
    ],
    description: "This ensures feasibility, cost alignment, and quality from day one. We work closely with you to transform ideas into tangible products that meet market demands.",
  },
  {
    icon: Briefcase,
    title: "Strategic Vendor Sourcing",
    shortDescription: "Quality-first vendor selection with compliance and scalability focus",
    highlights: [
      "Supplier fitness checks (certifications, compliance, factory audits)",
      "MOQ alignment and scalability assessment",
      "Cost benchmarking and commercial negotiations",
      "Contract terms and conditions finalization",
    ],
    description: "Our focus is on quality, reliability, and long-term sustainability — not just price. We connect you with verified vendors who can scale with your business.",
  },
  {
    icon: CheckCircle2,
    title: "Order Execution & Project Management",
    shortDescription: "End-to-end order management with complete transparency",
    highlights: [
      "Bulk and small-MOQ order execution",
      "Timely production planning and follow-ups",
      "On-ground visibility via calls, emails, dashboards, and trackers",
      "High-quality product images and motion videos for updates",
    ],
    description: "Every project is managed with transparency and accountability. Stay informed at every stage with real-time updates and detailed reporting.",
  },
  {
    icon: Eye,
    title: "Quality Inspection & Assurance",
    shortDescription: "Rigorous quality checks at every production stage",
    highlights: [
      "Product performance and 3rd-party testing",
      "Initial, midline, and final inspections before dispatch",
      "Compliance with buyer-specific quality benchmarks",
    ],
    description: "No surprises. No compromises. Our multi-stage inspection process ensures your products meet the highest quality standards before shipping.",
  },
  {
    icon: Truck,
    title: "Logistics & Shipping",
    shortDescription: "Seamless global shipping from factory to your destination",
    highlights: [
      "Factory-to-port or factory-to-warehouse shipping",
      "Coordination with freight partners",
      "On-time delivery at the right location with promised quality",
    ],
    description: "You tell us where you want your goods delivered — we take care of the rest. Our logistics network ensures timely, safe delivery worldwide.",
  },
]

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">What We Do</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">Our Services</h2>
          <p className="text-lg text-primary font-medium mb-6">Source Smarter. Manufacture Better. Scale Faster.</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            We help global buyers turn ideas into market-ready products by managing sourcing, manufacturing, quality, and logistics — end to end.
            From product concept to final delivery, we're your on-ground sourcing partner in India.
          </p>
        </div>

        {/* Trust Statement */}
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-16 max-w-3xl shadow-sm">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground text-lg block mb-2">Built for Buyers Who Want Control — Without the Complexity</span>
            Whether you're placing a small MOQ or scaling bulk production, we ensure right vendors, right quality, right timelines — every single time.
          </p>
        </div>

        {/* Interactive Service Cards */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Service Header - Always Visible */}
                <div
                  onClick={() => toggleService(index)}
                  className="p-6 cursor-pointer flex items-start gap-4 hover:bg-muted/30 transition-colors"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                    <service.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl md:text-2xl font-medium mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Expand Icon */}
                  <div className="flex-shrink-0">
                    {expandedService === index ? (
                      <ChevronUp className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </div>
                </div>

                {/* Expandable Details */}
                {expandedService === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-border bg-muted/10 animate-in slide-in-from-top-2 duration-200">
                    <div className="ml-[4.5rem]">
                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground/70 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                              <span className="text-primary font-bold text-base flex-shrink-0">✓</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Description */}
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-muted-foreground leading-relaxed text-sm italic">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-start items-start mb-20">
          <Button size="lg" asChild className="w-full md:w-auto text-base px-8">
            <Link href="#contact">Talk to a Sourcing Expert</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full md:w-auto bg-transparent text-base px-8">
            <Link href="#services">View Our Process</Link>
          </Button>
        </div>

        {/* Process Flow */}
        <ProcessFlow />

        {/* Closing Statement */}
        <div className="mt-24">
          <p className="text-lg text-muted-foreground font-medium max-w-3xl leading-relaxed">
            From sourcing to shipping, we act as your extended supply-chain team — on the ground, in control, and always aligned with your business goals.
          </p>
        </div>
      </div>
    </section>
  )
}
