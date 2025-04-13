
import React from 'react';
import { Button } from "@/components/ui/button";

const CompanyProfile = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Bookstore interior"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">About Book Haven</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Book Haven has grown from a small corner bookshop to one of the most beloved bookstores 
              in the country. Our mission is to connect readers with books that will inspire, educate, and entertain them.
            </p>
            <p className="text-gray-600 mb-6">
              We carefully curate our collection to include diverse voices and perspectives, ensuring that every reader 
              can find books that speak to their experiences and interests. Our knowledgeable staff is always ready to 
              help you discover your next favorite read.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold text-food-purple text-2xl mb-2">20K+</h3>
                <p className="text-gray-600">Book Titles</p>
              </div>
              <div>
                <h3 className="font-bold text-food-purple text-2xl mb-2">50+</h3>
                <p className="text-gray-600">Categories</p>
              </div>
              <div>
                <h3 className="font-bold text-food-purple text-2xl mb-2">15+</h3>
                <p className="text-gray-600">Years of Service</p>
              </div>
              <div>
                <h3 className="font-bold text-food-purple text-2xl mb-2">100K+</h3>
                <p className="text-gray-600">Happy Readers</p>
              </div>
            </div>
            
            <Button className="bg-food-purple hover:bg-food-purple/90">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
