import { ServiceCard } from '../../components/ServiceCard';

// Mock services data - in a real app, this would come from an API
const services = [
  {
    id: '1',
    name: 'Web Development',
    description: 'Full-stack web development using modern technologies. We create responsive, high-performing websites tailored to your business needs.',
    price: 999,
    image: '/services/web-dev.jpg'
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with smooth performance.',
    price: 1299,
    image: '/services/mobile-dev.jpg'
  },
  {
    id: '3',
    name: 'UI/UX Design',
    description: 'User-centered design that enhances user experience. We focus on creating intuitive, aesthetic interfaces that convert visitors into customers.',
    price: 799,
    image: '/services/ui-design.jpg'
  },
  {
    id: '4',
    name: 'Digital Marketing',
    description: 'Comprehensive digital marketing services including SEO, SEM, social media marketing, and content marketing to grow your online presence.',
    price: 599,
    image: '/services/marketing.jpg'
  },
  {
    id: '5',
    name: 'E-commerce Solutions',
    description: 'End-to-end e-commerce development with secure payment gateways, inventory management, and customer relationship tools.',
    price: 1499,
    image: '/services/ecommerce.jpg'
  },
  {
    id: '6',
    name: 'Branding & Identity',
    description: 'Develop a strong brand identity with logo design, style guides, brand voice, and consistent visual language across all touchpoints.',
    price: 899,
    image: '/services/branding.jpg'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Our Services</h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Explore our range of professional services designed to help your business grow and succeed in the digital world.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              name={service.name}
              description={service.description}
              price={service.price}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
