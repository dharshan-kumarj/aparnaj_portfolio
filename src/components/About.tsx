interface SkillGroup {
  category: string;
  items: string[];
}

interface AboutProps {
  skills: SkillGroup[];
}

export function About({ skills }: AboutProps) {
  return (
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
  );
}
