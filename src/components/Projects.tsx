import { useState, useEffect } from 'react';
import data from '../data/data';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(10);
  const [filteredProjects, setFilteredProjects] = useState(data.projects);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(data.projects);
    } else {
      setFilteredProjects(data.projects.filter(project => project.category === selectedCategory));
    }
    setVisibleCount(10); // Reset visible count when filtering
  }, [selectedCategory]);

  const categories = ['all', 'frontend', 'fullstack', 'backend', 'design', 'other'];
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section id="projects" className="section-padding py-20 px-5 md:px-30 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="numbered-heading" style={{ color: 'var(--text-primary)' }}>
            Some Things I've Built
          </h2>
        </div>

        {/* Category Filter */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-md text-sm font-mono transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-500 text-navy'
                    : 'bg-transparent text-gray-400 border border-gray-600 hover:border-gray-400'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? 'var(--accent-primary)' : 'transparent',
                  color: selectedCategory === category ? 'var(--navy)' : 'var(--text-muted)',
                  borderColor: selectedCategory === category ? 'var(--accent-primary)' : 'var(--border-primary)'
                }}
              >
                {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project) => (
                             <div
                 key={project.id}
                 className="project-card group relative p-6 rounded-lg transition-all duration-300 hover:scale-105 flex flex-col h-full"
                 style={{
                   backgroundColor: 'var(--bg-card)',
                   border: '1px solid var(--border-primary)'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.borderColor = 'var(--accent-primary)';
                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(100, 255, 218, 0.1)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.borderColor = 'var(--border-primary)';
                   e.currentTarget.style.boxShadow = 'none';
                 }}
               >
                 {/* Card Header */}
                 <div className="flex justify-between items-start mb-4">
                   <div 
                     className="w-10 h-10 rounded-lg flex items-center justify-center"
                     style={{ color: 'var(--accent-primary)' }}
                   >
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                     </svg>
                   </div>
                   <div className="flex space-x-3">
                     <a
                       href={project.github}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                       style={{ color: 'var(--text-muted)' }}
                       onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                       onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                     >
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                       </svg>
                     </a>
                     <a
                       href={project.external}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                       style={{ color: 'var(--text-muted)' }}
                       onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                       onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                     >
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                       </svg>
                     </a>
                   </div>
                 </div>

                 {/* Project Title */}
                 <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                   {project.title}
                 </h3>

                 {/* Project Description */}
                 <p className="text-sm mb-6 leading-relaxed flex-grow" style={{ color: 'var(--text-secondary)' }}>
                   {project.info}
                 </p>

                 {/* Tech Stack - Now at bottom */}
                 <div className="flex flex-wrap gap-1 mt-auto">
                   {project.tech.map((tech) => (
                     <span
                       key={tech}
                       className="text-xs font-mono px-2 py-1 rounded"
                       style={{ 
                         color: 'var(--text-muted)',
                         backgroundColor: 'var(--bg-tertiary)'
                       }}
                     >
                       {tech}
                     </span>
                   ))}
                 </div>
               </div>
            ))}
          </div>

          {/* Show More Button */}
          {visibleProjects.length < filteredProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={handleShowMore}
                className="px-8 py-3 rounded-lg font-mono transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--accent-primary)',
                  border: '1px solid var(--accent-primary)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--green-tint)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Show More
              </button>
            </div>
          )}

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
