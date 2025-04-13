
import React from 'react';
import { ShoppingBag, Utensils, Truck } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional food prep made simple for busy people who want to enjoy healthy, 
            delicious meals without the hassle.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
          <div className="flex flex-col items-center max-w-xs text-center">
            <div className="w-20 h-20 rounded-full bg-food-purple flex items-center justify-center text-white mb-6">
              <Utensils size={32} />
            </div>
            <h3 className="font-medium text-xl mb-2">Choose Your Meal</h3>
            <p className="text-gray-600">Browse our menu and select your favorite dishes.</p>
          </div>
          
          <div className="hidden md:block text-food-teal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="flex flex-col items-center max-w-xs text-center">
            <div className="w-20 h-20 rounded-full bg-food-teal flex items-center justify-center text-white mb-6">
              <ShoppingBag size={32} />
            </div>
            <h3 className="font-medium text-xl mb-2">Place Your Order</h3>
            <p className="text-gray-600">Customize your order and choose delivery time.</p>
          </div>
          
          <div className="hidden md:block text-food-teal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="flex flex-col items-center max-w-xs text-center">
            <div className="w-20 h-20 rounded-full bg-food-pink flex items-center justify-center text-white mb-6">
              <Truck size={32} />
            </div>
            <h3 className="font-medium text-xl mb-2">Enjoy Your Food</h3>
            <p className="text-gray-600">We deliver fresh, ready-to-eat meals right to your door.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
