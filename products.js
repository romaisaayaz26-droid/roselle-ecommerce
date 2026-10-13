/**
 * ROSÉLLE E-Commerce Catalog Data
 * Comprehensive collection of products across 8 categories
 */

const CATEGORIES = [
  {
    id: 'nails',
    name: 'Nails',
    slug: 'nails.html',
    tagline: 'Luxe Lacquers & Nail Care Essentials',
    description: 'Elevate your manicure with gel-effect polishes, nourishing cuticle oils, and salon-quality press-on sets.',
    bannerImg: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80',
    icon: 'bi-magic'
  },
  {
    id: 'clothes',
    name: 'Women Clothes',
    slug: 'clothes.html',
    tagline: 'Effortless Elegance for Everyday',
    description: 'Discover tailored linen suits, flowing silk dresses, cozy cashmeres, and timeless capsule wardrobe essentials.',
    bannerImg: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    icon: 'bi-bag'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories.html',
    tagline: 'The Finishing Touches of Distinction',
    description: 'From handcrafted leather tote bags to silk scarves and UV-protected sunglasses, complete your look with grace.',
    bannerImg: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
    icon: 'bi-gem'
  },
  {
    id: 'sandals',
    name: 'Sandals',
    slug: 'sandals.html',
    tagline: 'Breathable Soles & Chic Silhouette',
    description: 'Step into warmth with soft Italian leather slides, woven raffia mules, and delicate strappy kitten heel sandals.',
    bannerImg: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80',
    icon: 'bi-flower2'
  },
  {
    id: 'shoes',
    name: 'Shoes',
    slug: 'shoes.html',
    tagline: 'Crafted Footwear for Every Occasion',
    description: 'Classic leather loafers, sculpted stilettos, butter-soft ballet flats, and minimalist court sneakers.',
    bannerImg: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80',
    icon: 'bi-boot'
  },
  {
    id: 'makeup',
    name: 'Makeup',
    slug: 'makeup.html',
    tagline: 'Luminous Glow & Weightless Formulas',
    description: 'Clean, skin-nourishing cosmetics featuring velvet matte lipsticks, radiant blushes, and multi-use shimmer pots.',
    bannerImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    icon: 'bi-palette'
  },
  {
    id: 'perfumes',
    name: 'Perfumes',
    slug: 'perfumes.html',
    tagline: 'Captivating Fragrances & Bespoke Mists',
    description: 'Immerse yourself in artisanal eau de parfums crafted with rare floral extracts, warm amber, and white musk notes.',
    bannerImg: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
    icon: 'bi-droplet'
  },
  {
    id: 'watches',
    name: 'Watches',
    slug: 'watches.html',
    tagline: 'Timeless Precision & Modern Design',
    description: 'Exquisite timepieces with mother-of-pearl dials, rose gold mesh straps, and scratch-resistant sapphire glass.',
    bannerImg: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80',
    icon: 'bi-clock'
  }
];

