// src/components/Process.jsx
const Process = () => {
    const steps = [
      { title: 'Prototype', icon: '⬡' },
      { title: 'Manufacture', icon: '◯' },
      { title: 'Final Build', icon: '⬢' }
    ]
  
    return (
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">OUR PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-medium">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Process