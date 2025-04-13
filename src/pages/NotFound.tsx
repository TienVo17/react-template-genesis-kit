
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-9xl font-bold text-food-purple mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
            Oops! It seems like this page has been checked out and never returned.
            The book you're looking for might be on another shelf.
          </p>
          <div className="flex justify-center">
            <Button asChild className="bg-food-purple hover:bg-food-purple/90 mr-4">
              <Link to="/">Return Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/blog">Browse Books</Link>
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Books"
              className="max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
