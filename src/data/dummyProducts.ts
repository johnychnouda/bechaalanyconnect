import { Product } from '@/types/product.type';
import { dummyCategories } from './dummyCategories';

export const dummyProducts: Product[] = [
  // Electronics - Smartphones
  {
    id: 1,
    title: 'iPhone 15 Pro Max',
    image: '/products/iphone-15-pro-max.jpg',
    price: 1299.99,
    category: dummyCategories.find(c => c.id === 10) || null,
  },
  {
    id: 2,
    title: 'Samsung Galaxy S24 Ultra',
    image: '/products/samsung-s24-ultra.jpg',
    price: 1199.99,
    category: dummyCategories.find(c => c.id === 11) || null,
  },
  // Electronics - Laptops
  {
    id: 3,
    title: 'MacBook Pro M3',
    image: '/products/macbook-pro-m3.jpg',
    price: 1999.99,
    category: dummyCategories.find(c => c.id === 5) || null,
  },
  {
    id: 4,
    title: 'Dell XPS 15',
    image: '/products/dell-xps-15.jpg',
    price: 1799.99,
    category: dummyCategories.find(c => c.id === 5) || null,
  },
  // Clothing - Men's
  {
    id: 5,
    title: 'Men\'s Casual T-Shirt',
    image: '/products/mens-casual-tshirt.jpg',
    price: 29.99,
    category: dummyCategories.find(c => c.id === 6) || null,
  },
  {
    id: 6,
    title: 'Men\'s Denim Jeans',
    image: '/products/mens-denim-jeans.jpg',
    price: 49.99,
    category: dummyCategories.find(c => c.id === 6) || null,
  },
  // Clothing - Women's
  {
    id: 7,
    title: 'Women\'s Summer Dress',
    image: '/products/womens-summer-dress.jpg',
    price: 39.99,
    category: dummyCategories.find(c => c.id === 7) || null,
  },
  {
    id: 8,
    title: 'Women\'s Blouse',
    image: '/products/womens-blouse.jpg',
    price: 34.99,
    category: dummyCategories.find(c => c.id === 7) || null,
  },
  // Home & Garden - Furniture
  {
    id: 9,
    title: 'Modern Sofa',
    image: '/products/modern-sofa.jpg',
    price: 899.99,
    category: dummyCategories.find(c => c.id === 8) || null,
  },
  {
    id: 10,
    title: 'Dining Table Set',
    image: '/products/dining-table-set.jpg',
    price: 1299.99,
    category: dummyCategories.find(c => c.id === 8) || null,
  },
  // Home & Garden - Garden Tools
  {
    id: 11,
    title: 'Professional Lawn Mower',
    image: '/products/lawn-mower.jpg',
    price: 299.99,
    category: dummyCategories.find(c => c.id === 9) || null,
  },
  {
    id: 12,
    title: 'Garden Tool Set',
    image: '/products/garden-tool-set.jpg',
    price: 89.99,
    category: dummyCategories.find(c => c.id === 9) || null,
  },
]; 