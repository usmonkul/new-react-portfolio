import myImage from '../assets/me-sticker.png'
import Button from './Button'
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="section-padding pt-30 md:pt-20 min-h-screen flex flex-col-reverse md:flex-row items-center w-full mx-auto px-5 md:px-30">
      <div className="w-full md:w-1/2 flex flex-col md:items-start text-left">
        <p className='mb-4 text-xl font-[400]' style={{ color: 'var(--accent-primary)' }}>{t('hero.greeting')}</p>
        <h1 className='text-5xl md:text-7xl font-[700]' style={{ color: 'var(--text-primary)' }}>{t('hero.title')}</h1>
        <p className='text-4xl md:text-6xl font-[700] mt-2.5 line-height-[0.9]' style={{ color: 'var(--text-primary)' }}>{t('hero.titleSecondary')}</p>
        <p className='text-sm md:text-base max-w-[540px] mt-5' style={{ color: 'var(--text-secondary)' }}>
          {t('hero.subtitle')}
        </p>
        <div className="mt-8 flex gap-4">
          <Button variant="primary" size="lg" href="#projects">
            {t('hero.viewWork')}
          </Button>
          <Button variant="outline" size="lg" href="#cta">
            {t('hero.getInTouch')}
          </Button>
        </div>
      </div>

      <img src={myImage} alt="Usmon Khakim's image" className="w-full md:w-1/2" />
    </section>
  );
};

export default Hero;



{/* <div className="mt-16 animate-bounce">
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
</div> */}
