
import React from 'react';
import { Button } from "@/components/ui/button";

const Promotion = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-food-teal/30">
                <img 
                  src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Special deal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 squiggly-line"></div>
            </div>
          </div>
          
          <div className="md:w-2/3 max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Order Now!</h2>
            <h3 className="text-2xl font-semibold text-food-purple mb-6">and Get 50% Off</h3>
            <p className="text-gray-600 mb-8">
              Take advantage of our limited-time offer and enjoy 50% off on your first order. 
              Experience the taste of premium American cuisine at an unbeatable price.
            </p>
            <Button className="bg-food-purple hover:bg-food-purple/90 text-white px-8 py-2 rounded-md">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
