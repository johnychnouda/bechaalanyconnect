// components/Navigation.js
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className="mr-8">
                <img src="/images/logo.png" alt="Bechaalany Connect" className="h-10" />
              </a>
            </Link>
            <Link href="/categories">
              <a className="flex items-center mr-8">
                <i className="mr-2 fas fa-th"></i> CATEGORIES
              </a>
            </Link>
            <Link href="/about">
              <a className="flex items-center mr-8">
                <i className="mr-2 fas fa-info-circle"></i> ABOUT US
              </a>
            </Link>
            <Link href="/contact">
              <a className="flex items-center mr-8">
                <i className="mr-2 fas fa-headset"></i> CONTACT US
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/account">
              <a className="mr-4">
                <i className="fas fa-user"></i>
              </a>
            </Link>
            <Link href="/account">
              <a className="bg-red-600 px-4 py-2 rounded-full">
                CREATE ACCOUNT
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
