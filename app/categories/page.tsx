'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const categories = [
  {
    id: 'furniture',
    name: 'Furniture',
    description: 'Accent tables, chairs, storage, mirrors, and ottomans crafted with precision',
    image: '/categories/furniture/Accent Tables/vertical-shot-modern-table-nice-living-room.jpg',
    subcategories: ['Accent Tables', 'Chairs', 'Storage', 'Mirrors', 'Ottomans'],
  },
  {
    id: 'home-decor',
    name: 'Home Décor',
    description: 'Decoratives, candles, vases, baskets, planters, and artistic lighting',
    image: '/categories/home-decor/Decoratives/decoratives (1).webp',
    subcategories: ['Decoratives', 'Candles', 'Vases', 'Baskets', 'Planters', 'Lighting'],
  },
  {
    id: 'kitchen-dining',
    name: 'Kitchen & Dining',
    description: 'Dinnerware, flatware, trays, cookware, glass, mugs, and kitchen textiles',
    image: '/categories/kitchen-dining/Dinnerwares/Dinnerware (1).webp',
    subcategories: ['Dinnerware', 'Flatware', 'Trays', 'Barware', 'Glassware'],
  },
  {
    id: 'textiles',
    name: 'Textiles',
    description: 'Cushions, bedsheets, quilts, rugs, throws, towels, and bath robes',
    image: '/categories/textiles/Throws/multicolor-handloom-jaipur-cotton-sofa-throw-24-throws-842.webp',
    subcategories: ['Cushions', 'Bedsheets', 'Rugs', 'Throws', 'Towels'],
  },
  {
    id: 'pets',
    name: 'Pets',
    description: 'Pet bedding, feeding bowls, toys, and clothing for your furry friends',
    image: '/categories/pets/Beds and Beddings/Luxury-Cozy-Cave-Dog-Bed-Wag-Collection.jpg',
    subcategories: ['Bedding', 'Bowls', 'Toys', 'Clothing'],
  },
  {
    id: 'seasonal',
    name: 'Seasonal',
    description: 'Ornaments, garlands, decoratives, textiles, and festive serveware',
    image: '/categories/seasonal/Decoratives/wooden-christmas-tree.jpg',
    subcategories: ['Ornaments', 'Garland', 'Decoratives', 'Serveware'],
  },
];

export default function CategoriesPage() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Header Section */}
      <section className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
            Collections
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our carefully curated collections of furniture and home décor. Each category offers a unique selection of premium products crafted for elegance and functionality.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="overflow-hidden rounded-lg border border-border hover:border-primary/30 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-muted">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>

                {/* Content Container */}
                <div className="p-6 bg-card group-hover:bg-muted/50 transition-colors duration-300">
                  <h2 className="text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>

                  {/* Subcategories */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                      Featured Items
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.slice(0, 3).map((sub) => (
                        <span
                          key={sub}
                          className="px-3 py-1 text-xs bg-background border border-border rounded-full text-foreground/70 group-hover:border-primary/30 transition-colors"
                        >
                          {sub}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className="px-3 py-1 text-xs text-foreground/70">
                          +{category.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Explore Link */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors inline-flex items-center gap-2">
                      Explore Collection
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-border bg-card/30 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6 text-foreground">
            Curated with Care
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our collections are handpicked to bring together the finest pieces in home furnishing and décor. From timeless classics to contemporary designs, we offer products that combine quality, style, and functionality.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
