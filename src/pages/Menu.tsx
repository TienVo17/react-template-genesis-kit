
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Menu = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <h1 className="h2 fw-bold mb-4">Our Menu</h1>
          <p className="lead mb-4">
            This is the Menu page. In a complete implementation, this would display the restaurant's menu items.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
