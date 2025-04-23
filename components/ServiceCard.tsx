"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/cartSlice';

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export function ServiceCard({ id, name, description, price, image }: ServiceCardProps) {
  const dispatch = useAppDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      name,
      price,
      quantity: 1
    }));
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">${price.toFixed(2)}</span>
          <div className="flex space-x-2">
            <Link 
              href={`/services/${id}`}
              className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
            >
              Details
            </Link>
            <button
              onClick={handleAddToCart}
              className="px-3 py-1 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
