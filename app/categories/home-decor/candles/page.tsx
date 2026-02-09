'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const candleImages = [
  {
    id: 1,
    name: 'Elegant Jar Candles',
    image: '/categories/home-decor/Candles/candles (1).jpg',
    description: 'Beautiful jar candles with clean design. Perfect for adding warmth and ambience to any space.',
  },
  {
    id: 2,
    name: 'Luxury Candle Collection',
    image: '/categories/home-decor/Candles/candles (1).png',
    description: 'Premium candles with sophisticated styling. Create a cozy atmosphere with rich fragrances.',
  },
  {
    id: 3,
    name: 'Artisan Candle Set',
    image: '/categories/home-decor/Candles/candles (2).png',
    description: 'Handcrafted candles with natural wax and beautiful finishes. Modern and elegant for any décor style.',
  },
];

export default function CandlesPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof candleImages)[0] | null>(null);

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
            <Link href="/categories/home-decor" className="hover:text-foreground transition-colors">
              Home Décor
            </Link>
            <span>/</span>
            <span className="text-foreground">Candles</span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <section className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
            Candles
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            From pillar candles and jar candles to tea lights and lanterns — find the right candles and holders to add warmth and ambience to your space.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {selectedImage && (
          <div className="mb-12">
            <div className="relative bg-card border border-border rounded-lg overflow-hidden mb-4">
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.name}
                className="w-full h-auto max-h-[600px] object-contain"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-light text-foreground">
                {selectedImage.name}
              </h2>
              <p className="text-lg text-muted-foreground">
                {selectedImage.description}
              </p>
              <button
                onClick={() => setSelectedImage(null)}
                className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                View All
              </button>
            </div>
          </div>
        )}

        <div className={selectedImage ? 'mt-16 pt-16 border-t border-border' : ''}>
          <h3 className={`text-2xl font-light mb-8 ${selectedImage ? 'text-muted-foreground' : 'text-foreground'}`}>
            {selectedImage ? 'Other Designs' : 'Gallery'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candleImages
              .filter((item) => !selectedImage || item.id !== selectedImage.id)
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer overflow-hidden rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative h-80 bg-muted overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="p-6 bg-card group-hover:bg-muted/50 transition-colors duration-300">
                    <h4 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      View Details
                      <span>→</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Product Information */}
      <section className="border-t border-border bg-card/30 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Ambience & Style
              </h3>
              <p className="text-muted-foreground">
                From rustic pillars to modern jar candles and decorative holders — each piece adds warmth and character to your home.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Versatile Use
              </h3>
              <p className="text-muted-foreground">
                Perfect for living rooms, bedrooms, dining tables, and entryways. Mix and match for a layered, inviting look.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Quality & Craft
              </h3>
              <p className="text-muted-foreground">
                Thoughtful materials and finishes ensure a clean burn and lasting appeal for everyday and special occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
