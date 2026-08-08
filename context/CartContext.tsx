'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

interface CartContextType {
  isCartOpen: boolean;
  toggleCart: () => void;
  cart: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string, size: string) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  toggleCart: () => {},
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  totalItems: 0,
  totalPrice: 0,
});

const STORAGE_KEY = 'cozy-era-cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Start empty on every render so the server-rendered HTML and the first
  // client render match. The real cart is hydrated from localStorage in the
  // effect below, right after mount.
  const [cart, setCart] = useState<CartItem[]>([]);
  const [hasHydrated, setHasHydrated] = useState(false);

  // Load any saved cart once, client-side only.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setCart(JSON.parse(stored));
    } catch (error) {
      console.error('Failed to read cart from localStorage:', error);
    } finally {
      setHasHydrated(true);
    }
  }, []);

  // Persist on every change, but only after the initial hydration above has
  // run — otherwise this effect would immediately overwrite the saved cart
  // with the empty initial state.
  useEffect(() => {
    if (!hasHydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [cart, hasHydrated]);

  const toggleCart = () => setIsCartOpen((v) => !v);

  const addItem = (newItem: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    const qty = newItem.quantity || 1;
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size
      );
      if (existingIndex > -1) {
        // Build a new array with a new object for the updated line item,
        // rather than mutating the existing item in place.
        return prevCart.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prevCart, { ...newItem, quantity: qty }];
    });
    setIsCartOpen(true); // Automatically open cart drawer when item is added!
  };

  const removeItem = (id: string, size: string) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ isCartOpen, toggleCart, cart, addItem, removeItem, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);