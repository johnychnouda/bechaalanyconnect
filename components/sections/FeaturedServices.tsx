import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedServices } from '@/lib/services';

export function FeaturedServices() {
  const services = getFeaturedServices(4);
  
  return (
    <section className="py-16 bg-gray-50">
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
            <div key={service.id} className="group">
              <Link 
                href={`/services/${service.id}`} 
                className="block h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500">
                    <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                      {service.name}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-lg font-semibold text-blue-600">
                      ${service.price}
                    </p>
                    <span className="text-sm font-medium text-blue-600 flex items-center">
                      View details
                      <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
          >
            View All Services
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
