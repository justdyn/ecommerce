// src/components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-[#121212] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SOLACEMOTOR.</h3>
              <div className="space-y-2">
                <p>Email:</p>
                <p className="text-gray-400">solace.motor@gmail.com</p>
                <p>Telephone:</p>
                <p className="text-gray-400">+62 82394429495</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Insight</h3>
              <p className="text-gray-400">
                Solace Motorcycle is company specializing in the hand making and coach
                building of bespoke motorcycles. With all disciplines under one roof, Solace
                Motor workshop is setup to design, prototype, manufacture & build from
                concept to final product
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <div className="space-y-2">
                <p><a href="#" className="text-gray-400 hover:text-white">Delivery & Returns</a></p>
                <p><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></p>
                <p><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <p className="text-gray-400">Copyright © 2024 Solacemotor</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer