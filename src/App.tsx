import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out. I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const projects = [
    {
      title: "Neural Style Transfer",
      tech: ["PyTorch", "Python", "Computer Vision"],
      description: "Developed an artistic image generation system using deep neural networks to seamlessly blend content and style, creating unique visual outputs.",
      year: "2024"
    },
    {
      title: "Sentiment Analysis Engine",
      tech: ["TensorFlow", "NLP", "React"],
      description: "Built a real-time sentiment analyzer for social media content with an interactive dashboard for data visualization and insights.",
      year: "2024"
    },
    {
      title: "Predictive Maintenance System",
      tech: ["Python", "Machine Learning", "REST APIs"],
      description: "Designed an IoT-based machine learning system that predicts equipment failures, reducing downtime and maintenance costs.",
      year: "2023"
    },
    {
      title: "AI Chatbot Framework",
      tech: ["TensorFlow", "React", "Node.js"],
      description: "Created a conversational AI framework with context awareness and multi-intent detection for enhanced user interactions.",
      year: "2023"
    }
  ];

  const skills = [
    { category: "AI & Machine Learning", items: ["PyTorch", "TensorFlow", "Scikit-learn", "Neural Networks", "Deep Learning"] },
    { category: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
    { category: "Frontend Development", items: ["React", "Tailwind CSS", "Next.js", "Responsive Design"] },
    { category: "Backend Development", items: ["Node.js", "Express", "REST APIs", "Database Design", "API Integration"] }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
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
                    className="w-80 h-80 md:w-96 md:h-96 object-cover transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20 border-t border-green-900/30">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              <span className="text-green-500">About</span> Me
            </h2>
            <div className="w-24 h-px bg-green-500"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                My fascination with artificial intelligence began with a simple question: 
                how can we make machines learn and adapt? This curiosity led me down a path 
                of exploring neural networks, training models, and building intelligent systems.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                I specialize in developing machine learning solutions using Python, PyTorch, 
                and TensorFlow. My work spans from computer vision projects to natural language 
                processing applications. Beyond ML, I have strong backend development skills 
                and enjoy creating full-stack applications with React.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                When I'm not training models or debugging code, I'm probably exploring new 
                research papers or experimenting with emerging AI technologies.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="border border-green-900/30 p-4">
                  <div className="text-3xl font-light text-green-500">5+</div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Projects</div>
                </div>
                <div className="border border-green-900/30 p-4">
                  <div className="text-3xl font-light text-green-500">10+</div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Technologies</div>
                </div>
                <div className="border border-green-900/30 p-4">
                  <div className="text-3xl font-light text-green-500">2+</div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Years</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="border border-green-900/30 p-6 hover:border-green-600/50 transition-all">
                  <h3 className="text-green-500 font-medium mb-4 tracking-wide uppercase text-sm">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="text-gray-400 text-sm border border-green-900/30 px-3 py-1 hover:text-green-500 hover:border-green-600/50 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-6 py-20 border-t border-green-900/30">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Featured <span className="text-green-500">Work</span>
            </h2>
            <div className="w-24 h-px bg-green-500"></div>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group border border-green-900/30 hover:border-green-600/50 transition-all p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-green-500 font-mono text-sm">0{index + 1}</span>
                      <div className="h-px flex-1 bg-green-900/30 group-hover:bg-green-600/50 transition-all"></div>
                      <span className="text-gray-500 text-sm">{project.year}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-green-500 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs text-green-500 border border-green-900/30 px-3 py-1 uppercase tracking-wide">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20 border-t border-green-900/30">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Get In <span className="text-green-500">Touch</span>
            </h2>
            <div className="w-24 h-px bg-green-500 mb-6"></div>
            <p className="text-gray-400 text-lg">
              Interested in collaborating or have a project in mind? I'd love to hear from you.
            </p>
          </div>

          <div className="border border-green-900/30 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm text-gray-400 mb-3 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-green-900/30 focus:outline-none focus:border-green-500 transition-all text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-3 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-green-900/30 focus:outline-none focus:border-green-500 transition-all text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-3 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-0 py-3 bg-transparent border-b border-green-900/30 focus:outline-none focus:border-green-500 transition-all text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="px-12 py-4 bg-green-600 text-black font-medium hover:bg-green-500 transition-all uppercase tracking-wide text-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 flex justify-center gap-8">
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm uppercase tracking-wide">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm uppercase tracking-wide">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm uppercase tracking-wide">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-900/30 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Aparna J. Crafted with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
