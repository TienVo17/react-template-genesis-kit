
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-food-yellow flex items-center justify-center text-black font-bold">
          F
        </div>
        <span className="font-semibold">American Food</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="hover:text-food-purple transition-colors">
          Home
        </Link>
        <Link to="/about" className="hover:text-food-purple transition-colors">
          About
        </Link>
        <Link to="/menu" className="hover:text-food-purple transition-colors">
          Menu
        </Link>
        <Link to="/blog" className="hover:text-food-purple transition-colors">
          Blog
        </Link>
        <Link to="/store" className="hover:text-food-purple transition-colors">
          Store
        </Link>
        <Link to="/contact" className="hover:text-food-purple transition-colors">
          Contact
        </Link>
      </div>
      
      <div className="block md:hidden">
        <button className="text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
