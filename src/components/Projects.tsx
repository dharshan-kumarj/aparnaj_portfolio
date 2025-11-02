interface Project {
  title: string;
  tech: string[];
  description: string;
  year: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
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
              onClick={() => window.open(project.link, '_blank')}
              className="group border border-green-900/30 hover:border-green-600/50 transition-all p-8 md:p-10 cursor-pointer hover:shadow-lg hover:shadow-green-600/10 transform hover:translate-y-[-4px]"
              role="article"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open(project.link, '_blank');
                }
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-green-500 font-mono text-sm">0{index + 1}</span>
                    <div className="h-px flex-1 bg-green-900/30 group-hover:bg-green-600/50 transition-all"></div>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>
                  
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-green-500 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`View ${project.title} on GitHub`}
                      className="flex-shrink-0 p-2 text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110"
                      title="View on GitHub"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                  
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
  );
}
