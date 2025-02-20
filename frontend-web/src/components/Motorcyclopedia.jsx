// src/components/Motorcyclopedia.jsx
const Motorcyclopedia = () => {
    const motorcycles = [
      {
        name: "BLACK MMASA",
        image: "/images/motorcyclepedia/chopper1.jpg",
        link: "EXPLORE BLACK MMASA >>"
      },
      {
        name: "SHIDARO D20PRO",
        image: "/images/brat-cafe.jpg",
        link: "EXPLORE SHIDARO D20PRO >>"
      },
      {
        name: "MIDNITE",
        image: "/images/motorcyclepedia/vespa1.jpg",
        link: "EXPLORE MIDNITE >>"
      }
    ]
  
    return (
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Handlebar View Section */}
                <div className="mb-20">
                <div className="relative h-[60vh] overflow-hidden rounded-lg">
                  <img 
                  src="/images/keren3.jpg"
                  alt="Motorcycle Handlebar"
                  className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <h2 className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-center">
                  MOTORCYCLOPEDIA
                  </h2>
                </div>
                </div>

                {/* Motorcycle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {motorcycles.map((moto, index) => (
              <div key={index} className="group relative">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <img 
                    src={moto.image || "/placeholder.svg"}
                    alt={moto.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold mb-2">{moto.name}</h3>
                  <a 
                    href="#" 
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {moto.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
  
          {/* BadBoris Section */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/images/badboris.jpg"
                alt="BadBoris Motorcycle"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <img 
                  src="/images/badboris2.jpeg"
                  alt="BadBoris Detail 1"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img 
                  src="/images/badboris3.jpeg"
                  alt="BadBoris Detail 2"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-6xl font-bold">BADBORIS</h2>
              <p className="text-gray-400 max-w-lg">
                It was only natural that the first brat style bike 
                from Solace Motorcycle, the well received BadBoris, 
                was going to inspire someone to commission the same 
                style applied to a bigger beast.
              </p>
              <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors">
                EXPLORE BADBORIS →
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Motorcyclopedia