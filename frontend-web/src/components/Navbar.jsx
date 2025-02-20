// src/components/Navbar.jsx
import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../components/CartContext';

const Navbar = () => {
  const { itemCount } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#121212]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/logo1.png" alt="" className="h-10 mr-2"/>
            <h1 className="text-xl font-bold">SOLACEMOTOR</h1>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2">HOME</Link>
              <Link to="/#motorcyclopedia" className="text-gray-300 hover:text-white px-3 py-2">MOTORCYCLOPEDIA</Link>
              <Link to="/#apparel" className="text-gray-300 hover:text-white px-3 py-2">APPAREL</Link>
              <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2">ABOUT</Link>
              <Link to="/feed" className="text-gray-300 hover:text-white px-3 py-2">FEED</Link>
              <Link to="/#custom-parts" className="text-gray-300 hover:text-white px-3 py-2">CUSTOM PARTS</Link>
              <Link to="/cart" className="relative text-gray-300 hover:text-white">
                <ShoppingCart size={24} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;