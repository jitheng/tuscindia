'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const dinnerwareImages = [
  {
    id: 1,
    name: 'Modern Dinnerware Collection',
    image: '/categories/kitchen-dining/Dinnerwares/Dinnerware (1).webp',
    description: 'Contemporary dinnerware set with elegant design. Perfect for everyday dining and special occasions.',
  },
  {
    id: 2,
    name: 'Classic Dinnerware Set',
    image: '/categories/kitchen-dining/Dinnerwares/Dinnerware (2).webp',
    description: 'Timeless dinnerware collection featuring quality materials. Ideal for sophisticated table settings.',
  },
  {
    id: 3,
    name: 'Traditional Dinnerware',
    image: '/categories/kitchen-dining/Dinnerwares/Dinnerware (3).webp',
    description: 'Beautiful dinnerware with classic appeal. Perfect for serving and entertaining guests.',
  },
  {
    id: 4,
    name: 'Premium Dinner Service',
    image: '/categories/kitchen-dining/Dinnerwares/Dinnerware (4).webp',
    description: 'High-quality dinnerware set with refined finishes. Elegant pieces for your dining table.',
  },
  {
    id: 5,
    name: 'Designer Dinnerware Pieces',
    image: '/categories/kitchen-dining/Dinnerwares/Dinnerware (5).webp',
    description: 'Stylish dinnerware with contemporary design. Beautiful for everyday meals and special gatherings.',
  },
];

export default function DinnerwarePage() {
  const [selectedImage, setSelectedImage] = useState<(typeof dinnerwareImages)[0] | null>(null);

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
            <span className="text-foreground">Dinnerware</span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <section className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
            Dinnerware
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            From speckled ceramic and hammered copper place settings to brass puja thalis and modern two-tone sets — find the right dinnerware for everyday meals and special occasions.
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
            {dinnerwareImages
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
                Everyday & Occasion
              </h3>
              <p className="text-muted-foreground">
                From daily ceramic sets to copper thalis and ceremonial brass — dinnerware for every table and occasion.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Materials & Finishes
              </h3>
              <p className="text-muted-foreground">
                Stoneware, copper, stainless steel, brass, and modern two-tone — mix and match to suit your style.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Quality Craft
              </h3>
              <p className="text-muted-foreground">
                Thoughtful design and durable finishes ensure dinnerware that looks good and lasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
