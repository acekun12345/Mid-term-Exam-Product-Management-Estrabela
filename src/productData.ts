import type { Product } from './types';
export const initialProducts: Product[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    name: 'Wireless Noise-Canceling Headphones',
    category: 'Electronics',
    description: 'High-fidelity audio with active noise cancellation.',
    specification: 'Bluetooth 5.2, USB-C Fast Charge, 30hr Battery',
    rating: 5,
    price: 4999,
    quantity: 3,
    isFeatured: true
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    name: 'Smart Fitness Watch',
    category: 'Electronics',
    description: 'Track your heart rate, sleep, and daily workouts.',
    specification: 'Water resistant 50m, AMOLED Display',
    rating: 4,
    price: 2499,
    quantity: 8,
    isFeatured: true
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    name: 'Pro Running Shoes',
    category: 'Apparel',
    description: 'Lightweight breathable running shoes.',
    specification: 'Mesh Upper, Foam Cushioning, Rubber Sole',
    rating: 5,
    price: 3200,
    quantity: 2,
    isFeatured: true
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
    name: 'Leather Everyday Backpack',
    category: 'Accessories',
    description: 'Durable premium backpack for work and travel.',
    specification: 'Fits 15-inch Laptop, Water Resistant',
    rating: 4,
    price: 1850,
    quantity: 12,
    isFeatured: false
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
    name: 'Aurora Smartphone',
    category: 'Electronics',
    description: 'A responsive everyday smartphone with a vivid display and versatile camera.',
    specification: '6.5-inch OLED, 128GB storage, 5G connectivity',
    rating: 5,
    price: 18999,
    quantity: 14,
    isFeatured: true
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    name: 'Studio Wireless Headset',
    category: 'Electronics',
    description: 'Comfortable over-ear headphones for focused listening at home or on the go.',
    specification: 'Bluetooth 5.2, 32-hour battery, foldable design',
    rating: 4,
    price: 3590,
    quantity: 11,
    isFeatured: false
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80',
    name: 'Ultra HD Desktop Monitor',
    category: 'Electronics',
    description: 'A crisp, spacious display for productive work and detailed creative projects.',
    specification: '27-inch 4K UHD, IPS panel, adjustable stand',
    rating: 5,
    price: 14990,
    quantity: 6,
    isFeatured: true
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80',
    name: 'Portable Bluetooth Speaker',
    category: 'Electronics',
    description: 'Take clear, room-filling sound to the beach, park, or your next get-together.',
    specification: '12-hour playback, Bluetooth 5.0, splash resistant',
    rating: 4,
    price: 2290,
    quantity: 19,
    isFeatured: false
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80',
    name: 'Everyday Laptop',
    category: 'Electronics',
    description: 'A lightweight laptop ready for work, study, and everyday browsing.',
    specification: '14-inch display, 16GB memory, 512GB SSD',
    rating: 5,
    price: 32990,
    quantity: 5,
    isFeatured: true
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    name: 'Essential Cotton T-Shirt',
    category: 'Apparel',
    description: 'A soft, easy-to-style cotton tee made for comfortable everyday wear.',
    specification: '100% cotton, relaxed fit, available in multiple sizes',
    rating: 5,
    price: 590,
    quantity: 32,
    isFeatured: true
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
    name: 'Classic Denim Jeans',
    category: 'Apparel',
    description: 'Versatile denim jeans with a timeless cut for casual everyday outfits.',
    specification: 'Cotton denim, straight-leg fit, five-pocket design',
    rating: 4,
    price: 1790,
    quantity: 18,
    isFeatured: false
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
    name: 'Lightweight Everyday Jacket',
    category: 'Apparel',
    description: 'An easy layer for breezy commutes and cool evenings.',
    specification: 'Water-resistant shell, zip pockets, unisex fit',
    rating: 4,
    price: 2490,
    quantity: 9,
    isFeatured: true
  },
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80',
    name: 'Soft Knit Sweater',
    category: 'Apparel',
    description: 'A cozy, versatile knit that layers comfortably through cooler days.',
    specification: 'Cotton-blend knit, ribbed cuffs, regular fit',
    rating: 5,
    price: 1590,
    quantity: 13,
    isFeatured: false
  },
  {
    id: 14,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80',
    name: 'Relaxed Summer Dress',
    category: 'Apparel',
    description: 'A breezy, lightweight dress for warm days and weekend plans.',
    specification: 'Breathable woven fabric, relaxed fit, knee length',
    rating: 4,
    price: 1890,
    quantity: 7,
    isFeatured: true
  },
  {
    id: 15,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    name: 'City Crossbody Bag',
    category: 'Accessories',
    description: 'A compact hands-free bag for carrying daily essentials around town.',
    specification: 'Adjustable strap, zip closure, interior organizer pocket',
    rating: 5,
    price: 1390,
    quantity: 16,
    isFeatured: true
  },
  {
    id: 16,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80',
    name: 'Classic Sunglasses',
    category: 'Accessories',
    description: 'A timeless pair of sunglasses that adds an easy finishing touch.',
    specification: 'UV400 lenses, lightweight frame, protective case included',
    rating: 4,
    price: 990,
    quantity: 21,
    isFeatured: false
  },
  {
    id: 17,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=80',
    name: 'Minimalist Wristwatch',
    category: 'Accessories',
    description: 'A clean, understated watch designed to complement everyday outfits.',
    specification: 'Quartz movement, stainless steel case, leather strap',
    rating: 5,
    price: 2790,
    quantity: 10,
    isFeatured: true
  },
  {
    id: 18,
    image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=600&q=80',
    name: 'Compact Travel Backpack',
    category: 'Accessories',
    description: 'A practical carry-all with organized storage for work and short trips.',
    specification: '20L capacity, padded laptop sleeve, water-resistant fabric',
    rating: 4,
    price: 2190,
    quantity: 8,
    isFeatured: false
  },
  {
    id: 19,
    image: 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?w=600&q=80',
    name: 'Everyday Leather Wallet',
    category: 'Accessories',
    description: 'A slim wallet that keeps cards and cash neatly organized.',
    specification: 'Genuine leather, six card slots, compact profile',
    rating: 4,
    price: 890,
    quantity: 24,
    isFeatured: false
  }
];

export const sliderBanners = [
  {
    id: 1,
    title: "PRE-FINAL EXAM PRODUCT STORE",
    subtitle: "Manage, filter, add products, and track totals seamlessly",
    bg: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)"
  },
  {
    id: 2,
    title: "EXCLUSIVE TECH DEALS",
    subtitle: "High quality electronics with real-time computation",
    bg: "linear-gradient(135deg, #0f172a 0%, #10b981 100%)"
  }
];