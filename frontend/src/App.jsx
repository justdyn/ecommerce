import { useState, useEffect } from 'react'
import ProdukList from './components/ProdukList'
import TambahProduk from './components/TambahProduk'
import EditProduk from './components/EditProduk'

function App() {
  const [editingProduct, setEditingProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Animation */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 to-purple-600/30 blur-3xl animate-pulse"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 
              className={`text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Welcome to Ecommerce Shop
            </h2>
            <p 
              className={`mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Discover amazing products at the best prices. Shop smart, live better.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content with Animation */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div 
          className={`bg-white rounded-lg shadow-lg p-6 mb-8 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
            Product Management
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-8 hover:scale-[1.01] transition-transform duration-300">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <TambahProduk />
              </div>
              {editingProduct && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <EditProduk 
                    productId={editingProduct} 
                    onCancel={handleCancelEdit}
                  />
                </div>
              )}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <ProdukList onEdit={setEditingProduct} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer with Animation */}
      <footer 
        className={`bg-gray-800 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">&copy; 2024 ShopSmart. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default App
