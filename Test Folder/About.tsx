const About = () => {
  return (
    <section 
      id="about" 
      className="section-padding"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              About Me
            </h2>
            <div 
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div>
              <h3 
                className="text-2xl font-semibold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Passionate Developer & Problem Solver
              </h3>
              <p 
                className="mb-6 leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                I'm a full-stack developer with a passion for creating innovative web solutions. 
                With expertise in modern technologies like React, TypeScript, and Node.js, 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p 
                className="mb-6 leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              
              {/* Key Points */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  ></div>
                  <span style={{ color: 'var(--text-secondary)' }}>Full-stack development expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  ></div>
                  <span style={{ color: 'var(--text-secondary)' }}>Modern web technologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  ></div>
                  <span style={{ color: 'var(--text-secondary)' }}>Problem-solving mindset</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  ></div>
                  <span style={{ color: 'var(--text-secondary)' }}>Continuous learning</span>
                </div>
              </div>
            </div>

            {/* Skills Preview */}
            <div 
              className="card p-8 rounded-2xl"
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              <h4 
                className="text-xl font-semibold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Technical Skills
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="p-4 rounded-lg shadow-sm"
                  style={{ backgroundColor: 'var(--bg-tertiary)' }}
                >
                  <h5 
                    className="font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >Frontend</h5>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >React, TypeScript, Tailwind CSS</p>
                </div>
                <div 
                  className="p-4 rounded-lg shadow-sm"
                  style={{ backgroundColor: 'var(--bg-tertiary)' }}
                >
                  <h5 
                    className="font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >Backend</h5>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >Node.js, Express, MongoDB</p>
                </div>
                <div 
                  className="p-4 rounded-lg shadow-sm"
                  style={{ backgroundColor: 'var(--bg-tertiary)' }}
                >
                  <h5 
                    className="font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >Tools</h5>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >Git, Docker, AWS</p>
                </div>
                <div 
                  className="p-4 rounded-lg shadow-sm"
                  style={{ backgroundColor: 'var(--bg-tertiary)' }}
                >
                  <h5 
                    className="font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >Other</h5>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >REST APIs, GraphQL, Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
