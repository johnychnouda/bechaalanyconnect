import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image 
              src="/logo-white.png" 
              alt="Bechaalany Connect" 
              width={150} 
              height={40}
              className="h-8 w-auto"
            />
            <p className="mt-4 text-gray-300 text-sm">
              Connecting people with the services they need since 2023.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">All Services</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
              </li>
              <li>
                <Link href="/partner" className="text-gray-300 hover:text-white">Become a Partner</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Twitter</a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Bechaalany Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
