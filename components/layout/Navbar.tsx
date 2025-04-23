"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { CartIndicator } from '../CartIndicator';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image 
                src="/logo.png" 
                alt="Bechaalany Connect" 
                width={150} 
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/services" className="px-3 py-2 text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <CartIndicator />
            <Button variant="primary">Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-2">
            <CartIndicator />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <div className="mt-4">
              <Button variant="primary" size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
