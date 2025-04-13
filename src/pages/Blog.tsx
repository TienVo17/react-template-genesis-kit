
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <h1 className="h2 fw-bold mb-4">Blog</h1>
          <p className="lead mb-4">
            This is the Blog page. In a complete implementation, this would display blog posts and articles.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
