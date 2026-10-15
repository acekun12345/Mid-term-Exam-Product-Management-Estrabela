import { Product } from './types';

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