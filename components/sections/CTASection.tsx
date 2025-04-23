import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block text-blue-200">Connect with us today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button 
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Get in touch
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button 
              href="/services"
              variant="outline"
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 border-white"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
