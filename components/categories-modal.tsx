'use client'

import { useState } from 'react'
import { X, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface Subcategory {
  name: string
  image: string
  images: string[]
}

interface Category {
  id: string
  name: string
  subcategories: Subcategory[]
}

const categoriesData: Category[] = [
  {
    id: 'furniture',
    name: 'Furniture',
    subcategories: [
      {
        name: 'Accent Tables',
        image: '/categories/furniture/Accent Tables/vertical-shot-modern-table-nice-living-room.jpg',
        images: [
          '/categories/furniture/Accent Tables/vertical-shot-modern-table-nice-living-room.jpg',
          '/categories/furniture/Accent Tables/room-chair-antique-old-retro.jpg',
          '/categories/furniture/Accent Tables/ChatGPT Image Jan 19, 2026, 07_56_51 PM.png',
          '/categories/furniture/Accent Tables/ChatGPT Image Jan 19, 2026, 08_01_37 PM.png',
          '/categories/furniture/Accent Tables/ChatGPT Image Jan 19, 2026, 08_05_07 PM.png',
          '/categories/furniture/Accent Tables/ChatGPT Image Jan 19, 2026, 08_07_14 PM.png',
        ],
      },
      {
        name: 'Chairs',
        image: '/categories/furniture/Chairs/efren-solid-mango-wood-dining-chair_1.webp',
        images: [
          '/categories/furniture/Chairs/efren-solid-mango-wood-dining-chair_1.webp',
          '/categories/furniture/Chairs/bar-chair-ndibc36-500x500.webp',
          '/categories/furniture/Chairs/Office-Chair-4-WM.webp',
          '/categories/furniture/Chairs/9f30cab1-f9e2-5421-aaf8-b8f2f93bd3bc.jpg',
          '/categories/furniture/Chairs/9f30cab1-f9e2-5421-aaf8-b8f2f93bd3bc (1).jpg',
        ],
      },
      {
        name: 'Mirrors',
        image: '/categories/furniture/Mirrors /1940-Frenchman-Solid-wood-Hand-Carved-Wall-Mirror-y_600x.webp',
        images: [
          '/categories/furniture/Mirrors /1940-Frenchman-Solid-wood-Hand-Carved-Wall-Mirror-y_600x.webp',
          '/categories/furniture/Mirrors /1 (1).jpg',
          '/categories/furniture/Mirrors /beautiful-designer-rectangle-vanity-mirror-2228391177-w47nq9gk.avif',
          '/categories/furniture/Mirrors /il_570xN.3795303153_ob8r.webp',
          '/categories/furniture/Mirrors /MWCM109.jpg',
          '/categories/furniture/Mirrors /product_images_sequence_bulk_LLeOAV9.jpeg',
        ],
      },
      {
        name: 'Ottomans',
        image: '/categories/furniture/Ottomans/Flat_Ottoman_Ivory_Wood_Leg.webp',
        images: [
          '/categories/furniture/Ottomans/Flat_Ottoman_Ivory_Wood_Leg.webp',
          '/categories/furniture/Ottomans/91d6kku-mvl-sl1500-500x500.webp',
          '/categories/furniture/Ottomans/sleepy-head_ottoman_blue_1.webp',
        ],
      },
      {
        name: 'Storage',
        image: '/categories/furniture/Storage /Solid-Wood-Multipurpose-Side-Storage-Cabinet-Lakkadhaara-2073805652012.webp',
        images: [
          '/categories/furniture/Storage /Solid-Wood-Multipurpose-Side-Storage-Cabinet-Lakkadhaara-2073805652012.webp',
          '/categories/furniture/Storage /581051_1.jpg',
          '/categories/furniture/Storage /FUR.CAB.32126034_1678169931810.webp',
          '/categories/furniture/Storage /new-product-500x500 (2).webp',
        ],
      },
    ],
  },
  {
    id: 'home-decor',
    name: 'Home Décor',
    subcategories: [
      {
        name: 'Decoratives',
        image: '/categories/home-decor/Decoratives/decoratives (1).webp',
        images: [
          '/categories/home-decor/Decoratives/decoratives (1).webp',
          '/categories/home-decor/Decoratives/decoratives (2).jpg',
          '/categories/home-decor/Decoratives/decoratives (3).jpg',
          '/categories/home-decor/Decoratives/decoratives (4).jpg',
          '/categories/home-decor/Decoratives/decoratives (5).jpg',
        ],
      },
      {
        name: 'Candles',
        image: '/categories/home-decor/Candles/candles (1).webp',
        images: [
          '/categories/home-decor/Candles/candles (1).webp',
          '/categories/home-decor/Candles/candles (2).webp',
          '/categories/home-decor/Candles/candles (1).jpg',
          '/categories/home-decor/Candles/candles (1).png',
          '/categories/home-decor/Candles/candles (2).png',
        ],
      },
      {
        name: 'Candle Holders',
        image: '/categories/home-decor/Candles/candles (1).webp',
        images: [
          '/categories/home-decor/Candles/candles (1).webp',
          '/categories/home-decor/Candles/candles (2).webp',
          '/categories/home-decor/Candles/candles (1).jpg',
        ],
      },
      {
        name: 'Vases',
        image: '/categories/home-decor/Vases/vases (2).webp',
        images: [
          '/categories/home-decor/Vases/vases (2).webp',
          '/categories/home-decor/Vases/vases (1).avif',
          '/categories/home-decor/Vases/vases (1).jpg',
          '/categories/home-decor/Vases/vases (2).avif',
          '/categories/home-decor/Vases/vases (2).jpg',
        ],
      },
      {
        name: 'Baskets',
        image: '/categories/home-decor/Baskets/baskets (1).webp',
        images: [
          '/categories/home-decor/Baskets/baskets (1).webp',
          '/categories/home-decor/Baskets/baskets (2).webp',
          '/categories/home-decor/Baskets/baskets (3).webp',
          '/categories/home-decor/Baskets/baskets (4).webp',
        ],
      },
      {
        name: 'Wall Decoratives',
        image: '/categories/home-decor/Wall Decoratives/wall art  (1).webp',
        images: [
          '/categories/home-decor/Wall Decoratives/wall art  (1).webp',
          '/categories/home-decor/Wall Decoratives/wall art  (1).avif',
          '/categories/home-decor/Wall Decoratives/wall art  (1).jpg',
          '/categories/home-decor/Wall Decoratives/wall art  (1).png',
          '/categories/home-decor/Wall Decoratives/wall art  (2).avif',
        ],
      },
      {
        name: 'Planters',
        image: '/categories/home-decor/Planters/Planters (2).webp',
        images: [
          '/categories/home-decor/Planters/Planters (2).webp',
          '/categories/home-decor/Planters/Planters (1).jpg',
          '/categories/home-decor/Planters/Planters (2).jpg',
          '/categories/home-decor/Planters/Planters (3).webp',
          '/categories/home-decor/Planters/Planters (4).webp',
        ],
      },
      {
        name: 'Lighting & Lamps',
        image: '/categories/home-decor/Lighting Lamps/Lighting & Lamps (1).webp',
        images: [
          '/categories/home-decor/Lighting Lamps/Lighting & Lamps (1).webp',
          '/categories/home-decor/Lighting Lamps/Lighting & Lamps (1).avif',
          '/categories/home-decor/Lighting Lamps/Lighting & Lamps (1).jpg',
          '/categories/home-decor/Lighting Lamps/Lighting & Lamps (2).avif',
        ],
      },
      {
        name: 'Textile Décor',
        image: '/categories/home-decor/Textile Décors/decor (1).webp',
        images: [
          '/categories/home-decor/Textile Décors/decor (1).webp',
          '/categories/home-decor/Textile Décors/decor (1).jpeg',
          '/categories/home-decor/Textile Décors/decor (1).jpg',
          '/categories/home-decor/Textile Décors/decor (2).jpg',
          '/categories/home-decor/Textile Décors/decor.jpg',
        ],
      },
    ],
  },
  {
    id: 'kitchen-dining',
    name: 'Kitchen & Dining',
    subcategories: [
      {
        name: 'Dinnerware',
        image: '/categories/kitchen-dining/Dinnerwares/Dinnerware (1).webp',
        images: [
          '/categories/kitchen-dining/Dinnerwares/Dinnerware (1).webp',
          '/categories/kitchen-dining/Dinnerwares/Dinnerware (2).webp',
          '/categories/kitchen-dining/Dinnerwares/Dinnerware (3).webp',
          '/categories/kitchen-dining/Dinnerwares/Dinnerware (4).webp',
          '/categories/kitchen-dining/Dinnerwares/Dinnerware (5).webp',
        ],
      },
      {
        name: 'Chopping Boards',
        image: '/categories/kitchen-dining/Chopping Boards/Tray  (1).webp',
        images: [
          '/categories/kitchen-dining/Chopping Boards/Tray  (1).webp',
          '/categories/kitchen-dining/Chopping Boards/Tray  (1).jpg',
          '/categories/kitchen-dining/Chopping Boards/Tray  (2).webp',
          '/categories/kitchen-dining/Chopping Boards/Tray  (3).webp',
        ],
      },
      {
        name: 'Flatware',
        image: '/categories/kitchen-dining/Flatwares/twig-flatware-5-pc-place-setting__51478.1653632636.1280.1280.webp',
        images: [
          '/categories/kitchen-dining/Flatwares/twig-flatware-5-pc-place-setting__51478.1653632636.1280.1280.webp',
          '/categories/kitchen-dining/Flatwares/Mahalya+Salad+Servers.webp',
          '/categories/kitchen-dining/Flatwares/blackshear-matte-brushed-gold-black-long-handle-contemporary-flatware-cutlery-set.jpg',
          '/categories/kitchen-dining/Flatwares/H4072e3d5d6fe4d87a42da7739dcbc99f3.jpg',
          '/categories/kitchen-dining/Flatwares/3ac8744d394eecd0697df7a12801e0458e117f64-3996x4000.jpg',
          '/categories/kitchen-dining/Flatwares/UTB8djbPptnJXKJkSaiyq6AhwXXak.jpg',
        ],
      },
      {
        name: 'Trays',
        image: '/categories/kitchen-dining/Trays/marble-acacia-wood-hex-tray-with-brass-handles-499747.webp',
        images: [
          '/categories/kitchen-dining/Trays/marble-acacia-wood-hex-tray-with-brass-handles-499747.webp',
          '/categories/kitchen-dining/Trays/9563343d9896832ae27b04124db6c8a6_1024x1024.webp',
          '/categories/kitchen-dining/Trays/product-jpeg-500x500.webp',
          '/categories/kitchen-dining/Trays/Tray  (2).webp',
          '/categories/kitchen-dining/Trays/TRAY_RR22-WH.NATURAL-beauty_960x.webp',
        ],
      },
      {
        name: 'Barware',
        image: '/categories/kitchen-dining/Barwares/Classico_Barware_smaller-min_1c83bdde-f950-4da9-98f9-f92d704a5e0b.webp',
        images: [
          '/categories/kitchen-dining/Barwares/Classico_Barware_smaller-min_1c83bdde-f950-4da9-98f9-f92d704a5e0b.webp',
          '/categories/kitchen-dining/Barwares/AMLCS062419_1.webp',
          '/categories/kitchen-dining/Barwares/Untitled-design-44.webp',
        ],
      },
      {
        name: 'Cake Stands',
        image: '/categories/kitchen-dining/Cakestands/acacia-wood-and-marble-cake-stand_2.webp',
        images: [
          '/categories/kitchen-dining/Cakestands/acacia-wood-and-marble-cake-stand_2.webp',
          '/categories/kitchen-dining/Cakestands/172AEH9900035_6.jpg',
          '/categories/kitchen-dining/Cakestands/buy-cake-stand-marble-and-wooden-2-tier-cake-stand-for-home-or-party-by-orange-tree-on-ikiru-online-store-2.webp',
          '/categories/kitchen-dining/Cakestands/laurie-gates-cake-stands-tiered-cake-stands-985119094m-31_600.avif',
        ],
      },
      {
        name: 'Kitchen Textiles',
        image: '/categories/kitchen-dining/Kitchen Textiles/decorative-kitchen-towels.png',
        images: [
          '/categories/kitchen-dining/Kitchen Textiles/decorative-kitchen-towels.png',
          '/categories/kitchen-dining/Kitchen Textiles/_LS_Web_Priscilla_Oven-Glove-Apron-Talent-04_SI.jpg',
          '/categories/kitchen-dining/Kitchen Textiles/ChardonnayBahamas22-161_969a826f-9c68-4221-8cb1-7bbb4b0a7465-599911.webp',
          '/categories/kitchen-dining/Kitchen Textiles/Holiday_checks_tablerunner__napkins_combo_2.jpg',
          '/categories/kitchen-dining/Kitchen Textiles/Tablecloth_textura_red_with_tablemats__napkins_combo_1.jpg',
        ],
      },
      {
        name: 'Cookware',
        image: '/categories/kitchen-dining/Cookwares/terracotta-biryani-handi-500x500.webp',
        images: [
          '/categories/kitchen-dining/Cookwares/terracotta-biryani-handi-500x500.webp',
          '/categories/kitchen-dining/Cookwares/brass-kadhai-with-lid-161315.webp',
          '/categories/kitchen-dining/Cookwares/img-20200930-wa0033-500x500.webp',
          '/categories/kitchen-dining/Cookwares/Main_20.webp',
        ],
      },
      {
        name: 'Glass, Mugs & Jars',
        image: '/categories/kitchen-dining/Glass, Mugs, and Jars/copper-mug-round-hammered-with-brass-handle-16-oz-1-piece-product-images-orvpuhoijic-p590628809-1-202108312013.webp',
        images: [
          '/categories/kitchen-dining/Glass, Mugs, and Jars/copper-mug-round-hammered-with-brass-handle-16-oz-1-piece-product-images-orvpuhoijic-p590628809-1-202108312013.webp',
          '/categories/kitchen-dining/Glass, Mugs, and Jars/copper_tumbler_0.webp',
          '/categories/kitchen-dining/Glass, Mugs, and Jars/copper-curved-water-tumbler-zishta-traditional-serveware.webp',
          '/categories/kitchen-dining/Glass, Mugs, and Jars/Copper-Water-Jug-and-Tumbler-Set-of-1-copper-jug-and-4-copper-glasses-Zishta-6203.jpg',
          '/categories/kitchen-dining/Glass, Mugs, and Jars/1601667665_0340_0340.jpg',
          '/categories/kitchen-dining/Glass, Mugs, and Jars/empty-glass-jar-mockup-rustic-wooden-table-simple-design-branding-potential-free-photo.jpg',
        ],
      },
    ],
  },
  {
    id: 'textiles',
    name: 'Textiles',
    subcategories: [
      {
        name: 'Decorative Cushions',
        image: '/categories/textiles/Decorative Cushions/bohemian_cotton_cushion_cover.webp',
        images: [
          '/categories/textiles/Decorative Cushions/bohemian_cotton_cushion_cover.webp',
          '/categories/textiles/Decorative Cushions/4acce39c-498e-4485-bb11-de1c130c3a3b-500x500.webp',
          '/categories/textiles/Decorative Cushions/EH-CC-16-202379.webp',
          '/categories/textiles/Decorative Cushions/hla483-rubocondo.jpg',
          '/categories/textiles/Decorative Cushions/il_570xN.5279724688_6n54.webp',
        ],
      },
      {
        name: 'Bedsheets',
        image: '/categories/textiles/Bedsheets/sootisyahi-meaningful-minimal-handblock-printed-cotton-bedsheet-163938.jpg',
        images: [
          '/categories/textiles/Bedsheets/sootisyahi-meaningful-minimal-handblock-printed-cotton-bedsheet-163938.jpg',
          '/categories/textiles/Bedsheets/400-thread-count-cotton-king-size-bed-sheet-500x500.webp',
          '/categories/textiles/Bedsheets/41-500x500.webp',
          '/categories/textiles/Bedsheets/dt0014-1-500x500.webp',
          '/categories/textiles/Bedsheets/king-size-cotton-bedsheet-niravana-500x500.webp',
          '/categories/textiles/Bedsheets/phacd-0011-500x500.webp',
        ],
      },
      {
        name: 'Quilts & Comforters',
        image: '/categories/textiles/Quilts & Comforters/velvet-quilt-53--500x500.webp',
        images: [
          '/categories/textiles/Quilts & Comforters/velvet-quilt-53--500x500.webp',
          '/categories/textiles/Quilts & Comforters/8904427467250_1.webp',
          '/categories/textiles/Quilts & Comforters/il_570xN.7158171929_6454.webp',
          '/categories/textiles/Quilts & Comforters/product-jpeg-500x500 (1).webp',
          '/categories/textiles/Quilts & Comforters/zoo_animals_nursery_print_quilt_for_toddlers_in_pure_cotton_with_giraffe_lion_elephant_made_in_India_for_USA_gifting.webp',
        ],
      },
      {
        name: 'Runners',
        image: '/categories/textiles/Runners/Folk-Art-Braided-Rug-Runner-30x72-762242318878_image2__10992.jpg',
        images: [
          '/categories/textiles/Runners/Folk-Art-Braided-Rug-Runner-30x72-762242318878_image2__10992.jpg',
          '/categories/textiles/Runners/AJ07-002_Aqua.jpg',
          '/categories/textiles/Runners/Rugs-81325-detailed-image-1-04.jpg',
        ],
      },
      {
        name: 'Rugs',
        image: '/categories/textiles/Rugs/chenille-chinchilla-rug-detail.webp',
        images: [
          '/categories/textiles/Rugs/chenille-chinchilla-rug-detail.webp',
          '/categories/textiles/Rugs/cotton-mat-500x500.webp',
          '/categories/textiles/Rugs/multi-color-cotton-braided-rug-500x500.webp',
          '/categories/textiles/Rugs/new-product-500x500.webp',
        ],
      },
      {
        name: 'Throws',
        image: '/categories/textiles/Throws/multicolor-handloom-jaipur-cotton-sofa-throw-24-throws-842.webp',
        images: [
          '/categories/textiles/Throws/multicolor-handloom-jaipur-cotton-sofa-throw-24-throws-842.webp',
          '/categories/textiles/Throws/broken-rib-blanket-candlelight-1-1200.jpg',
          '/categories/textiles/Throws/il_340x270.7438492520_chvi.webp',
          '/categories/textiles/Throws/il_570xN.5553055024_28f3.webp',
          '/categories/textiles/Throws/tharow-1010-3--500x500.webp',
          '/categories/textiles/Throws/tufted-handloomed-cotton-throw-in-solids-for-decor-500x500.webp',
        ],
      },
      {
        name: 'Bathmats',
        image: '/categories/textiles/Bathmats/linea-bathmat-light-blue-500x500.webp',
        images: [
          '/categories/textiles/Bathmats/linea-bathmat-light-blue-500x500.webp',
          '/categories/textiles/Bathmats/2-500x500.webp',
          '/categories/textiles/Bathmats/bath-mat.jpg',
          '/categories/textiles/Bathmats/bathroom-shower-mat-500x500.webp',
          '/categories/textiles/Bathmats/prod-image-500x500.webp',
          '/categories/textiles/Bathmats/SA340_2.webp',
        ],
      },
      {
        name: 'Bath Towels',
        image: '/categories/textiles/Bath towels/terry-velour-towels-400-gsm-75x150-cm-bath-towels.jpg',
        images: [
          '/categories/textiles/Bath towels/terry-velour-towels-400-gsm-75x150-cm-bath-towels.jpg',
          '/categories/textiles/Bath towels/product-jpeg (1).jpg',
        ],
      },
      {
        name: 'Bathrobes',
        image: '/categories/textiles/Bathrobes/cotton-terry-bathrobe-500x500.webp',
        images: [
          '/categories/textiles/Bathrobes/cotton-terry-bathrobe-500x500.webp',
          '/categories/textiles/Bathrobes/bathrobes-clothes-hang-shelf-fashion-boutique-designer-store-earthy-soft-pastel-colors-modern-home-bath-wear-collection-217835557.webp',
          '/categories/textiles/Bathrobes/close-up-vertical-photo-clean-bathrobe-wooden-hanger-bathroom-there-towels-shelf-equipment-spa-high-level-308237801.webp',
          '/categories/textiles/Bathrobes/compressjpeg-online-img-2025-06-12t162817-575-500x500.webp',
          '/categories/textiles/Bathrobes/m_6361a01a02760be235022288.jpg',
          '/categories/textiles/Bathrobes/white-robe-hanging-on-glass-600nw-2621670241.webp',
        ],
      },
    ],
  },
  {
    id: 'pets',
    name: 'Pets',
    subcategories: [
      {
        name: 'Beds & Bedding',
        image: '/categories/pets/Beds and Beddings/Luxury-Cozy-Cave-Dog-Bed-Wag-Collection.jpg',
        images: [
          '/categories/pets/Beds and Beddings/Luxury-Cozy-Cave-Dog-Bed-Wag-Collection.jpg',
          '/categories/pets/Beds and Beddings/6c3efa4e-19ef-5eb4-8b85-2affe704f860.jpg',
          '/categories/pets/Beds and Beddings/71d8+MUwyuL.jpg',
          '/categories/pets/Beds and Beddings/beige-dog-beds-sofapet-37bei-e1_600.avif',
          '/categories/pets/Beds and Beddings/dsc-0188-3a5dce37-240e-480b-b024-d94a23f8801f-500x500.webp',
        ],
      },
      {
        name: 'Feeding Bowls',
        image: '/categories/pets/Feeding Bowls/printed-stainless-steel-dog-bowl-500x500.webp',
        images: [
          '/categories/pets/Feeding Bowls/printed-stainless-steel-dog-bowl-500x500.webp',
          '/categories/pets/Feeding Bowls/d392484fa7651f7a521b11125cc41a33.jpg',
          '/categories/pets/Feeding Bowls/H09e35e95c8294bc6a4fc9c2d69dc852fd.avif',
          '/categories/pets/Feeding Bowls/Quality-Plastic-Metal-Hanging-Feeder-Round-Pet-Bowls.avif',
        ],
      },
      {
        name: 'Toys',
        image: '/categories/pets/Toys/Dog-Toy-Tennis-Balls.jpg',
        images: [
          '/categories/pets/Toys/Dog-Toy-Tennis-Balls.jpg',
          '/categories/pets/Toys/04_8eb40f27-b5fc-410b-bdf6-ef82016ba970.webp',
          '/categories/pets/Toys/Factory-Wholesale-Pet-Products-Donkey-Dog-Toys-Shape-Plush-Dog-Toy.avif',
          '/categories/pets/Toys/H5b08de1b705e4e8aa4e42156d7d973a9H.avif',
        ],
      },
      {
        name: 'Clothes',
        image: '/categories/pets/Clothes/img_9881_1.jpeg',
        images: [
          '/categories/pets/Clothes/img_9881_1.jpeg',
          '/categories/pets/Clothes/2023-Wholesale-Pet-Accessories-Leather-Pet-Collar-Rivet-Dog-Collar.avif',
          '/categories/pets/Clothes/7abdb6e7-b5e0-55ce-97fd-96382181cfa4.jpg',
          '/categories/pets/Clothes/Hcf99ff9e9c0e43b996d3940fed9a587fw.avif',
        ],
      },
    ],
  },
  {
    id: 'seasonal',
    name: 'Seasonal',
    subcategories: [
      {
        name: 'Ornaments',
        image: '/categories/seasonal/Ornaments/crackled-mercury-glass-christmas-ornaments-500x500.webp',
        images: [
          '/categories/seasonal/Ornaments/crackled-mercury-glass-christmas-ornaments-500x500.webp',
          '/categories/seasonal/Ornaments/christmas-decoration-ornaments-250x250.webp',
          '/categories/seasonal/Ornaments/ChristmasBaublesFeltCraftKit2FRONT-hawthornhanmdae.webp',
          '/categories/seasonal/Ornaments/IMG_1381_de9f5d0e-4b90-41c6-a970-e619ec9aa870.webp',
          '/categories/seasonal/Ornaments/ORN-S23021-4inGlassClear.webp',
          '/categories/seasonal/Ornaments/product-jpeg-500x500 (2).webp',
        ],
      },
      {
        name: 'Garlands',
        image: '/categories/seasonal/Garlands/12-inch-christmas-decorations-wreath-500x500.webp',
        images: [
          '/categories/seasonal/Garlands/12-inch-christmas-decorations-wreath-500x500.webp',
          '/categories/seasonal/Garlands/DSCF4345.webp',
          '/categories/seasonal/Garlands/new-product-500x500 (1).webp',
          '/categories/seasonal/Garlands/s2b11cf82ca3548948afb5039d75d830an-500x500.webp',
        ],
      },
      {
        name: 'Decoratives',
        image: '/categories/seasonal/Decoratives/wooden-christmas-tree.jpg',
        images: [
          '/categories/seasonal/Decoratives/wooden-christmas-tree.jpg',
          '/categories/seasonal/Decoratives/1.jpg',
          '/categories/seasonal/Decoratives/mdf-cutout-500x500.webp',
          '/categories/seasonal/Decoratives/product-jpeg.jpg',
          '/categories/seasonal/Decoratives/wood-christmas-tree-table-decor-2-piece-set.jpg',
        ],
      },
      {
        name: 'Textiles',
        image: '/categories/seasonal/Textiles/christmas-santa-cushion-cover-theyayacafe-1-jpg.webp',
        images: [
          '/categories/seasonal/Textiles/christmas-santa-cushion-cover-theyayacafe-1-jpg.webp',
          '/categories/seasonal/Textiles/738215549921_60.jpg',
          '/categories/seasonal/Textiles/755471_20.webp',
          '/categories/seasonal/Textiles/91PSSwefJBL.jpg',
          '/categories/seasonal/Textiles/c7562025-858a-52f9-9b87-56d12b452965.jpg',
          '/categories/seasonal/Textiles/White-Christmas-7-Piece-Holiday-Comforter-Set.webp',
        ],
      },
      {
        name: 'Table Decoratives',
        image: '/categories/seasonal/Table Decoratives/christmas-in-the-country-stoneware-mugs-set-of-4-o.jpg',
        images: [
          '/categories/seasonal/Table Decoratives/christmas-in-the-country-stoneware-mugs-set-of-4-o.jpg',
          '/categories/seasonal/Table Decoratives/PORTMEIRION-Christmas-Tree-Set-4-Piatti-Frutta-3.jpg',
          '/categories/seasonal/Table Decoratives/s-l1200.jpg',
          '/categories/seasonal/Table Decoratives/vintage-spode-christmas-tree-dinnerware-set-of-65-8707.webp',
        ],
      },
      {
        name: 'Paper Decoratives',
        image: '/categories/seasonal/Paper Decoratives/paper-tree-450x513.webp',
        images: [
          '/categories/seasonal/Paper Decoratives/paper-tree-450x513.webp',
          '/categories/seasonal/Paper Decoratives/il_570xN.4395022323_7wa8.webp',
          '/categories/seasonal/Paper Decoratives/thanksgiving-decor-hbx010116holiday07-1562777093.avif',
        ],
      },
    ],
  },
]

interface CategoriesModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CategoriesModal({ isOpen, onClose }: CategoriesModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('furniture')
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)

  const selected = categoriesData.find(cat => cat.id === selectedCategory)
  const selectedSub = selected?.subcategories.find(s => s.name === selectedSubcategory)

  const handleCategoryChange = (id: string) => {
    setSelectedCategory(id)
    setSelectedSubcategory(null)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background border-b border-border p-6 flex items-center justify-between">
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
                  onClick={() => handleCategoryChange(category.id)}
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

          {/* Subcategories Grid or Image Gallery */}
          <div className="md:col-span-3">
            {selectedSub ? (
              /* Image Gallery View */
              <>
                {/* Breadcrumb + Back */}
                <div className="flex items-center gap-2 mb-6">
                  <button
                    onClick={() => setSelectedSubcategory(null)}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {selected?.name}
                  </button>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-sm font-medium">{selectedSub.name}</span>
                </div>

                <h3 className="text-2xl font-serif font-medium mb-8">{selectedSub.name}</h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedSub.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-full aspect-square bg-muted overflow-hidden">
                        <img
                          src={img}
                          alt={`${selectedSub.name} ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              /* Subcategory Grid View */
              selected && (
                <>
                  <h3 className="text-2xl font-serif font-medium mb-8">{selected.name}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {selected.subcategories.map((subcategory) => (
                      <div
                        key={subcategory.name}
                        onClick={() => setSelectedSubcategory(subcategory.name)}
                        className="group overflow-hidden rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                      >
                        {/* Image */}
                        <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden relative">
                          <img
                            src={subcategory.image}
                            alt={subcategory.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        {/* Label */}
                        <div className="p-4 bg-card group-hover:bg-muted/50 transition-colors">
                          <h4 className="font-medium text-center text-sm group-hover:text-primary transition-colors">
                            {subcategory.name}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border p-6 flex justify-end gap-4">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button asChild>
            <Link href="#contact" onClick={onClose}>Request Samples</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
