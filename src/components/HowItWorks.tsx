
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How to Order Books</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to find and order your next favorite book from our collection.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-food-yellow rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse</h3>
            <p className="text-gray-600">
              Explore our vast collection of books across various genres and categories.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-food-teal rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Select</h3>
            <p className="text-gray-600">
              Add your favorite books to your cart for checkout.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-food-purple rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Order</h3>
            <p className="text-gray-600">
              Complete your purchase by providing shipping and payment details.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-food-pink rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-semibold mb-2">Enjoy</h3>
            <p className="text-gray-600">
              Receive your books and dive into the world of knowledge and imagination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
