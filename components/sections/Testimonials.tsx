
const testimonials = [
  {
    content: "Bechaalany Connect helped me find the perfect service for my needs. The process was seamless and the results exceeded my expectations.",
    author: "Sarah Johnson",
    role: "Business Owner",
  },
  {
    content: "I've been using Bechaalany Connect for all my service needs. The quality of work and professionalism is consistently outstanding.",
    author: "Michael Chen",
    role: "Marketing Director",
  },
  {
    content: "The service providers on Bechaalany Connect transformed our business. Highly recommended!",
    author: "Lisa Rodriguez",
    role: "Product Manager",
  },
];

export function Testimonials() {
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
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg shadow"
            >
              <svg className="h-8 w-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-600 italic mb-4">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
