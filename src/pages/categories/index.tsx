import React from 'react';
import Link from 'next/link';

// Placeholder data for categories
const categories = [
  { id: 1, name: 'GAMING', image: '/gaming-image.png' },
  { id: 2, name: 'STREAMING', image: '/streaming-image.png' },
  { id: 3, name: 'TIKTOK COINS', image: '/tiktok-image.png' },
  { id: 4, name: 'ONLINE CARD', image: '/onlinecard-image.png' },
  { id: 5, name: 'SOCIAL MEDIA SERVICES', image: '/socialmedia-image.png' },
  { id: 6, name: 'TELECOM', image: '/telecom-image.png' },
  { id: 7, name: 'LIVE CHAT', image: '/livechat-image.png' },
  { id: 8, name: 'DSL CARD', image: '/dslcard-image.png' },
  { id: 9, name: 'SPECIAL NUMBERS', image: '/specialnumbers-image.png' },
  { id: 10, name: 'BALANCE SECTION', image: '/balance-image.png' },
];

interface Category {
  id: number;
  name: string;
  image: string;
}

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <>
      {/* Clicking the card is the "View All" action for the category */}
      {/* TODO: Update href for other categories as their pages are implemented */}
      <Link href={category.name === 'GAMING' ? '/gaming' : '/gaming'} className="block rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out group relative">
        <div className="relative w-full aspect-video">
          <img src={category.image} alt={category.name} className="w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90" />
          {/* View All Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            {/* Add semi-transparent black background on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>{/* Reduced opacity */}
            <span className="relative text-app-red text-lg font-bold underline z-10">View All</span>{/* Ensure text is above overlay */}
          </div>
        </div>
      </Link>
    </>
  );
};

const CategoriesPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <Link href="/">Homepage</Link> / <span>Categories</span>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">CATEGORIES</h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map(category => (
          <div key={category.id} className="flex flex-col items-center">
            <CategoryCard category={category} />
            {/* Category Name below the card, centered */}
            <div className="text-center mt-2">
              <h3 className="text-[18px] font-semibold text-gray-800">{category.name}</h3>{/* Apply Roboto font, semiBold (600), 20px size */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage; 