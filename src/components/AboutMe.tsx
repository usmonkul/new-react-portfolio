import { useState, useEffect } from 'react';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  const techStack = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'HTML/CSS',
    'Tailwind CSS', 'Git', 'MongoDB', 'PostgreSQL', 'Express.js', 'Next.js',
    'Redux', 'GraphQL', 'Docker', 'AWS', 'Firebase', 'Jest', 'Cypress'
  ];

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
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="numbered-heading" style={{ color: 'var(--text-primary)' }}>
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Hello! I'm Usmon, a passionate frontend engineer based in Uzbekistan. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                My journey in web development started back in 2019 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Fast-forward to today, and I've had the privilege of building software for an <span style={{ color: 'var(--accent-primary)' }}>advertising agency</span>, a <span style={{ color: 'var(--accent-primary)' }}>startup</span>, a <span style={{ color: 'var(--accent-primary)' }}>huge corporation</span>, and <span style={{ color: 'var(--accent-primary)' }}>freelance projects</span>.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
            </div>
          </div>

          {/* Tech Stack Skills */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
              Technologies I've been working with:
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="skill-item flex items-center space-x-2 p-2 rounded-md transition-all duration-300 hover:bg-opacity-20"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-primary)',
                    width: 'fit-content'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--green-tint)';
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
                    e.currentTarget.style.borderColor = 'var(--border-primary)';
                  }}
                >
                  <div 
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  ></div>
                  <span 
                    className="text-xs font-mono"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-lg border border-green-500/20">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent-primary)' }}>
              What I'm Currently Up To
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I'm currently working on building accessible, inclusive products and digital experiences at{' '}
              <span style={{ color: 'var(--accent-primary)' }}>Upwork</span>. I'm also actively seeking new opportunities 
              where I can make a meaningful impact and continue growing as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
