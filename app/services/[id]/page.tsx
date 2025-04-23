"use client"

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/cartSlice';
import { getServiceById } from '@/lib/services';

export default function ServiceDetailPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    // Get service details
    const serviceData = getServiceById(id);
    setService(serviceData || null);
    setIsLoading(false);
  }, [id]);
  
  const handleAddToCart = () => {
    if (!service) return;
    
    dispatch(addToCart({
      id: service.id,
      name: service.name,
      price: service.price,
      quantity: 1,
      image: service.image
    }));
  };
  
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 w-1/3 mb-6 rounded"></div>
          <div className="h-72 bg-gray-200 rounded mb-6"></div>
          <div className="h-8 bg-gray-200 w-1/4 mb-4 rounded"></div>
          <div className="h-4 bg-gray-200 w-full mb-2 rounded"></div>
          <div className="h-4 bg-gray-200 w-full mb-2 rounded"></div>
          <div className="h-4 bg-gray-200 w-2/3 mb-6 rounded"></div>
          <div className="h-10 bg-gray-200 w-1/4 rounded"></div>
        </div>
      </div>
    );
  }
  
  if (!service) {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Service Not Found</h1>
        <p className="text-lg text-gray-500 mb-8">The service you're looking for does not exist or has been removed.</p>
        <Link href="/services" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          Back to Services
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image column */}
          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
            <div className="h-60 md:h-96 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-medium">
              {service.name}
            </div>
          </div>
          
          {/* Content column */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{service.name}</h1>
            <div className="mt-3">
              <h2 className="sr-only">Service price</h2>
              <p className="text-3xl text-blue-600 font-bold">${service.price}</p>
            </div>
            
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{service.description}</p>
            </div>
            
            <div className="mt-10 flex sm:flex-col1">
              <button
                type="button"
                className="max-w-xs flex-1 bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-full"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              
              <Link
                href="/cart"
                className="max-w-xs flex-1 ml-3 bg-white border border-blue-600 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-full"
              >
                View Cart
              </Link>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-lg font-medium text-gray-900">Service Details</h2>
              <div className="mt-4 prose prose-sm text-gray-500">
                <ul role="list">
                  <li>Professional service by certified experts</li>
                  <li>Fast turnaround time</li>
                  <li>100% satisfaction guarantee</li>
                  <li>Free revisions included</li>
                  <li>24/7 customer support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