const PRODUCTS = [
  // --- NAILS ---
  {
    id: 'nails-01',
    name: 'Blush Velvet Gel Polish Set',
    category: 'nails',
    categoryName: 'Nails',
    price: 34.00,
    originalPrice: 42.00,
    rating: 4.8,
    reviewsCount: 84,
    isNew: true,
    isBestSeller: true,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A 4-piece long-lasting gel nail lacquer set featuring soft nude tones, sage green glaze, and a glossy top coat. Chip-resistant shine for up to 21 days.',
    specs: {
      'Volume': '12ml per bottle',
      'Finish': 'High Gloss & Gel Effect',
      'Formula': '7-Free, Vegan & Cruelty-Free',
      'Origin': 'Made in France'
    },
    variantsLabel: 'Shade Trio',
    variants: ['Rose Nude & Sage Trio', 'Warm Caramel Edition', 'French Pearl Edit'],
    inStock: true
  },
  {
    id: 'nails-02',
    name: 'Botanical Cuticle Elixir Oil',
    category: 'nails',
    categoryName: 'Nails',
    price: 22.00,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 112,
    isNew: false,
    isBestSeller: true,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Infused with cold-pressed jojoba oil, vitamin E, and sweet almond extract to deeply nourish dehydrated nail beds and cuticles.',
    specs: {
      'Volume': '15ml',
      'Key Ingredients': 'Jojoba, Sweet Almond & Rosehip Oil',
      'Scent': 'Mild White Jasmine',
      'Application': 'Dropper applicator'
    },
    variantsLabel: 'Scent',
    variants: ['White Jasmine', 'Sage & Bergamot', 'Unscented Pure'],
    inStock: true
  },
  {
    id: 'nails-03',
    name: 'Satin Pearl Press-On Mani Kit',
    category: 'nails',
    categoryName: 'Nails',
    price: 26.00,
    originalPrice: 30.00,
    rating: 4.7,
    reviewsCount: 56,
    isNew: true,
    isBestSeller: false,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Reusable salon-grade press-on nails featuring a soft almond shape with glazed donut iridescent shine. Complete with non-damaging adhesive tabs.',
    specs: {
      'Quantity': '24 nails in 12 sizes',
      'Shape': 'Almond Medium',
      'Includes': 'Nail glue, prep pad, file, cuticle stick'
    },
    variantsLabel: 'Length',
    variants: ['Short Almond', 'Medium Almond', 'Square Oval'],
    inStock: true
  },
  {
    id: 'nails-04',
    name: 'Sage Mist Matte Top Coat & Polish',
    category: 'nails',
    categoryName: 'Nails',
    price: 19.00,
    originalPrice: null,
    rating: 4.6,
    reviewsCount: 39,
    isNew: false,
    isBestSeller: false,
    isDeal: false,
    image: 'https://i.pinimg.com/736x/e1/5a/ed/e15aed8dcc3d49636d86786c38977f59.jpg',
    gallery: [
      'https://i.pinimg.com/736x/e1/5a/ed/e15aed8dcc3d49636d86786c38977f59.jpg'
    ],
    description: 'Transform any manicure into a velvety matte finish with single-coat application. Dries in 60 seconds.',
    specs: {
      'Volume': '14ml',
      'Finish': 'Velvet Matte',
      'Drying Time': '60 Seconds'
    },
    variantsLabel: 'Finish',
    variants: ['Velvet Matte', 'High Gloss Mirror', 'Golden Shimmer'],
    inStock: true
  },
  {
    id: 'nails-05',
    name: 'Rose Gold Cuticle Care Tool Kit',
    category: 'nails',
    categoryName: 'Nails',
    price: 28.00,
    originalPrice: 35.00,
    rating: 4.9,
    reviewsCount: 42,
    isNew: false,
    isBestSeller: false,
    isDeal: true,
    image: 'https://i.pinimg.com/736x/df/86/94/df86949d492769d708064a4260693a36.jpg',
    gallery: [
      'https://i.pinimg.com/736x/df/86/94/df86949d492769d708064a4260693a36.jpg'
    ],
    description: 'Precision stainless steel manicure tools plated in matte rose gold. Includes cuticle pusher, nipper, nail glass file, and travel pouch.',
    specs: {
      'Material': 'Medical Grade Stainless Steel',
      'Finish': 'Rose Gold Plated',
      'Pouch': 'Vegan Leather Travel Case'
    },
    variantsLabel: 'Color',
    variants: ['Rose Gold', 'Brushed Gold', 'Silver Chrome'],
    inStock: true
  },

  // --- WOMEN CLOTHES ---
  {
    id: 'clothes-01',
    name: 'Aurelia Linen Trench Coat',
    category: 'clothes',
    categoryName: 'Women Clothes',
    price: 185.00,
    originalPrice: 220.00,
    rating: 4.9,
    reviewsCount: 95,
    isNew: true,
    isBestSeller: true,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Tailored from 100% natural European linen. Features a relaxed double-breasted silhouette, waist belt, and deep storm flaps for year-round elegance.',
    specs: {
      'Fabric': '100% European Linen',
      'Fit': 'Relaxed Oversized',
      'Care': 'Dry Clean Recommended',
      'Origin': 'Designed in Italy'
    },
    variantsLabel: 'Size',
    variants: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'clothes-02',
    name: 'Silk Wrap Midi Dress in Sage',
    category: 'clothes',
    categoryName: 'Women Clothes',
    price: 168.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 68,
    isNew: true,
    isBestSeller: true,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Crafted from pure mulberry silk, this wrap dress drapes gracefully with flutter sleeves and an adjustable waist tie in signature sage green.',
    specs: {
      'Fabric': '100% Mulberry Silk (19 Momme)',
      'Fit': 'True to Size',
      'Neckline': 'V-Neck Wrap'
    },
    variantsLabel: 'Size',
    variants: ['XS', 'S', 'M', 'L'],
    inStock: true
  },
  {
    id: 'clothes-03',
    name: 'Cashmere Blend Cable Knit Sweater',
    category: 'clothes',
    categoryName: 'Women Clothes',
    price: 140.00,
    originalPrice: 175.00,
    rating: 4.9,
    reviewsCount: 140,
    isNew: false,
    isBestSeller: true,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ultra-soft cashmere and fine merino wool blend. Features classic tactile cable knitting, ribbed crew neck, and subtle blush undertones.',
    specs: {
      'Fabric': '70% Merino Wool, 30% Grade-A Cashmere',
      'Fit': 'Classic Fit',
      'Care': 'Hand Wash Cold'
    },
    variantsLabel: 'Size',
    variants: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'clothes-04',
    name: 'Ivory Pleated Wide-Leg Trousers',
    category: 'clothes',
    categoryName: 'Women Clothes',
    price: 110.00,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 52,
    isNew: false,
    isBestSeller: false,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'High-waisted tailored trousers with front pleats and fluid wide legs. Designed to elongate the silhouette with structured sophistication.',
    specs: {
      'Fabric': 'Wool Viscose Blend',
      'Rise': 'High Rise',
      'Inseam': '31 inches'
    },
    variantsLabel: 'Size',
    variants: ['XS', 'S', 'M', 'L'],
    inStock: true
  },
  {
    id: 'clothes-05',
    name: 'Celeste Satin Slip Skirt',
    category: 'clothes',
    categoryName: 'Women Clothes',
    price: 88.00,
    originalPrice: 105.00,
    rating: 4.8,
    reviewsCount: 77,
    isNew: true,
    isBestSeller: false,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Bias-cut satin midi skirt that skims the curves naturally with an elasticized waistband for comfort from day to night.',
    specs: {
      'Fabric': 'Heavyweight Satin',
      'Length': 'Midi (34")',
      'Closure': 'Concealed Side Zipper'
    },
    variantsLabel: 'Color',
    variants: ['Champagne Ivory', 'Sage Green', 'Blush Dust'],
    inStock: true
  },

  // --- ACCESSORIES ---
  {
    id: 'accessories-01',
    name: 'Seraphina Sculptural Leather Tote',
    category: 'accessories',
    categoryName: 'Accessories',
    price: 240.00,
    originalPrice: 290.00,
    rating: 5.0,
    reviewsCount: 89,
    isNew: true,
    isBestSeller: true,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Handcrafted full-grain Italian calfskin tote featuring clean geometric lines, soft suede interior lining, and subtle gold hardware accents.',
    specs: {
      'Material': '100% Italian Calf Leather',
      'Dimensions': '36cm x 28cm x 14cm',
      'Hardware': 'Brushed Gold Plated',
      'Interior': 'Suede lining with laptop compartment'
    },
    variantsLabel: 'Color',
    variants: ['Taupe Beige', 'Sage Moss', 'Warm Espresso'],
    inStock: true
  },
  {
    id: 'accessories-02',
    name: 'Monogram Printed Silk Scarf',
    category: 'accessories',
    categoryName: 'Accessories',
    price: 65.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 44,
    isNew: false,
    isBestSeller: true,
    isDeal: false,
    image: 'https://i.pinimg.com/1200x/60/57/f5/6057f576edea61c30ef4de2217dc4da6.jpg',
    gallery: [
      'https://i.pinimg.com/1200x/60/57/f5/6057f576edea61c30ef4de2217dc4da6.jpg'
    ],
    description: 'Pure silk square scarf adorned with ROSÉLLE signature botanical motif. Wear around the neck, hair, or tied to your handbag handle.',
    specs: {
      'Dimensions': '90cm x 90cm',
      'Fabric': '100% Mulberry Silk Twill',
      'Edges': 'Hand-rolled hem'
    },
    variantsLabel: 'Pattern',
    variants: ['Ivory Botanical', 'Sage Fleur', 'Golden Hour'],
    inStock: true
  },
  {
    id: 'accessories-03',
    name: 'Minimalist Oval UV Sunglasses',
    category: 'accessories',
    categoryName: 'Accessories',
    price: 92.00,
    originalPrice: 115.00,
    rating: 4.7,
    reviewsCount: 63,
    isNew: true,
    isBestSeller: false,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Chic oval acetate frames with 100% UV400 protection tinted lenses. Designed for effortless sunlit elegance.',
    specs: {
      'Frame': 'Handcrafted Acetate',
      'Protection': 'UV400 Category 3',
      'Includes': 'Hard leather case & cleaning cloth'
    },
    variantsLabel: 'Frame Color',
    variants: ['Milky Tortoise', 'Honey Beige', 'Classic Onyx'],
    inStock: true
  },
  {
    id: 'accessories-04',
    name: 'Pearl Accent Leather Waist Belt',
    category: 'accessories',
    categoryName: 'Accessories',
    price: 58.00,
    originalPrice: null,
    rating: 4.6,
    reviewsCount: 31,
    isNew: false,
    isBestSeller: false,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Slim leather belt with a freshwater pearl and gold ring closure. Cinch waistcoats, blazers, and dresses effortlessly.',
    specs: {
      'Width': '2.5cm',
      'Material': 'Genuine Nappa Leather',
      'Accent': 'Natural Pearl & Gold Brass'
    },
    variantsLabel: 'Size',
    variants: ['S (75cm)', 'M (85cm)', 'L (95cm)'],
    inStock: true
  },

  // --- SANDALS ---
  {
    id: 'sandals-01',
    name: 'Sorrento Woven Leather Slide',
    category: 'sandals',
    categoryName: 'Sandals',
    price: 115.00,
    originalPrice: 140.00,
    rating: 4.9,
    reviewsCount: 104,
    isNew: true,
    isBestSeller: true,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Hand-braided leather strap sandal with memory foam cushioned footbed and durable stacked leather heel.',
    specs: {
      'Upper': '100% Calfskin Leather',
      'Sole': 'Leather with rubber heel tap',
      'Heel Height': '1.5cm'
    },
    variantsLabel: 'Shoe Size',
    variants: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
    inStock: true
  },
  {
    id: 'sandals-02',
    name: 'Aria Strappy Kitten Heel Sandal',
    category: 'sandals',
    categoryName: 'Sandals',
    price: 135.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 71,
    isNew: false,
    isBestSeller: true,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Delicate tubular leather straps with square toe bed and architectural 45mm kitten heel for versatile day-to-night styling.',
    specs: {
      'Material': 'Soft Nappa Leather',
      'Heel Height': '4.5cm / 1.8 inches',
      'Closure': 'Adjustable Ankle Strap'
    },
    variantsLabel: 'Shoe Size',
    variants: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
    inStock: true
  },
  {
    id: 'sandals-03',
    name: 'Capri Raffia Wedge Mules',
    category: 'sandals',
    categoryName: 'Sandals',
    price: 128.00,
    originalPrice: 150.00,
    rating: 4.7,
    reviewsCount: 48,
    isNew: true,
    isBestSeller: false,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Natural woven raffia upper atop a comfortable low wedge sole. The quintessential vacation sandal.',
    specs: {
      'Material': 'Natural Sustainable Raffia',
      'Sole': 'Jute & Light Rubber Wedge',
      'Heel Height': '5.0cm'
    },
    variantsLabel: 'Shoe Size',
    variants: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
    inStock: true
  },

  // --- SHOES ---
  {
    id: 'shoes-01',
    name: 'Genevieve Pointed Leather Pumps',
    category: 'shoes',
    categoryName: 'Shoes',
    price: 175.00,
    originalPrice: 210.00,
    rating: 4.9,
    reviewsCount: 118,
    isNew: false,
    isBestSeller: true,
    isDeal: true,
    image: 'https://i.pinimg.com/1200x/1c/9d/44/1c9d44b6e8e1379899a97a0fcf58ed76.jpg',
    gallery: [
      'https://i.pinimg.com/1200x/1c/9d/44/1c9d44b6e8e1379899a97a0fcf58ed76.jpg',
      'https://i.pinimg.com/1200x/1c/9d/44/1c9d44b6e8e1379899a97a0fcf58ed76.jpg'
    ],
    description: 'Timeless pointed-toe pump crafted in buttery taupe leather with cushioned arch support and a slender 75mm heel.',
    specs: {
      'Upper': '100% Spanish Leather',
      'Heel Height': '7.5cm / 3 inches',
      'Lining': 'Breathable Kidskin'
    },
    variantsLabel: 'Shoe Size',
    variants: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
    inStock: true
  },
  {
    id: 'shoes-02',
    name: 'Milanese Horsebit Leather Loafers',
    category: 'shoes',
    categoryName: 'Shoes',
    price: 160.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 82,
    isNew: true,
    isBestSeller: true,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Preppy tailored loafers adorned with vintage gold hardware buckle and collapsible heel counter for dual style option.',
    specs: {
      'Upper': 'Full-Grain Box Calf Leather',
      'Sole': 'Stitched Leather',
      'Style': 'Convertible Loafer / Mule'
    },
    variantsLabel: 'Shoe Size',
    variants: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
    inStock: true
  },
  {
    id: 'shoes-03',
    name: 'Flora Bow Satin Ballet Flats',
    category: 'shoes',
    categoryName: 'Shoes',
    price: 110.00,
    originalPrice: 130.00,
    rating: 4.7,
    reviewsCount: 65,
    isNew: true,
    isBestSeller: false,
    isDeal: true,
    image: 'https://i.pinimg.com/1200x/e3/ea/63/e3ea636ae6918126f2c76c24bcfc0a70.jpg',
    gallery: [
      'https://i.pinimg.com/1200x/e3/ea/63/e3ea636ae6918126f2c76c24bcfc0a70.jpg'
    ],
    description: 'Charming ballet slippers in soft blush satin featuring delicate top drawstring bow tie and flexible leather soles.',
    specs: {
      'Upper': 'Satin with grosgrain trim',
      'Insole': 'Padded Leather Insole',
      'Heel': '0.5cm Flat'
    },
    variantsLabel: 'Shoe Size',
    variants: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
    inStock: true
  },

  // --- MAKEUP ---
  {
    id: 'makeup-01',
    name: 'Velvet Cloud Lip Color in Rose Nude',
    category: 'makeup',
    categoryName: 'Makeup',
    price: 32.00,
    originalPrice: 38.00,
    rating: 4.9,
    reviewsCount: 164,
    isNew: true,
    isBestSeller: true,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A weightless whipped matte lipstick formula that delivers soft-focus color without drying out lips. Enriched with hyaluronic spheres.',
    specs: {
      'Finish': 'Soft Velvet Matte',
      'Key Ingredients': 'Hyaluronic Acid & Rosehip Oil',
      'Weight': '3.8g / 0.13 oz'
    },
    variantsLabel: 'Shade',
    variants: ['Rose Nude', 'Sage Blossom', 'Blush Petal', 'Terracotta Glow'],
    inStock: true
  },
  {
    id: 'makeup-02',
    name: 'Luminous Dew Skin Foundation',
    category: 'makeup',
    categoryName: 'Makeup',
    price: 48.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 120,
    isNew: false,
    isBestSeller: true,
    isDeal: false,
    image: 'https://i.pinimg.com/736x/08/bc/89/08bc89714c672bda59f983edf912c4ac.jpg',
    gallery: [
      'https://i.pinimg.com/736x/08/bc/89/08bc89714c672bda59f983edf912c4ac.jpg'
    ],
    description: 'Serum foundation with medium buildable coverage that hydrates and creates a naturally radiant second-skin finish.',
    specs: {
      'Coverage': 'Medium Buildable',
      'SPF': 'Broad Spectrum SPF 20',
      'Volume': '30ml'
    },
    variantsLabel: 'Shade',
    variants: ['10 Light Ivory', '20 Warm Beige', '30 Honey Gold', '40 Deep Caramel'],
    inStock: true
  },
  {
    id: 'makeup-03',
    name: 'Silk Petal Cream Blush & Lip Balm',
    category: 'makeup',
    categoryName: 'Makeup',
    price: 28.00,
    originalPrice: 34.00,
    rating: 4.9,
    reviewsCount: 92,
    isNew: true,
    isBestSeller: false,
    isDeal: true,
    image: 'https://i.pinimg.com/736x/45/3c/49/453c49c10250ec590339b1e2fa86124a.jpg',
    gallery: [
      'https://i.pinimg.com/736x/45/3c/49/453c49c10250ec590339b1e2fa86124a.jpg'
    ],
    description: 'Multi-use melting cream compact that blends seamlessly into cheeks and lips for a fresh flush of natural blush.',
    specs: {
      'Finish': 'Dewy Flush',
      'Key Ingredients': 'Shea Butter & Squalane',
      'Packaging': 'Refillable Compact with Mirror'
    },
    variantsLabel: 'Shade',
    variants: ['Peach Blossom', 'Dusty Rose', 'Soft Coral'],
    inStock: true
  },
  {
    id: 'makeup-04',
    name: 'Celestial Eyeshadow Quad Palette',
    category: 'makeup',
    categoryName: 'Makeup',
    price: 42.00,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 54,
    isNew: false,
    isBestSeller: false,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Four buttery eyeshadows in matte taupe, shimmering champagne, sage shimmer, and deep cocoa for subtle day or sultry night looks.',
    specs: {
      'Includes': '4 Pigmented Shades',
      'Texture': 'Velvet Powder',
      'Cruelty-Free': 'Yes'
    },
    variantsLabel: 'Palette',
    variants: ['Nude Elegance', 'Sage Sunset', 'Blush Sunset'],
    inStock: true
  },

  // --- PERFUMES ---
  {
    id: 'perfumes-01',
    name: 'Élixir de Rose Eau de Parfum',
    category: 'perfumes',
    categoryName: 'Perfumes',
    price: 145.00,
    originalPrice: 170.00,
    rating: 5.0,
    reviewsCount: 152,
    isNew: true,
    isBestSeller: true,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A romantic floral fragrance blending Grasse Damask rose, pink pepper, and creamy sandalwood enveloped in soft white musk.',
    specs: {
      'Top Notes': 'Pink Pepper, Bergamot',
      'Heart Notes': 'Grasse Damask Rose, Peony',
      'Base Notes': 'White Amber, Sandalwood, Cashmere Wood',
      'Volume': '100ml / 3.4 fl oz'
    },
    variantsLabel: 'Bottle Size',
    variants: ['50ml Spray', '100ml Spray', '15ml Travel Atomizer'],
    inStock: true
  },
  {
    id: 'perfumes-02',
    name: 'Jardin de Sauge Hair & Body Mist',
    category: 'perfumes',
    categoryName: 'Perfumes',
    price: 68.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 79,
    isNew: false,
    isBestSeller: true,
    isDeal: false,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Fresh and herbal mist combining clary sage, sea salt, fig leaf, and clean white tea extracts for weightless hydration and scent.',
    specs: {
      'Key Ingredients': 'Camellia Oil, Sage Extract',
      'Volume': '150ml',
      'Alcohol-Free': 'Yes'
    },
    variantsLabel: 'Volume',
    variants: ['150ml Spray'],
    inStock: true
  },
  {
    id: 'perfumes-03',
    name: 'Ambre Vénitien Nectar Oil',
    category: 'perfumes',
    categoryName: 'Perfumes',
    price: 110.00,
    originalPrice: 135.00,
    rating: 4.9,
    reviewsCount: 46,
    isNew: true,
    isBestSeller: false,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An intimate rollerball perfume oil crafted with concentrated golden amber, Madagascar vanilla bean, and toasted Tonka.',
    specs: {
      'Concentration': 'Pure Perfume Oil',
      'Application': 'Glass Rollerball',
      'Volume': '15ml'
    },
    variantsLabel: 'Edition',
    variants: ['15ml Rollerball'],
    inStock: true
  },

  // --- WATCHES ---
  {
    id: 'watches-01',
    name: 'Intemporelle Rose Gold Mesh Watch',
    category: 'watches',
    categoryName: 'Watches',
    price: 215.00,
    originalPrice: 260.00,
    rating: 5.0,
    reviewsCount: 138,
    isNew: true,
    isBestSeller: true,
    isDeal: true,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ultra-thin 32mm case with mother-of-pearl dial and rose gold stainless steel mesh strap. Water-resistant up to 50 meters.',
    specs: {
      'Case Size': '32mm',
      'Movement': 'Japanese Quartz Movement',
      'Glass': 'Scratch-Resistant Sapphire Crystal',
      'Strap': 'Rose Gold Stainless Steel Mesh (16mm width)'
    },
    variantsLabel: 'Finish',
    variants: ['Rose Gold / Pearl', 'Champagne Gold / Cream', 'Silver / Pearl'],
    inStock: true
  },
  {
    id: 'watches-02',
    name: 'Classique Nude Leather Timepiece',
    category: 'watches',
    categoryName: 'Watches',
    price: 185.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 88,
    isNew: false,
    isBestSeller: true,
    isDeal: false,
    image: 'https://i.pinimg.com/736x/d0/2f/c4/d02fc496a810f1f5d3d7392b37dc0d66.jpg',
    gallery: [
      'https://i.pinimg.com/736x/d0/2f/c4/d02fc496a810f1f5d3d7392b37dc0d66.jpg'
    ],
    description: 'Sleek brushed champagne gold casing with supple Italian nude leather band and minimal Roman numeral hour markers.',
    specs: {
      'Case Diameter': '30mm',
      'Strap': 'Genuine Italian Nappa Leather',
      'Water Resistance': '3 ATM'
    },
    variantsLabel: 'Strap Color',
    variants: ['Nude Taupe', 'Sage Green', 'Classic Black'],
    inStock: true
  },
  {
    id: 'watches-03',
    name: 'Palais Petite Emerald Dial Watch',
    category: 'watches',
    categoryName: 'Watches',
    price: 230.00,
    originalPrice: 275.00,
    rating: 4.9,
    reviewsCount: 51,
    isNew: true,
    isBestSeller: false,
    isDeal: true,
    image: 'https://i.pinimg.com/736x/fe/3d/32/fe3d327173213abe2948f9ab19a8b237.jpg',
    gallery: [
      'https://i.pinimg.com/736x/fe/3d/32/fe3d327173213abe2948f9ab19a8b237.jpg'
    ],
    description: 'Vintage-inspired rectangular gold watch featuring a deep sage emerald sunray dial and polished link bracelet.',
    specs: {
      'Case Shape': 'Rectangular (22mm x 28mm)',
      'Dial': 'Emerald Sunray',
      'Strap': 'Gold Plated Link Bracelet'
    },
    variantsLabel: 'Dial Color',
    variants: ['Sage Emerald', 'Pearl White', 'Onyx Black'],
    inStock: true
  }
];

// Utility functions for catalog
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

function getCategoryInfo(categoryId) {
  return CATEGORIES.find(c => c.id.toLowerCase() === categoryId.toLowerCase());
}

function searchProducts(query) {
  if (!query) return PRODUCTS;
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.categoryName.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
}
