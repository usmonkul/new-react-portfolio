import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div 
              className="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl font-bold shadow-lg"
              style={{
                background: `linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))`,
                color: 'var(--text-inverse)'
              }}
            >
              K
            </div>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="btn-primary text-lg px-8 py-3"
            >
              {t('hero.viewWork')}
            </a>
            <a
              href="#contact"
              className="btn-secondary text-lg px-8 py-3"
            >
              {t('hero.getInTouch')}
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <a 
              href="#about" 
              className="transition-all duration-200 hover:opacity-80"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
