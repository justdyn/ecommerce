// src/components/ProductShowcase.jsx
const Project7Showcase = () => {
    return (
      <section className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-6xl font-bold">Project 7</h2>
          <p className="text-gray-400 max-w-lg">
          A custom-built masterpiece based on a 1994 Harley Davidson XL 1200 EVO. 
          This build showcases the perfect blend of classic Sportster heritage 
          with modern custom modifications. The bike features a carefully crafted 
          stance, premium suspension upgrades, and hand-built details that 
          emphasize its aggressive yet refined character.
          </p>
          <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors">
          EXPLORE Project 7 →
          </button>
        </div>
        <div className="relative">
          <img 
          src="/images/project7/project7-1.jpg" 
          alt="Harley Davidson XL 1200" 
          className="w-full rounded-lg shadow-2xl"
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
          <img 
            src="/images/project7/project7-2.jpg" 
            alt="XL 1200 Detail 1" 
            className="w-full h-32 object-cover rounded-lg"
          />
          <img 
            src="/images/project7/project7-3.jpg" 
            alt="XL 1200 Detail 2" 
            className="w-full h-32 object-cover rounded-lg"
          />
          </div>
        </div>
        </div>
      </div>
      </section>
    )
  }
  
  export default Project7Showcase 