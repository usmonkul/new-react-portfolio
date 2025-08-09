const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=E-Commerce",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Task+App",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that displays current weather conditions, forecasts, and interactive maps using weather APIs.",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      image: "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Weather+App",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section 
      id="projects" 
      className="section-padding"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            My Projects
          </h2>
          <div 
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          ></div>
          <p 
            className="mt-6 max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Here are some of the projects I've worked on. Each project represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {project.title}
                </h3>
                <p 
                  className="mb-4 leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium rounded-full"
                      style={{
                        backgroundColor: 'var(--accent-primary)',
                        color: 'var(--text-inverse)',
                        opacity: 0.8
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex-1 text-center py-2 px-4 rounded-lg transition-all duration-200"
                    style={{
                      backgroundColor: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
                    }}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 btn-primary text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="btn-primary text-lg px-8 py-3"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
