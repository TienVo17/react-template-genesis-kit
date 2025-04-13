
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Store = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Store</h1>
          <p className="text-lg mb-6">
            This is the Store page. In a complete implementation, this would display products available for purchase.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Store;
