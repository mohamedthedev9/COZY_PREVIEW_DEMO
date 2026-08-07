export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
  details?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Merino Wool Oversized Knit',
    price: 340,
    category: 'Knitwear',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    description: 'Crafted from the finest merino wool, this oversized knit offers unparalleled comfort and effortless luxury.',
    details: ['100% Extra-fine Merino Wool', 'Relaxed silhouette', 'Ribbed trims'],
  },
  {
    id: '2',
    name: 'Structured Cashmere Overcoat',
    price: 890,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
    description: 'A masterclass in tailoring, this cashmere overcoat provides warmth and sophisticated style.',
    details: ['100% Cashmere', 'Structured shoulders', 'Satin lining'],
  },
];

// Export all function name variations to prevent any mismatch errors
export function getProducts() {
  return products;
}

export function getAllProducts() {
  return products;
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}