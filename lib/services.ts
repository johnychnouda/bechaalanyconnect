export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Placeholder for service images - in a real app, replace with actual image paths
const placeholderImage = '/placeholder.jpg';

const services: Service[] = [
  {
    id: '1',
    name: 'Web Development',
    description: 'Professional web development services for businesses of all sizes.',
    price: 999,
    image: placeholderImage
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile application development.',
    price: 1299,
    image: placeholderImage
  },
  {
    id: '3',
    name: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience.',
    price: 799,
    image: placeholderImage
  },
  {
    id: '4',
    name: 'Digital Marketing',
    description: 'Comprehensive digital marketing services to grow your online presence.',
    price: 599,
    image: placeholderImage
  },
  {
    id: '5',
    name: 'E-commerce Solutions',
    description: 'End-to-end e-commerce development with secure payment gateways.',
    price: 1499,
    image: placeholderImage
  },
  {
    id: '6',
    name: 'Branding & Identity',
    description: 'Develop a strong brand identity with logo design and style guides.',
    price: 899,
    image: placeholderImage
  }
];

export function getAllServices(): Service[] {
  return services;
}

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}

export function getFeaturedServices(count: number = 4): Service[] {
  return services.slice(0, count);
}
