// pages/index.js
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-80">
            <Sidebar />
          </div>
          <div className="w-full md:w-full">
            <h1 className="text-4xl font-bold mb-8">WELCOME TO BECHAALANY CONNECT</h1>
            
            {/* Add your homepage content here */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
