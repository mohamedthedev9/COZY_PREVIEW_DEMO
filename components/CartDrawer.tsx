'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { isCartOpen, toggleCart, cart, removeItem, totalPrice } = useCart();

  // Lock background scroll and allow Escape to close while the drawer is open.
  useEffect(() => {
    if (!isCartOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') toggleCart();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isCartOpen, toggleCart]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-ink/80 backdrop-blur-sm z-[100]"
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
            className="fixed top-0 right-0 h-full w-full md:w-[420px] bg-ink border-l border-bronze/20 z-[101] p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-bronze/20">
                <h2 className="font-display text-2xl text-bone">Your Bag</h2>
                <button onClick={toggleCart} className="text-smoke hover:text-bone font-mono text-xs uppercase cursor-pointer">Close</button>
              </div>

              {cart.length === 0 ? (
                <div className="py-24 text-center text-smoke font-mono text-xs uppercase tracking-widest">
                  Your bag is currently empty.
                </div>
              ) : (
                <div className="space-y-6 max-h-[50vh] overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-4 items-center bg-ink-soft p-4 border border-bronze/10">
                      <img src={item.image} alt={item.name} className="w-16 h-20 object-cover border border-bronze/20" />
                      <div className="flex-1">
                        <h4 className="font-display text-sm text-bone mb-1">{item.name}</h4>
                        <p className="font-mono text-[11px] text-smoke uppercase">Size: {item.size} | Qty: {item.quantity}</p>
                        <p className="font-mono text-xs text-bronze mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-smoke hover:text-oxblood font-mono text-xs px-2"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-bronze/20 pt-6 space-y-4">
              <div className="flex justify-between font-mono text-xs uppercase tracking-wider text-smoke">
                <span>Subtotal</span>
                <span className="text-bronze font-bold text-sm">${totalPrice.toFixed(2)}</span>
              </div>
              <button 
                disabled={cart.length === 0}
                className="w-full py-5 bg-bronze text-ink font-mono text-xs uppercase tracking-[0.3em] font-bold hover:bg-bone transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}