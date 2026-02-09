'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Location {
  id: string
  name: string
  craft: string
  x: string
  y: string
}

const locations: Location[] = [
  {
    id: 'panipat',
    name: 'Panipat',
    craft: 'Handwoven Rugs',
    x: '52%',
    y: '22%',
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    craft: 'Block Prints',
    x: '42%',
    y: '30%',
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    craft: 'Embroidery & Textiles',
    x: '30%',
    y: '38%',
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    craft: 'Silk & Coffee Dyes',
    x: '46%',
    y: '68%',
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    craft: 'Traditional Weaves',
    x: '55%',
    y: '78%',
  },
]

export function IndiaMap() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  return (
    <div className="w-full overflow-visible">
      {/* Map with pins */}
      <div className="relative w-full rounded-xl shadow-xl border-2 border-primary/20">
        <Image
          src="/india-map-vibrant.jpg"
          alt="India map showing craft regions"
          width={1000}
          height={1200}
          className="w-full h-auto rounded-xl"
          priority
        />

        {/* Pin overlays */}
        {locations.map((location) => (
          <div
            key={location.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: location.x, top: location.y }}
            onMouseEnter={() => setHoveredLocation(location.id)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {/* Outer glow ring */}
            <div className="absolute w-6 h-6 rounded-full border-2 border-primary/30 animate-pulse -inset-1" />

            {/* Pin circle */}
            <div
              className={`relative w-5 h-5 rounded-full transition-all duration-300 ${
                hoveredLocation === location.id
                  ? 'w-8 h-8 bg-gradient-to-br from-primary to-primary/80 shadow-2xl scale-110'
                  : 'bg-gradient-to-br from-primary to-primary/70 shadow-lg'
              }`}
            />

            {/* Tooltip */}
            {hoveredLocation === location.id && (
              <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 z-20 animate-in fade-in zoom-in duration-200">
                <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground px-4 py-3 rounded-lg text-xs font-medium shadow-2xl border border-primary/40 whitespace-nowrap">
                  <p className="font-semibold text-sm">{location.name}</p>
                  <p className="text-primary-foreground/90">{location.craft}</p>
                </div>
                <div className="w-3 h-3 bg-primary absolute top-full left-1/2 transform -translate-x-1/2 -mt-1.5 rotate-45 shadow-lg" />
              </div>
            )}
          </div>
        ))}
      </div>


    </div>
  )
}
