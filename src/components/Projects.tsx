import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSafeData } from '../data/data';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(10);
  const data = getSafeData();
  const [filteredProjects, setFilteredProjects] = useState(() => {
    // Safety check to prevent undefined errors
    if (!data?.projects || !Array.isArray(data.projects)) {
      return [];
    }
    return data.projects;
  });
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };

  const techTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      }
    }
  };

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
    // Safety check to prevent undefined errors
    if (!data?.projects || !Array.isArray(data.projects)) {
      setFilteredProjects([]);
      return;
    }
    
    if (selectedCategory === 'all') {
      setFilteredProjects(data.projects);
    } else {
      setFilteredProjects(data.projects.filter((project: any) => project.category === selectedCategory));
    }
    setVisibleCount(10); // Reset visible count when filtering
  }, [selectedCategory, data.projects]);

  // Safety check to prevent errors when data is not loaded
  if (!data.projects || data.projects.length === 0) {
    return (
      <section id="projects" className="section-padding py-20 px-5 md:px-30 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p style={{ color: 'var(--text-secondary)' }}>Loading projects data...</p>
          </div>
        </div>
      </section>
    );
  }

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
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="numbered-heading" style={{ color: 'var(--text-primary)' }}>
            {t('work.title')}
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <AnimatePresence>
                            {visibleProjects.map((project: any, index: number) => (
              <motion.div
                key={project.id}
                className="project-card group relative p-6 rounded-lg flex flex-col h-full"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-primary)'
                }}
                variants={cardVariants}
                whileHover="hover"
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{
                  delay: index * 0.1,
                  type: "spring" as const,
                  stiffness: 100,
                  damping: 15
                }}
              >
                {/* Card Header */}
                <div className="flex justify-between items-start mb-4">
                  <motion.div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ color: 'var(--accent-primary)' }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                    </svg>
                  </motion.div>
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                      style={{ color: 'var(--text-muted)' }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                      style={{ color: 'var(--text-muted)' }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
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
                <motion.div 
                  className="flex flex-wrap gap-1 mt-auto"
                  variants={techTagVariants}
                >
                                      {project.tech.map((tech: string, techIndex: number) => (
                    <motion.span
                      key={tech}
                      className="text-xs font-mono px-2 py-1 rounded"
                      style={{ 
                        color: 'var(--text-muted)',
                        backgroundColor: 'var(--bg-tertiary)'
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: (index * 0.1) + (techIndex * 0.05),
                        type: "spring" as const,
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {visibleProjects.length < filteredProjects.length && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              onClick={handleShowMore}
              className="px-8 py-3 rounded-lg font-mono transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--accent-primary)',
                border: '1px solid var(--accent-primary)'
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'var(--green-tint)',
                boxShadow: '0 5px 15px rgba(100, 255, 218, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t('work.viewAll')}
            </motion.button>
          </motion.div>
        )}

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
