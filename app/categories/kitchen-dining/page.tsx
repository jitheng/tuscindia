'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const subcategories = [
  { name: 'Dinnerware', href: '/categories/kitchen-dining/dinnerware', image: '/categories/kitchen-dining/Dinnerwares/Dinnerware (1).webp' },
  { name: 'Chopping Boards', href: '/categories/kitchen-dining/chopping-boards', image: '/categories/kitchen-dining/Chopping Boards/Tray  (1).webp' },
  { name: 'Flatware', href: '/categories/kitchen-dining', image: '/categories/kitchen-dining/Flatwares/twig-flatware-5-pc-place-setting__51478.1653632636.1280.1280.webp' },
  { name: 'Trays', href: '/categories/kitchen-dining', image: '/categories/kitchen-dining/Trays/marble-acacia-wood-hex-tray-with-brass-handles-499747.webp' },
  { name: 'Barware', href: '/categories/kitchen-dining/barware', image: '/categories/kitchen-dining/Barwares/Classico_Barware_smaller-min_1c83bdde-f950-4da9-98f9-f92d704a5e0b.webp' },
  { name: 'Cake Stands', href: '/categories/kitchen-dining', image: '/categories/kitchen-dining/Cakestands/acacia-wood-and-marble-cake-stand_2.webp' },
  { name: 'Kitchen Textiles', href: '/categories/kitchen-dining', image: '/categories/kitchen-dining/Kitchen Textiles/decorative-kitchen-towels.png' },
  { name: 'Cookware', href: '/categories/kitchen-dining', image: '/categories/kitchen-dining/Cookwares/terracotta-biryani-handi-500x500.webp' },
  { name: 'Glass, Mugs & Jars', href: '/categories/kitchen-dining', image: '/categories/kitchen-dining/Glass, Mugs, and Jars/copper-mug-round-hammered-with-brass-handle-16-oz-1-piece-product-images-orvpuhoijic-p590628809-1-202108312013.webp' },
];

export default function KitchenDiningPage() {
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
            <span className="text-foreground">Kitchen & Dining</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
            Kitchen & Dining
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore our premium collection of kitchen and dining essentials that combine functionality with refined aesthetics.
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
