"use client"

import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { removeFromCart, updateQuantity, clearCart } from '@/store/cartSlice';
import { useState } from 'react';

export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();
  const [checkoutStatus, setCheckoutStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;
  
  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };
  
  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };
  
  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    
    setCheckoutStatus('processing');
    
    // Simulate API call
    setTimeout(() => {
      dispatch(clearCart());
      setCheckoutStatus('success');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setCheckoutStatus('idle');
      }, 5000);
    }, 2000);
  };
  
  if (checkoutStatus === 'success') {
    return (
      <div className="bg-white max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">Order Placed Successfully!</h1>
          <p className="mt-2 text-lg text-gray-500">
            Thank you for your order. We&apos;ll send you a confirmation email shortly.
          </p>
          <div className="mt-8">
            <Link href="/services" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="mt-12 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="mt-4 text-lg text-gray-500">Your cart is empty</p>
            <div className="mt-6">
              <Link href="/services" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                Shop Now
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-12">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="py-6 flex">
                      <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
                        <span className="text-gray-500">{item.name.charAt(0)}</span>
                      </div>
                      
                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.name}</h3>
                            <p className="ml-4">${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex items-center">
                            <button
                              type="button"
                              className="p-1 text-gray-400 hover:text-gray-600"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            >
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            </button>
                            <span className="mx-2 text-gray-700">{item.quantity}</span>
                            <button
                              type="button"
                              className="p-1 text-gray-400 hover:text-gray-600"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                          </div>
                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-blue-600 hover:text-blue-500"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="bg-gray-50 rounded-lg py-6 px-4 sm:py-8 sm:px-6 lg:px-8">
                <div className="flow-root">
                  <dl className="-my-4 divide-y divide-gray-200">
                    <div className="py-4 flex items-center justify-between">
                      <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                      <dd className="text-base font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
                    </div>
                    <div className="py-4 flex items-center justify-between">
                      <dt className="text-base text-gray-500">Tax</dt>
                      <dd className="text-base text-gray-500">${tax.toFixed(2)}</dd>
                    </div>
                    <div className="py-4 flex items-center justify-between">
                      <dt className="text-lg font-medium text-gray-900">Total</dt>
                      <dd className="text-lg font-medium text-gray-900">${total.toFixed(2)}</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={handleCheckout}
                  disabled={checkoutStatus === 'processing'}
                >
                  {checkoutStatus === 'processing' ? 'Processing...' : 'Checkout'}
                </button>
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="/services"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
