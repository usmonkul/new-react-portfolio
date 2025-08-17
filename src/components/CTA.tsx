import { useState, useEffect } from 'react';
import Button from './Button';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('cta');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" className="section-padding py-20 px-5 md:px-30 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="numbered-heading" style={{ color: 'var(--accent-primary)' }}>
            What's Next?
          </h2>
        </div>

        {/* Main Heading */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Get In Touch
          </h3>
        </div>

        {/* Descriptive Paragraph */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            If you need someone who is punctual, outgoing and eager to learn. I'm currently looking for new opportunities, my inbox is always open. I'll try my best to get back to you!
          </p>
        </div>

        {/* Call to Action Button */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button 
            variant="outline" 
            size="lg" 
            href="mailto:usmonhakimov1999@gmail.com"
            className="text-lg px-12 py-4"
          >
            Say Hello
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
