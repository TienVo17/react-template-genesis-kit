
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pb-20">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-2/3 h-3/4 yellow-blob -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 teal-blob -z-10"></div>
      
      <div className="container mx-auto px-6 pt-10 md:pt-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Popular belief simply random text roots in a piece of classical
          </h1>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
          <Button className="bg-food-teal hover:bg-food-teal/90 text-black font-medium px-8 py-2 rounded-md">
            Get Started
          </Button>
        </div>
        
        <div className="flex justify-center relative">
          <img 
            src="/lovable-uploads/cf4fff63-112c-4216-9f5f-91a3bbec42c8.png" 
            alt="Food display"
            className="max-w-full hidden md:block"
          />
          <div className="absolute -right-6 top-1/4 squiggly-line"></div>
          <div className="absolute -left-6 bottom-1/4 squiggly-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
