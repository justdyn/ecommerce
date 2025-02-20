// src/components/Apparel.jsx
import React from 'react';
import { useCart } from '../components/CartContext';

const Apparel = () => {
  const { addToCart } = useCart();

  const merchandise = [
    {
      id: 1,
      name: "RIDER JACKET",
      image: "/images/apparel/apparel1.jpg",
      link: "SHOP JACKET >>",
      price: 199.99
    },
    {
      id: 2,
      name: "PREMIUM T-SHIRT",
      image: "/images/apparel/apparel2.jpg",
      link: "SHOP T-SHIRT >>",
      price: 49.99
    },
    {
      id: 3,
      name: "KEYCHAIN",
      image: "/images/keychain1.jpg",
      link: "SHOP KEYCHAIN >>",
      price: 14.99
    }
  ];

  return (
    <section className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner Section */}
        <div className="mb-20">
          <div className="relative h-[60vh] overflow-hidden rounded-lg">
            <img 
              src="/images/apparel/apparel3.jpg"
              alt="Apparel Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <h2 className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-center">
              APPAREL COLLECTION
            </h2>
          </div>
        </div>

        {/* Merchandise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {merchandise.map((item) => (
            <div key={item.id} className="group relative">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <img 
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-lg font-semibold mb-2">${item.price.toFixed(2)}</p>
                <button 
                  onClick={() => addToCart(item)}
                  className="text-sm text-gray-300 hover:text-white transition-colors bg-gray-800 px-4 py-2 rounded-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Product Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/images/apparel/speedingkillsbundle1.jpg"
              alt="Featured Leather Jacket"
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <img 
                src="/images/apparel/speedingkillsbundle2.jpg"
                alt="Jacket Detail 1"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img 
                src="/images/apparel/speedingkillsbundle3.jpg"
                alt="Jacket Detail 2"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-6xl font-bold">SPEEDING KILLS - BUNDLE A/B</h2>
            <div className="flex items-center space-x-4">
              <p className="text-3xl font-bold">$299.99</p>
              <span className="bg-red-600 text-white px-2 py-1 rounded-full text-sm font-semibold">LIMITED EDITION</span>
            </div>
            <p className="text-gray-400 max-w-lg">
              Comic book printed in 90gsm book paper, full color, 100 pages. Each box includes 1 comic book, 2 stickers, 1 post card, 1 oversize T-shirt, and 1 ashtray for bundling B with exclusive limited 12pcs 3D printed ABS Speeding Kills ashtray.
            </p>
            <button 
              onClick={() => addToCart({ id: 4, name: "SPEEDING KILLS - BUNDLE A/B", price: 299.99 })}
              className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors"
            >
              ADD TO CART →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apparel;