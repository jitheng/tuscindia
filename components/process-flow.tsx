import { Lightbulb, Layers, Zap, Cog, Eye, Package, Warehouse, Truck } from 'lucide-react'

const processSteps = [
  { icon: Lightbulb, label: 'Briefing Call', number: 1 },
  { icon: Layers, label: 'Research & Design', number: 2 },
  { icon: Zap, label: 'Sampling', number: 3 },
  { icon: Cog, label: 'Production', number: 4 },
  { icon: Eye, label: 'Tracking', number: 5 },
  { icon: Eye, label: 'Quality Checks', number: 6 },
  { icon: Warehouse, label: 'Warehousing', number: 7 },
  { icon: Truck, label: 'Shipping', number: 8 },
]

export function ProcessFlow() {
  return (
    <div className="mt-20 pt-16 border-t border-border">
      <h3 className="font-serif text-2xl md:text-3xl font-medium mb-12">Our Process Flow</h3>
      
      <div className="overflow-x-auto">
        <div className="flex items-start justify-between min-w-max gap-4 md:gap-2">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Step Circle */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary/30 flex items-center justify-center mb-4 bg-background hover:border-primary/60 hover:bg-primary/5 transition-all">
                <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={1.5} />
              </div>
              
              {/* Label */}
              <p className="text-xs md:text-sm text-center text-muted-foreground font-medium max-w-20 md:max-w-24">
                {step.label}
              </p>
              
              {/* Arrow to next step */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:flex absolute ml-32 mt-8">
                  <svg className="w-12 h-2 text-border" viewBox="0 0 40 10" preserveAspectRatio="none">
                    <line x1="0" y1="5" x2="35" y2="5" stroke="currentColor" strokeWidth="1.5" />
                    <polygon points="40,5 35,3 35,7" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile arrows */}
      <div className="md:hidden flex justify-center items-center gap-2 mt-8 text-muted-foreground">
        <span className="text-sm">Scroll to see full process</span>
      </div>
    </div>
  )
}
