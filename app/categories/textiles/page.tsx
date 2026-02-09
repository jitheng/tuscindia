'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const subcategories = [
  { name: 'Decorative Cushions', image: '/categories/textiles/Decorative Cushions/bohemian_cotton_cushion_cover.webp', href: '/categories/textiles' },
  { name: 'Bedsheets', image: '/categories/textiles/Bedsheets/sootisyahi-meaningful-minimal-handblock-printed-cotton-bedsheet-163938.jpg', href: '/categories/textiles' },
  { name: 'Quilts & Comforters', image: '/categories/textiles/Quilts & Comforters/velvet-quilt-53--500x500.webp', href: '/categories/textiles' },
  { name: 'Runners', image: '/categories/textiles/Runners/Folk-Art-Braided-Rug-Runner-30x72-762242318878_image2__10992.jpg', href: '/categories/textiles' },
  { name: 'Rugs', image: '/categories/textiles/Rugs/chenille-chinchilla-rug-detail.webp', href: '/categories/textiles' },
  { name: 'Throws', image: '/categories/textiles/Throws/multicolor-handloom-jaipur-cotton-sofa-throw-24-throws-842.webp', href: '/categories/textiles' },
  { name: 'Bathmats', image: '/categories/textiles/Bathmats/linea-bathmat-light-blue-500x500.webp', href: '/categories/textiles' },
  { name: 'Bath Towels', image: '/categories/textiles/Bath towels/terry-velour-towels-400-gsm-75x150-cm-bath-towels.jpg', href: '/categories/textiles' },
  { name: 'Bathrobes', image: '/categories/textiles/Bathrobes/cotton-terry-bathrobe-500x500.webp', href: '/categories/textiles' },
];

export default function TextilesPage() {
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
            <span className="text-foreground">Textiles</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
            Textiles
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Indulge in our premium collection of soft furnishings and textiles crafted from the finest materials.
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
