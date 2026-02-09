'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const furnitureSubcategories = [
  {
    name: 'Accent Tables',
    description: 'Elegant side tables and accent pieces',
    image: '/categories/furniture/Accent Tables/vertical-shot-modern-table-nice-living-room.jpg',
    href: '/categories/furniture/accent-tables',
  },
  {
    name: 'Chairs',
    description: 'Comfortable and stylish seating solutions',
    image: '/categories/furniture/Chairs/efren-solid-mango-wood-dining-chair_1.webp',
    href: '/categories/furniture',
  },
  {
    name: 'Mirrors',
    description: 'Decorative wall mirrors and hand-carved designs',
    image: '/categories/furniture/Mirrors /1940-Frenchman-Solid-wood-Hand-Carved-Wall-Mirror-y_600x.webp',
    href: '/categories/furniture/mirrors',
  },
  {
    name: 'Ottomans',
    description: 'Functional and stylish ottomans',
    image: '/categories/furniture/Ottomans/Flat_Ottoman_Ivory_Wood_Leg.webp',
    href: '/categories/furniture',
  },
  {
    name: 'Storage',
    description: 'Elegant storage solutions and cabinets',
    image: '/categories/furniture/Storage /Solid-Wood-Multipurpose-Side-Storage-Cabinet-Lakkadhaara-2073805652012.webp',
    href: '/categories/furniture',
  },
];

export default function FurnitureCategoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/categories" className="hover:text-foreground transition-colors">
              Collections
            </Link>
            <span>/</span>
            <span className="text-foreground">Furniture</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
            Furniture
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore our curated selection of premium furniture pieces designed to enhance your living spaces with elegance and functionality.
          </p>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {furnitureSubcategories.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group overflow-hidden rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 bg-muted overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 bg-card group-hover:bg-muted/50 transition-colors duration-300">
                <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Explore
                  <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
