export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  details?: string[];
}

// قائمة المنتجات الخاصة بالموقع
const products: Product[] = [
  {
    id: "1",
    name: "Cashmere Oversized Turtleneck",
    price: 280,
    category: "Knitwear",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    description: "Luxurious cashmere cut for unmatched comfort and timeless elegance.",
    details: ["100% Pure Cashmere", "Oversized relaxed fit", "Ribbed high neckline", "Made in Italy"]
  },
  {
    id: "2",
    name: "Silk Slip Midi Dress",
    price: 320,
    category: "Dresses",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800",
    description: "An effortless silhouette crafted from premium mulberry silk.",
    details: ["100% Mulberry Silk", "V-neckline", "Adjustable delicate straps", "Dry clean only"]
  },
  {
    id: "3",
    name: "Tailored Wool Trench Coat",
    price: 540,
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
    description: "Structured wool blend designed to outlast the season in absolute style.",
    details: ["Virgin wool and cashmere blend", "Double-breasted button front", "Self-tie belt", "Fully lined"]
  },
  {
    id: "4",
    name: "Pleated Linen Wide-Leg Trousers",
    price: 220,
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
    description: "Lightweight, breathable linen tailored for effortless everyday movement.",
    details: ["100% Organic Linen", "High-waisted fit", "Front pleats", "Side pockets"]
  }
];

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductById(id: string): Promise<Product | null> {
  const product = products.find((p) => p.id === id);
  return product || null;
}