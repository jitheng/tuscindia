'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const barwareImages = [
  {
    id: 1,
    name: 'Professional Barware Set',
    image: '/categories/kitchen-dining/Barwares/AMLCS062419_1.webp',
    description: 'Complete barware collection with essential cocktail tools. Perfect for home bars and entertaining.',
  },
  {
    id: 2,
    name: 'Classic Barware Collection',
    image: '/categories/kitchen-dining/Barwares/Classico_Barware_smaller-min_1c83bdde-f950-4da9-98f9-f92d704a5e0b.webp',
    description: 'Elegant barware set featuring quality materials and timeless design. Ideal for mixing and serving cocktails.',
  },
  {
    id: 3,
    name: 'Premium Bar Tools',
    image: '/categories/kitchen-dining/Barwares/Untitled-design-44.webp',
    description: 'Sophisticated barware tools with professional quality finish. Essential pieces for the home bartender.',
  },
];

export default function BarwarePage() {
  const [selectedImage, setSelectedImage] = useState<(typeof barwareImages)[0] | null>(null);

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
            <Link href="/categories/kitchen-dining" className="hover:text-foreground transition-colors">
              Kitchen & Dining
            </Link>
            <span>/</span>
            <span className="text-foreground">Barware</span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <section className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
            Barware
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            From jiggers and shakers to strainers and bar spoons — find the right barware for mixing and serving cocktails at home. Polished silver, matte black, and golden finishes.
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
            {barwareImages
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
                Mix & Serve
              </h3>
              <p className="text-muted-foreground">
                Shakers, jiggers, strainers, and bar spoons — everything you need for classic and modern cocktails at home.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Finishes & Styles
              </h3>
              <p className="text-muted-foreground">
                Polished silver, matte black, and golden brass — choose the look that fits your bar or kitchen.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Quality Craft
              </h3>
              <p className="text-muted-foreground">
                Durable metal and clear glass with attention to detail for professional results and lasting use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
