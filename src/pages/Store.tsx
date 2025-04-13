
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const featuredCollections = [
  {
    id: 1,
    title: "Summer Reading",
    description: "Perfect books for beach days and vacations",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Bestsellers 2025",
    description: "This year's most popular titles",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Academic Essentials",
    description: "Must-haves for students and researchers",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  }
];

const Store = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Book Store</h1>
          
          {/* Featured Collections */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCollections.map(collection => (
                <div key={collection.id} className="group relative overflow-hidden rounded-lg shadow-md">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={collection.image} 
                      alt={collection.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                    <h3 className="text-xl font-semibold mb-1">{collection.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{collection.description}</p>
                    <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                      View Collection
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Special Offers */}
          <section>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Special Discount</h2>
                  <p className="text-lg mb-4">Get 20% off on all fiction books this week!</p>
                  <Button className="bg-food-purple hover:bg-food-purple/90">Shop Now</Button>
                </div>
                <div className="w-full md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Special offer"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Store;
