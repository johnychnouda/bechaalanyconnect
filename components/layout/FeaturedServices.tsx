import Link from 'next/link';
import Image from 'next/image';
import { useAppDispatch } from '../../store/hooks';
import { addToCart } from '../../store/cartSlice';

const services = [
  {
    id: "1",
    name: "Web Development",
    description: "Professional web development services for businesses of all sizes.",
    price: 999,
    image: "/services/web-dev.jpg",
  },
  {
    id: "2",
    name: "Mobile App Development",
    description: "Native and cross-platform mobile application development.",
    price: 1499,
    image: "/services/mobile-dev.jpg",
  },
  {
    id: "3",
    name: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience.",
    price: 799,
    image: "/services/ui-design.jpg",
  },
  {
    id: "4",
    name: "Digital Marketing",
    description: "Comprehensive digital marketing services to grow your online presence.",
    price: 599,
    image: "/services/marketing.jpg",
  },
];

export const FeaturedServices = () => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (service: typeof services[0]) => {
    dispatch(addToCart({
      id: service.id,
      name: service.name,
      price: service.price,
      quantity: 1,
    }));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover the wide range of services offered by Bechaalany Connect.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image 
                  src={service.image} 
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <p className="mt-4 text-lg font-bold text-blue-600">${service.price}</p>
                <div className="mt-4 flex justify-between">
                  <Link
                    href={`/services/${service.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleAddToCart(service)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
          >
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
