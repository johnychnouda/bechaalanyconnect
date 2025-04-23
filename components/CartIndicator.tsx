"use client";

import Link from 'next/link';
import { useAppSelector } from '../store/hooks';

interface CartItem {
  quantity: number;
}

export function CartIndicator() {
  const cartItems = useAppSelector(state => state.cart.cartItems as CartItem[]);
  const itemCount = cartItems.reduce((count: number, item: CartItem) => count + item.quantity, 0);
  
  return (
    <Link 
      href="/cart" 
      className="relative p-2 text-gray-600 hover:text-blue-600"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
