import { motion } from 'framer-motion';
import myImage from '../assets/me-sticker.png'
import Button from './Button'
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)"
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -15,
      x: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      x: 0
    },
    hover: {
      scale: 1.05,
      rotateY: 5
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
    hover: {
      y: -5,
      scale: 1.05
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10]
    }
  };

  return (
    <motion.section 
      id="hero" 
      className="section-padding pt-30 md:pt-20 min-h-screen flex flex-col-reverse md:flex-row items-center w-full mx-auto px-5 md:px-30"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="w-full md:w-1/2 flex flex-col md:items-start text-left"
        variants={containerVariants}
      >
        <motion.p 
          className='mb-4 text-xl font-[400]' 
          style={{ color: 'var(--accent-primary)' }}
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t('hero.greeting')}
        </motion.p>
        
        <motion.h1 
          className='text-5xl md:text-7xl font-[700]' 
          style={{ color: 'var(--text-primary)' }}
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p 
          className='text-4xl md:text-6xl font-[700] mt-2.5 line-height-[0.9]' 
          style={{ color: 'var(--text-primary)' }}
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t('hero.titleSecondary')}
        </motion.p>
        
        <motion.p 
          className='text-sm md:text-base max-w-[540px] mt-5' 
          style={{ color: 'var(--text-secondary)' }}
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div 
          className="mt-8 flex gap-4"
          variants={containerVariants}
        >
          <motion.div 
            variants={buttonVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Button variant="primary" size="lg" href="#projects">
              {t('hero.viewWork')}
            </Button>
          </motion.div>
          <motion.div 
            variants={buttonVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Button variant="outline" size="lg" href="#cta">
              {t('hero.getInTouch')}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="w-full md:w-1/2 relative"
        variants={imageVariants}
        whileHover="hover"
        transition={{ 
          duration: 1, 
          ease: "easeOut",
          type: "spring" as const,
          stiffness: 100,
          damping: 15
        }}
      >
        <motion.img 
          src={myImage} 
          alt="Usmon Khakim's image" 
          className="w-full relative z-10"
          variants={floatingVariants}
          animate="float"
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating background elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20"
          style={{ backgroundColor: 'var(--accent-primary)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-15"
          style={{ backgroundColor: 'var(--accent-secondary)' }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.section>
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
