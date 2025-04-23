import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    content: "Bechaalany Connect helped me find the perfect web developer for my business. The process was seamless and the results exceeded my expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "/testimonials/avatar1.jpg"
  },
  {
    id: 2,
    content: "I've been using Bechaalany Connect for all my design needs. The quality of work and professionalism is consistently outstanding.",
    author: "Michael Chen",
    role: "Marketing Director",
    avatar: "/testimonials/avatar2.jpg"
  },
  {
    id: 3,
    content: "The mobile app development service from Bechaalany Connect transformed our business. Highly recommended!",
    author: "Lisa Rodriguez",
    role: "Product Manager",
    avatar: "/testimonials/avatar3.jpg"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Trusted by businesses and individuals worldwide.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 p-8 rounded-lg shadow"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                  <Image 
                    className="h-12 w-12 rounded-full"
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 italic">&quot;{testimonial.content}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
