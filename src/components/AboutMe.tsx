import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Terminal from './Terminal';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const { t, ready } = useTranslation();

  // Fallback tech stack in case translations aren't ready
  const fallbackTechStack = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'HTML/CSS',
    'Tailwind CSS', 'Git', 'MongoDB', 'PostgreSQL', 'Express.js', 'Next.js',
    'Redux', 'GraphQL', 'Docker', 'AWS', 'Firebase', 'Jest', 'Cypress'
  ];

  let techStack = ready ? fallbackTechStack : fallbackTechStack;

  // Safety check to ensure techStack is always an array
  if (!Array.isArray(techStack) || techStack.length === 0) {
    console.warn('Tech stack not properly loaded, using fallback');
    techStack = fallbackTechStack;
  }

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

  const skillItemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      rotateX: 5,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)"
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

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding py-20 px-5 md:px-30 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          variants={textVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2 className="numbered-heading" style={{ color: 'var(--text-primary)' }}>
            {t('about.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div 
            className="space-y-6"
            variants={textVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <motion.p 
              className="text-lg leading-relaxed" 
              style={{ color: 'var(--text-secondary)' }}
              variants={textVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {t('about.desc1')}
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed" 
              style={{ color: 'var(--text-secondary)' }}
              variants={textVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {t('about.desc2')}
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed" 
              style={{ color: 'var(--text-secondary)' }}
              variants={textVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {t('about.desc3')}
            </motion.p>
          </motion.div>

          {/* Tech Stack Skills */}
          <motion.div 
            className=""
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6" 
              style={{ color: 'var(--text-primary)' }}
              variants={textVariants}
            >
              {t('about.techTitle')}
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              {techStack?.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="skill-item flex items-center space-x-2 p-2 rounded-md"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-primary)',
                    width: 'fit-content'
                  }}
                  variants={skillItemVariants}
                  whileHover="hover"
                  transition={{
                    delay: index * 0.05,
                    type: "spring" as const,
                    stiffness: 100,
                    damping: 15
                  }}
                >
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                    whileHover={{ scale: 1.5, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  <span 
                    className="text-xs font-mono"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {tech}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Terminal Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.button
            onClick={() => setIsTerminalOpen(true)}
            className="px-6 py-3 rounded-lg font-mono text-sm border-2 transition-all duration-300"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--accent-primary)',
              borderColor: 'var(--accent-primary)'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'var(--green-tint)',
              boxShadow: '0 5px 15px rgba(100, 255, 218, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">⚡</span>
            Open Terminal
          </motion.button>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-lg border border-green-500/20"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(100, 255, 218, 0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent-primary)' }}>
              {t('about.currentStatus')}
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('about.currentStatusDesc')}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Terminal Modal */}
      <Terminal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />
    </section>
  );
};

export default AboutMe;
