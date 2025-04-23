"use client";

import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/cartSlice';

type Service = {
  id: string;
  name: string;
  price: number;
};

export const AddToCartButton = ({ service }: { service: Service }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: service.id,
      name: service.name,
      price: service.price,
      quantity: 1,
    }));

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`${
        isAdded
          ? 'bg-green-600 hover:bg-green-700'
          : 'bg-blue-600 hover:bg-blue-700'
      } px-6 py-3 text-white rounded-md transition-colors`}
      disabled={isAdded}
    >
      {isAdded ? 'Added to Cart!' : 'Add to Cart'}
    </button>
  );
};
