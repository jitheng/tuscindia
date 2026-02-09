'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CategoriesModal } from './categories-modal'

const categories = [
  {
    id: 'furniture',
    name: 'Furniture',
    icon: '🪑',
    image: '/categories/furniture/Accent Tables/vertical-shot-modern-table-nice-living-room.jpg',
    description: 'Accent tables, chairs, storage, mirrors, and ottomans crafted with precision',
  },
  {
    id: 'home-decor',
    name: 'Home Décor',
    icon: '🏠',
    image: '/categories/home-decor/Decoratives/decoratives (1).webp',
    description: 'Decoratives, candles, vases, baskets, planters, and artistic lighting',
  },
  {
    id: 'kitchen-dining',
    name: 'Kitchen & Dining',
    icon: '🍽️',
    image: '/categories/kitchen-dining/Dinnerwares/Dinnerware (1).webp',
    description: 'Dinnerware, flatware, trays, cookware, glass, mugs, and kitchen textiles',
  },
  {
    id: 'textiles',
    name: 'Textiles',
    icon: '🧵',
    image: '/categories/textiles/Throws/multicolor-handloom-jaipur-cotton-sofa-throw-24-throws-842.webp',
    description: 'Cushions, bedsheets, quilts, rugs, throws, towels, and bath robes',
  },
  {
    id: 'pets',
    name: 'Pets',
    icon: '🐾',
    image: '/categories/pets/Beds and Beddings/Luxury-Cozy-Cave-Dog-Bed-Wag-Collection.jpg',
    description: 'Pet bedding, feeding bowls, toys, and clothing for your furry friends',
  },
  {
    id: 'seasonal',
    name: 'Seasonal',
    icon: '🎄',
    image: '/categories/seasonal/Decoratives/wooden-christmas-tree.jpg',
    description: 'Ornaments, garlands, decoratives, textiles, and festive serveware',
  },
]

export function Craftmanship() {
  const [showCategories, setShowCategories] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <>
      <section id="craftmanship" className="py-24 md:py-32 bg-muted/20">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-medium">Indian Craftmanship</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">
              Stories woven into every thread
            </h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-3xl">
              Every 100 kilometers, India changes its rhythm — new people, new colors, new crafts. Discover the diversity
              we bring to the global market.
            </p>

            <h3 className="font-serif text-2xl font-medium mb-8">Categories we serve</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`overflow-hidden rounded-lg border transition-all duration-300 cursor-pointer group ${
                    hoveredCategory === category.id
                      ? 'border-primary/50 shadow-lg'
                      : 'border-border hover:border-primary/30 hover:shadow-md'
                  }`}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  onClick={() => setShowCategories(true)}
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h4 className="font-serif text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex items-center justify-end pt-2 border-t border-border/50">
                      <ChevronRight className={`w-5 h-5 text-primary transition-transform ${
                        hoveredCategory === category.id ? 'translate-x-1' : ''
                      }`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={() => setShowCategories(true)}
              className="group"
              size="lg"
            >
              Explore All Categories
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Modal */}
      <CategoriesModal isOpen={showCategories} onClose={() => setShowCategories(false)} />
    </>
  )
}
