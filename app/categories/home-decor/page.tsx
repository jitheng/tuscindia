'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const subcategories = [
  { name: 'Decoratives', href: '/categories/home-decor/decoratives', image: '/categories/home-decor/Decoratives/decoratives (1).webp' },
  { name: 'Candles', href: '/categories/home-decor/candles', image: '/categories/home-decor/Candles/candles (1).webp' },
  { name: 'Vases', href: '/categories/home-decor/vases', image: '/categories/home-decor/Vases/vases (2).webp' },
  { name: 'Baskets', href: '/categories/home-decor/baskets', image: '/categories/home-decor/Baskets/baskets (1).webp' },
  { name: 'Wall Decoratives', href: '/categories/home-decor', image: '/categories/home-decor/Wall Decoratives/wall art  (1).webp' },
  { name: 'Planters', href: '/categories/home-decor/planters', image: '/categories/home-decor/Planters/Planters (2).webp' },
  { name: 'Lighting & Lamps', href: '/categories/home-decor/lighting-lamps', image: '/categories/home-decor/Lighting Lamps/Lighting & Lamps (1).webp' },
  { name: 'Textile Décor', href: '/categories/home-decor', image: '/categories/home-decor/Textile Décors/decor (1).webp' },
];

export default function HomeDecorPage() {
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
            <span className="text-foreground">Home Décor</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
            Home Décor
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Discover carefully curated decorative pieces that transform your home into a sanctuary of style and elegance.
          </p>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subcategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group p-6 border border-border rounded-lg hover:border-primary/30 hover:bg-muted/30 transition-all duration-300 cursor-pointer block"
            >
              <div className="w-full aspect-square rounded-lg mb-4 overflow-hidden bg-muted">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-medium text-center text-sm group-hover:text-primary transition-colors">
                {category.name}
              </h4>
            </Link>
          ))}
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="border-t border-border bg-card/30 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            More products coming soon. Thank you for your patience!
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
