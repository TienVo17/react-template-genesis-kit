
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Our Menu</h1>
          <p className="text-lg mb-6">
            This is the Menu page. In a complete implementation, this would display the restaurant's menu items.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
