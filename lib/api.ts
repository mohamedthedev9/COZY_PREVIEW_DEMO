export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  details: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Merino Wool Oversized Knit',
    price: 340,
    category: 'Knitwear',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop',
    description: 'Crafted from ultra-fine Australian merino wool, designed with an effortless dropped shoulder.',
    details: ['100% Extra-fine Merino Wool', 'Ribbed hems', 'Made in Portugal'],
  },
  {
    id: '2',
    name: 'Structured Cashmere Overcoat',
    price: 890,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop',
    description: 'A commanding silhouette tailored from double-face cashmere with horn button closures.',
    details: ['100% Cashmere', 'Satin lining', 'Dry clean only'],
  },
  {
    id: '3',
    name: 'Silk Slip Dress',
    price: 450,
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fb1b?q=80&w=1000&auto=format&fit=crop',
    description: 'Cut on the bias from washed silk satin for a fluid, body-skimming drape.',
    details: ['100% Mulberry Silk', 'Adjustable straps', 'Midi length'],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}