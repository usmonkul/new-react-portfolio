import myImage from '../assets/me-sticker.png'
import Button from './Button'

const Hero = () => {

  return (
    <section id="hero" className="section-padding pt-30 md:pt-20 min-h-screen flex flex-col-reverse md:flex-row items-center w-full mx-auto px-5 md:px-30">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <p className='mb-4 text-xl font-[400] text-[#64ffda]'>Hi, my name is</p>
        <h1 className='text-7xl font-[700] text-white'>Usmon Khakim</h1>
        <p className='text-6xl font-[700] text-slate mt-2.5 line-height-[0.9]'>I build things for the web.</p>
        <p className='max-w-[540px] text-[rgb(136, 146, 176)] mt-5'>
         I'm a Front-end engineer specializing in building interactive and responsive websites for the web. Currently,
         I am focused on building accessible single page applications using React and other new technologies.
        </p>
        <div className="mt-8 flex gap-4">
          <Button variant="primary" size="lg">
            View My Work
          </Button>
          <Button variant="outline" size="lg" href="#contact">
            Reach at me!
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
