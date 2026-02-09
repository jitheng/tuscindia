'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const accentTableImages = [
  {
    id: 1,
    name: 'Modern Living Room Table',
    image: '/categories/furniture/Accent Tables/vertical-shot-modern-table-nice-living-room.jpg',
    description: 'Vertical modern table perfect for contemporary living spaces',
  },
  {
    id: 2,
    name: 'Antique Wooden Table',
    image: '/categories/furniture/Accent Tables/room-chair-antique-old-retro.jpg',
    description: 'Classic antique wooden table with vintage charm',
  },
  {
    id: 3,
    name: 'Contemporary Accent Table',
    image: '/categories/furniture/Accent Tables/ChatGPT Image Jan 19, 2026, 07_56_51 PM.png',
    description: 'Sleek contemporary design with modern aesthetics',
  },
  {
    id: 4,
    name: 'Elegant Side Table',
    image: '/categories/furniture/Accent Tables/ChatGPT Image Jan 19, 2026, 08_01_37 PM.png',
    description: 'Elegant side table with refined details',
  },
  {
    id: 5,
    name: 'Minimalist Pedestal Table',
    image: '/categories/furniture/Accent Tables/ChatGPT Image Jan 19, 2026, 08_05_07 PM.png',
    description: 'Minimalist design with clean lines and simple elegance',
  },
  {
    id: 6,
    name: 'Designer Accent Table',
    image: '/categories/furniture/Accent Tables/ChatGPT Image Jan 19, 2026, 08_07_14 PM.png',
    description: 'Unique designer piece with artistic craftsmanship',
  },
];

export default function AccentTablesPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof accentTableImages)[0] | null>(null);

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
            <Link href="/categories/furniture" className="hover:text-foreground transition-colors">
              Furniture
            </Link>
            <span>/</span>
            <span className="text-foreground">Accent Tables</span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <section className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
            Accent Tables
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Discover our exclusive collection of accent tables, from minimalist modern designs to timeless classical pieces. Each table is carefully crafted to add elegance and functionality to any living space.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main Image Display */}
        {selectedImage && (
          <div className="mb-12">
            <div className="relative bg-card border border-border rounded-lg overflow-hidden mb-4">
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.name}
                className="w-full h-auto max-h-[600px] object-cover"
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

        {/* Image Grid */}
        <div className={selectedImage ? 'mt-16 pt-16 border-t border-border' : ''}>
          <h3 className={`text-2xl font-light mb-8 ${selectedImage ? 'text-muted-foreground' : 'text-foreground'}`}>
            {selectedImage ? 'Other Designs' : 'Gallery'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accentTableImages
              .filter((item) => !selectedImage || item.id !== selectedImage.id)
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer overflow-hidden rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-80 bg-muted overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  </div>

                  {/* Content */}
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
                Quality Materials
              </h3>
              <p className="text-muted-foreground">
                Each table is crafted using premium materials including solid wood, marble, glass, and metal finishes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Diverse Styles
              </h3>
              <p className="text-muted-foreground">
                From classic and traditional to modern and contemporary, find the perfect style for your space.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Expert Craftsmanship
              </h3>
              <p className="text-muted-foreground">
                Every piece is carefully constructed with attention to detail and precision.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
