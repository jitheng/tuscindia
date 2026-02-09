'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const categoriesData = [
  {
    id: 'furniture',
    name: 'Furniture',
    href: '/categories/furniture',
    subcategories: [
      { name: 'Accent Tables', image: '/categories/furniture/Accent Tables/vertical-shot-modern-table-nice-living-room.jpg', href: '/categories/furniture/accent-tables' },
      { name: 'Chairs', image: '/categories/furniture/Chairs/efren-solid-mango-wood-dining-chair_1.webp', href: '/categories/furniture' },
      { name: 'Mirrors', image: '/categories/furniture/Mirrors /1940-Frenchman-Solid-wood-Hand-Carved-Wall-Mirror-y_600x.webp', href: '/categories/furniture/mirrors' },
      { name: 'Ottomans', image: '/categories/furniture/Ottomans/Flat_Ottoman_Ivory_Wood_Leg.webp', href: '/categories/furniture' },
      { name: 'Storage', image: '/categories/furniture/Storage /Solid-Wood-Multipurpose-Side-Storage-Cabinet-Lakkadhaara-2073805652012.webp', href: '/categories/furniture' },
    ],
  },
  {
    id: 'home-decor',
    name: 'Home Décor',
    href: '/categories/home-decor',
    subcategories: [
      { name: 'Decoratives', image: '/categories/home-decor/Decoratives/decoratives (1).webp', href: '/categories/home-decor/decoratives' },
      { name: 'Candles', image: '/categories/home-decor/Candles/candles (1).webp', href: '/categories/home-decor/candles' },
      { name: 'Candle Holders', image: '/categories/home-decor/Candle Holders/candle holder (1).jpg', href: '/categories/home-decor' },
      { name: 'Vases', image: '/categories/home-decor/Vases/vases (2).webp', href: '/categories/home-decor/vases' },
      { name: 'Baskets', image: '/categories/home-decor/Baskets/baskets (1).webp', href: '/categories/home-decor/baskets' },
      { name: 'Wall Decoratives', image: '/categories/home-decor/Wall Decoratives/wall art  (1).webp', href: '/categories/home-decor' },
      { name: 'Planters', image: '/categories/home-decor/Planters/Planters (2).webp', href: '/categories/home-decor/planters' },
      { name: 'Lighting & Lamps', image: '/categories/home-decor/Lighting Lamps/Lighting & Lamps (1).webp', href: '/categories/home-decor/lighting-lamps' },
      { name: 'Textile Décor', image: '/categories/home-decor/Textile Décors/decor (1).webp', href: '/categories/home-decor' },
    ],
  },
  {
    id: 'kitchen-dining',
    name: 'Kitchen & Dining',
    href: '/categories/kitchen-dining',
    subcategories: [
      { name: 'Dinnerware', image: '/categories/kitchen-dining/Dinnerwares/Dinnerware (1).webp', href: '/categories/kitchen-dining/dinnerware' },
      { name: 'Chopping Boards', image: '/categories/kitchen-dining/Chopping Boards/Tray  (1).webp', href: '/categories/kitchen-dining/chopping-boards' },
      { name: 'Flatware', image: '/categories/kitchen-dining/Flatwares/twig-flatware-5-pc-place-setting__51478.1653632636.1280.1280.webp', href: '/categories/kitchen-dining' },
      { name: 'Trays', image: '/categories/kitchen-dining/Trays/marble-acacia-wood-hex-tray-with-brass-handles-499747.webp', href: '/categories/kitchen-dining' },
      { name: 'Barware', image: '/categories/kitchen-dining/Barwares/Classico_Barware_smaller-min_1c83bdde-f950-4da9-98f9-f92d704a5e0b.webp', href: '/categories/kitchen-dining/barware' },
      { name: 'Cake Stands', image: '/categories/kitchen-dining/Cakestands/acacia-wood-and-marble-cake-stand_2.webp', href: '/categories/kitchen-dining' },
      { name: 'Kitchen Textiles', image: '/categories/kitchen-dining/Kitchen Textiles/decorative-kitchen-towels.png', href: '/categories/kitchen-dining' },
      { name: 'Cookware', image: '/categories/kitchen-dining/Cookwares/terracotta-biryani-handi-500x500.webp', href: '/categories/kitchen-dining' },
      { name: 'Glass, Mugs & Jars', image: '/categories/kitchen-dining/Glass, Mugs, and Jars/copper-mug-round-hammered-with-brass-handle-16-oz-1-piece-product-images-orvpuhoijic-p590628809-1-202108312013.webp', href: '/categories/kitchen-dining' },
    ],
  },
  {
    id: 'textiles',
    name: 'Textiles',
    href: '/categories/textiles',
    subcategories: [
      { name: 'Decorative Cushions', image: '/categories/textiles/Decorative Cushions/bohemian_cotton_cushion_cover.webp', href: '/categories/textiles' },
      { name: 'Bedsheets', image: '/categories/textiles/Bedsheets/sootisyahi-meaningful-minimal-handblock-printed-cotton-bedsheet-163938.jpg', href: '/categories/textiles' },
      { name: 'Quilts & Comforters', image: '/categories/textiles/Quilts & Comforters/velvet-quilt-53--500x500.webp', href: '/categories/textiles' },
      { name: 'Runners', image: '/categories/textiles/Runners/Folk-Art-Braided-Rug-Runner-30x72-762242318878_image2__10992.jpg', href: '/categories/textiles' },
      { name: 'Rugs', image: '/categories/textiles/Rugs/chenille-chinchilla-rug-detail.webp', href: '/categories/textiles' },
      { name: 'Throws', image: '/categories/textiles/Throws/multicolor-handloom-jaipur-cotton-sofa-throw-24-throws-842.webp', href: '/categories/textiles' },
      { name: 'Bathmats', image: '/categories/textiles/Bathmats/linea-bathmat-light-blue-500x500.webp', href: '/categories/textiles' },
      { name: 'Bath Towels', image: '/categories/textiles/Bath towels/terry-velour-towels-400-gsm-75x150-cm-bath-towels.jpg', href: '/categories/textiles' },
      { name: 'Bathrobes', image: '/categories/textiles/Bathrobes/cotton-terry-bathrobe-500x500.webp', href: '/categories/textiles' },
    ],
  },
  {
    id: 'pets',
    name: 'Pets',
    href: '/categories/pets',
    subcategories: [
      { name: 'Beds & Bedding', image: '/categories/pets/Beds and Beddings/Luxury-Cozy-Cave-Dog-Bed-Wag-Collection.jpg', href: '/categories/pets' },
      { name: 'Feeding Bowls', image: '/categories/pets/Feeding Bowls/printed-stainless-steel-dog-bowl-500x500.webp', href: '/categories/pets' },
      { name: 'Toys', image: '/categories/pets/Toys/Dog-Toy-Tennis-Balls.jpg', href: '/categories/pets' },
      { name: 'Clothes', image: '/categories/pets/Clothes/img_9881_1.jpeg', href: '/categories/pets' },
    ],
  },
  {
    id: 'seasonal',
    name: 'Seasonal',
    href: '/categories/seasonal',
    subcategories: [
      { name: 'Ornaments', image: '/categories/seasonal/Ornaments/crackled-mercury-glass-christmas-ornaments-500x500.webp', href: '/categories/seasonal' },
      { name: 'Garlands', image: '/categories/seasonal/Garlands/12-inch-christmas-decorations-wreath-500x500.webp', href: '/categories/seasonal' },
      { name: 'Decoratives', image: '/categories/seasonal/Decoratives/wooden-christmas-tree.jpg', href: '/categories/seasonal' },
      { name: 'Textiles', image: '/categories/seasonal/Textiles/christmas-santa-cushion-cover-theyayacafe-1-jpg.webp', href: '/categories/seasonal' },
      { name: 'Table Decoratives', image: '/categories/seasonal/Table Decoratives/christmas-in-the-country-stoneware-mugs-set-of-4-o.jpg', href: '/categories/seasonal' },
      { name: 'Paper Decoratives', image: '/categories/seasonal/Paper Decoratives/paper-tree-450x513.webp', href: '/categories/seasonal' },
    ],
  },
]

