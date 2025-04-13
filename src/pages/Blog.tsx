
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookList from '@/components/BookList';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Book Collection</h1>
          <p className="text-lg mb-6">
            Explore our extensive collection of books across various genres.
          </p>
          <BookList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
