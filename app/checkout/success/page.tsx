import Link from 'next/link';
import { Button } from "../../components/ui/Button";

export default function CheckoutSuccessPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100">
          <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Order Successful!</h1>
        <p className="mt-4 text-lg text-gray-500">
          Thank you for your purchase. We&apos;ve sent you an email with your order details.
        </p>
        
        <div className="mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md inline-block text-left">
            <h2 className="text-xl font-bold text-gray-900 mb-4">What happens next?</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p className="ml-2 text-gray-600">Our team will review your order and contact you soon.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p className="ml-2 text-gray-600">You&apos;ll receive updates on your order progress via email.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p className="ml-2 text-gray-600">If you have any questions, feel free to contact our support team.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 flex justify-center space-x-4">
          <Button href="/" variant="primary">
            Return to Home
          </Button>
          <Button href="/services" variant="outline">
            Browse More Services
          </Button>
        </div>
      </div>
    </div>
  );
}
