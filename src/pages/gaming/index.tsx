import React from 'react';
import Link from 'next/link';

// Placeholder data for game categories
const gameCategories = [
  { id: 1, name: 'PUBG', image: '/pubg-image.png' },
  { id: 2, name: 'FREE FIRE', image: '/freefire-image.png' },
  { id: 3, name: 'JAWAKER', image: '/jawaker-image.png' },
  { id: 4, name: 'CLASH OF CLANS', image: '/clashofclans-image.png' },
  { id: 5, name: 'CLASH ROYAL', image: '/clashroyal-image.png' },
  { id: 6, name: 'HAY DAY', image: '/hayday-image.png' },
  { id: 7, name: 'BRAWL STARS', image: '/brawlstars-image.png' },
  { id: 8, name: 'MOBILE LEGENDS', image: '/mobilelegends-image.png' },
  { id: 9, name: 'ROBLOX', image: '/roblox-image.png' },
  { id: 10, name: 'FORTNITE', image: '/fortnite-image.png' },
  { id: 11, name: 'FIFA MOBILE', image: '/fifamobile-image.png' },
  { id: 12, name: 'YALLA LUDO', image: '/yallaludo-image.png' },
  { id: 13, name: 'ARENA BREAKOUT', image: '/arenabreakout-image.png' },
  { id: 14, name: 'GENSHIN IMPACT', image: '/genshinimpact-image.png' },
  { id: 15, name: '8BALL POOL', image: '/8ballpool-image.png' },
  { id: 16, name: 'WE PLAY', image: '/weplay-image.png' },
  { id: 17, name: 'INFINITY KINGDOM', image: '/infinitykingdom-image.png' },
  { id: 18, name: 'CALL OF DUTY', image: '/callofduty-image.png' },
  { id: 19, name: 'MERGE KINGDOMS', image: '/mergekingdoms-image.png' },
  { id: 20, name: 'BLOOD STRIKE', image: '/bloodstrike-image.png' },
  { id: 21, name: 'KING OF AVALON', image: '/kingofavalon-image.png' },
  { id: 22, name: 'ZENLESS ZERO ZERO', image: '/zenlesszerozero-image.png' },
  { id: 23, name: 'GUNS OF GLORY', image: '/gunsofglory-image.png' },
  { id: 24, name: 'IMMORTAL KINGDOM', image: '/immortalkingdom-image.png' },
  { id: 25, name: 'LIFE AFTER', image: '/lifeafter-image.png' },
  { id: 26, name: 'MU ORIGINE 2', image: '/muorigine2-image.png' },
  { id: 27, name: 'PROJECT ENTROPY', image: '/projectentropy-image.png' },
  { id: 28, name: 'STATE OF SURVIVAL', image: '/stateofsurvival-image.png' },
  { id: 29, name: 'KNIVES OUT', image: '/knivesout-image.png' },
  { id: 30, name: 'WAR ROBOTS', image: '/warrobots-image.png' },
];

interface GameCategory {
  id: number;
  name: string;
  image: string;
}

const GameCategoryCard = ({ category }: { category: GameCategory }) => {
  return (
    <Link href={`/gaming/${category.id}`} className="block rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out group relative">
      <div className="relative w-full aspect-video">
        <img src={category.image} alt={category.name} className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <span className="relative text-app-red text-lg font-bold underline z-10">View All</span>
        </div>
      </div>
    </Link>
  );
};

const GamingCategoryPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <Link href="/">Homepage</Link> / <span>Gaming</span>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">GAMING</h1>

      {/* Game Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {gameCategories.map(category => (
          <div key={category.id} className="flex flex-col items-center">
            <GameCategoryCard category={category} />
            {/* Game Category Name below the card, centered with specified styling */}
            <div className="text-center mt-2">
              <h3 className="text-[16px] font-semibold text-gray-800">{category.name}</h3>{/* Apply Roboto font, semiBold (600), 18px size */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamingCategoryPage; 