interface CategoriesModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CategoriesModal({ isOpen, onClose }: CategoriesModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('furniture')
  const selected = categoriesData.find(cat => cat.id === selectedCategory)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2 font-medium">Browse</p>
            <h2 className="font-serif text-3xl font-medium">All Categories</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-4 gap-8 p-8">
          {/* Category List */}
          <div className="md:col-span-1">
            <h3 className="text-sm uppercase tracking-[0.2em] font-medium text-muted-foreground mb-4">Categories</h3>
            <div className="space-y-2">
              {categoriesData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-foreground'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Subcategories Grid */}
          <div className="md:col-span-3">
            {selected && (
              <>
                <h3 className="text-2xl font-serif font-medium mb-8">{selected.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {selected.subcategories.map((subcategory) => (
                    <Link
                      key={typeof subcategory === 'string' ? subcategory : subcategory.name}
                      href={typeof subcategory !== 'string' && subcategory.href ? subcategory.href : '#'}
                      className="group overflow-hidden rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer block"
                    >
                      {/* Image */}
                      <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden relative">
                        {typeof subcategory !== 'string' && subcategory.image ? (
                          <img
                            src={subcategory.image || "/placeholder.svg"}
                            alt={subcategory.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                            <span className="text-4xl text-primary/30">📦</span>
                          </div>
                        )}
                      </div>
                      {/* Label */}
                      <div className="p-4 bg-card group-hover:bg-muted/50 transition-colors">
                        <h4 className="font-medium text-center text-sm group-hover:text-primary transition-colors">
                          {typeof subcategory === 'string' ? subcategory : subcategory.name}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border p-6 flex justify-end gap-4">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button>Request Samples</Button>
        </div>
      </div>
    </div>
  )
}
