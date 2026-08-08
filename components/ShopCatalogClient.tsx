'use client';

import { useState } from 'react';
import ProductGrid from '@/components/ProductGrid';
import type { Product } from '@/lib/types';

export default function ShopCatalogClient({ initialProducts }: { initialProducts: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'KNITWEAR', 'OUTERWEAR', 'DRESSES'];

  const filteredProducts = selectedCategory === 'ALL' 
    ? initialProducts 
    : initialProducts.filter(p => p.category?.toUpperCase() === selectedCategory);

  return (
    <>
      {/* Header */}
      <div className="mb-16">
        <span className="font-mono text-[11px] tracking-[0.3em] text-bronze uppercase mb-3 block">
          Full Catalog
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-normal leading-tight mb-4">
          The <em className="italic text-oxblood">Collection</em>
        </h1>
        <p className="font-sans text-smoke text-sm md:text-base max-w-xl">
          Explore our complete range of considered pieces, designed with timeless precision and quiet elegance.
        </p>
      </div>

      {/* Product Count & Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-bronze/20 pb-6 mb-12 font-mono text-xs uppercase tracking-wider text-smoke gap-4">
        <span>Showing {filteredProducts.length} of {initialProducts.length} pieces</span>
        <div className="flex flex-wrap gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`transition-colors cursor-pointer uppercase ${
                selectedCategory === cat 
                  ? 'text-bone font-bold underline underline-offset-4 decoration-bronze' 
                  : 'text-smoke hover:text-bone'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <ProductGrid products={filteredProducts} />
    </>
  );
}