'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { toggleCart, totalItems } = useCart();

  return (
    <header className="flex items-center justify-between px-8 lg:px-16 py-6 border-b border-bone/10 sticky top-0 bg-ink/90 backdrop-blur-md z-50">
      <Link href="/" className="font-display text-2xl tracking-[4px] uppercase text-bone">
        Cozy Era
      </Link>
      
      <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[3px] font-mono text-smoke">
        <Link href="/shop" className="hover:text-bone transition-colors">Collection</Link>
        <Link href="/about" className="hover:text-bone transition-colors">About</Link>
        <Link href="/contact" className="hover:text-bone transition-colors">Contact</Link>
      </nav>

      <div className="flex items-center gap-6 text-xs uppercase tracking-[2px] font-mono">
        <Link href="/login" className="text-smoke hover:text-bone transition-colors">Sign In</Link>
        <button 
          onClick={toggleCart} 
          className="px-5 py-2.5 bg-bronze text-ink hover:bg-bone transition-colors font-medium cursor-pointer"
        >
          Cart ({totalItems})
        </button>
      </div>
    </header>
  );
}