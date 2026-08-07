'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const { addItem } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
      {products.map((product) => (
        <div key={product.id} className="group relative flex flex-col">
          {/* Card Image Link */}
          <Link href={`/shop/${product.id}`} className="block overflow-hidden bg-ink-soft border border-bronze/20 aspect-[4/5] relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Quick Add Overlay Button */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevents link navigation when clicking add to bag directly
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    size: 'M', // Default quick-add size
                  });
                }}
                className="w-full py-3 bg-bronze text-ink font-mono text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-bone transition-colors"
              >
                Add to Bag
              </button>
            </div>
          </Link>

          {/* Details */}
          <div className="flex justify-between items-start mt-4">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-bronze uppercase block mb-1">
                {product.category}
              </span>
              <Link href={`/shop/${product.id}`} className="font-display text-xl text-bone hover:text-bronze transition-colors">
                {product.name}
              </Link>
            </div>
            <span className="font-mono text-sm text-smoke">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}