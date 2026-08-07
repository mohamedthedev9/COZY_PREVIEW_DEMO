
'use client';

import { useState, useEffect, use } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProductById } from "@/lib/api";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const product = getProductById(id);
        const found = products.find((p: Product) => p.id === resolvedParams.id || p.name.toLowerCase().replace(/\s+/g, '-') === resolvedParams.id);
        setProduct(found || products[0]); // Fallback to first product if not found for testing
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [resolvedParams.id]);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-ink text-bone flex items-center justify-center font-mono text-xs uppercase tracking-[0.3em]">
        Loading piece...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink text-bone flex flex-col selection:bg-oxblood selection:text-bone">
      <Navbar />

      <main className="flex-1 max-w-[1600px] mx-auto w-full px-8 lg:px-24 py-16">
        {/* Breadcrumb */}
        <div className="mb-12 font-mono text-xs uppercase tracking-widest text-smoke flex items-center gap-2">
          <Link href="/" className="hover:text-bone transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-bone transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-bronze">{product?.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Product Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-ink-soft border border-bronze/20 overflow-hidden relative aspect-[4/5]"
          >
            {product?.image ? (
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-smoke font-mono text-xs uppercase tracking-widest">
                No Image Available
              </div>
            )}
            <span className="absolute top-6 left-6 px-4 py-1.5 bg-ink/80 backdrop-blur-md border border-bronze/30 font-mono text-[10px] uppercase tracking-[0.2em] text-bronze">
              {product?.category || 'Exclusive'}
            </span>
          </motion.div>

          {/* Right Column: Details & Purchasing Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="font-mono text-[11px] tracking-[0.3em] text-bronze uppercase block mb-3">
                Season Edit
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-normal leading-tight mb-4 text-bone">
                {product?.name}
              </h1>
              <p className="font-mono text-xl text-bronze-soft tracking-wider">
                ${product?.price?.toFixed(2) ?? '280.00'}
              </p>
            </div>

            <div className="border-t border-b border-bronze/20 py-6 space-y-4 font-sans text-sm text-smoke leading-relaxed">
              <p>
                {product?.description || 'Crafted with precision from premium weighted fabrics. Designed with clean architectural lines for an uncompromising drape and lifetime durability.'}
              </p>
            </div>

            {/* Size Selector */}
            <div className="space-y-3">
              <div className="flex justify-between items-center font-mono text-xs uppercase tracking-wider">
                <span className="text-smoke">Select Size</span>
                <span className="text-bronze cursor-pointer hover:underline">Size Guide</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 font-mono text-xs uppercase tracking-widest border transition-all ${
                      selectedSize === size 
                        ? 'border-bronze bg-bronze text-ink font-bold' 
                        : 'border-bronze/30 bg-ink text-bone hover:border-bronze'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-smoke block">Quantity</span>
              <div className="flex items-center border border-bronze/30 w-36 bg-ink">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-smoke hover:text-bone font-mono"
                >
                  -
                </button>
                <span className="flex-1 text-center font-mono text-xs">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-smoke hover:text-bone font-mono"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Bag Button */}
            <div className="pt-4">
              <button
                onClick={handleAddToCart}
                className={`w-full py-5 font-mono text-xs uppercase tracking-[0.3em] font-bold transition-all ${
                  added 
                    ? 'bg-moss-bright text-ink' 
                    : 'bg-bronze text-ink hover:bg-bone'
                }`}
              >
                {added ? 'Added to Bag ✓' : 'Add to Bag'}
              </button>
            </div>

            {/* Additional Info / Policies */}
            <div className="border-t border-bronze/20 pt-6 space-y-3 font-mono text-[11px] text-smoke uppercase tracking-wider">
              <p>✦ Complimentary worldwide shipping on orders over $200</p>
              <p>✦ Designed in the quiet hours. Limited run execution.</p>
            </div>

          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}