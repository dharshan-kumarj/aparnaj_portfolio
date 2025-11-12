export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="md:col-span-3 space-y-8">
            <div className="space-y-4">
              <p className="text-green-500 text-sm tracking-widest uppercase">Developer & AI Enthusiast</p>
              
              <h1 className="text-6xl md:text-7xl font-light leading-tight">
                <span className="text-white">APARNA</span>
                <br />
                <span className="text-green-500">J</span>
              </h1>
              
              <div className="w-24 h-px bg-green-500"></div>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Building intelligent systems through machine learning and deep learning. 
              I work at the intersection of artificial intelligence and practical applications, 
              creating solutions that make a difference.
            </p>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="#projects"
                className="px-8 py-3 bg-green-600 text-black font-medium hover:bg-green-500 transition-all"
              >
                View Projects
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 border border-green-600 text-green-500 font-medium hover:bg-green-600 hover:text-black transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-2xl"></div>
              <div className="relative border border-green-600/30">
                <img 
                  src="/images/aparnaj.jpg" 
                  alt="Aparna J"
                  loading="lazy"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
