import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">About Bechaalany Connect</h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Learn about our mission, vision, and the team behind Bechaalany Connect.
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-500">
                At Bechaalany Connect, our mission is to bridge the gap between service providers and consumers, creating a seamless platform where quality services can be discovered and delivered efficiently.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                We believe in the power of connection and aim to build a community where professionals can showcase their expertise and clients can find exactly what they need.
              </p>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/about/mission.jpg"
                alt="Our mission"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1 relative h-64 md:h-auto">
              <Image
                src="/about/vision.jpg"
                alt="Our vision"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-extrabold text-gray-900">Our Vision</h2>
              <p className="mt-4 text-lg text-gray-500">
                We envision a world where finding and booking professional services is as easy as a few clicks, where quality is guaranteed, and where both service providers and consumers thrive in a transparent ecosystem.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Bechaalany Connect aims to be the leading platform for service discovery and delivery, known for its reliability, quality, and user-centric approach.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Team</h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-gray-500">
              Meet the dedicated professionals behind Bechaalany Connect.
            </p>
            
            <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Alan Bechaalany',
                  role: 'Founder & CEO',
                  image: '/team/alan.jpg',
                  bio: 'With over 10 years of experience in technology and service industries, Alan founded Bechaalany Connect to revolutionize how people discover and book services.'
                },
                {
                  name: 'Sarah Johnson',
                  role: 'CTO',
                  image: '/team/sarah.jpg',
                  bio: 'Sarah brings extensive technical expertise to lead our development team, ensuring Bechaalany Connect remains at the cutting edge of technology.'
                },
                {
                  name: 'Michael Chen',
                  role: 'Head of Product',
                  image: '/team/michael.jpg',
                  bio: "Michael's passion for user experience drives our product development, focusing on creating intuitive and valuable features for our users."
                },
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600">{member.role}</p>
                    <p className="mt-4 text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
