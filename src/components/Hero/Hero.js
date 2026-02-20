// src/components/Hero/Hero.js
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  const texts = [ 
    'Problem Solver', 
    'Rest API Specialist', 
    'Java Full Stack Developer', 
    'Quick Learner',
    'Tech Enthusiast',
    'Team Lead'
  ];

  useEffect(() => {
    setIsVisible(true);

    // Clean particles.js configuration - more subtle
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { 
            value: 50, 
            density: { enable: true, value_area: 800 } 
          },
          color: { value: "#3b82f6" },
          shape: { 
            type: "circle"
          },
          opacity: { 
            value: 0.15, 
            random: false,
          },
          size: { 
            value: 2, 
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#3b82f6",
            opacity: 0.1,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { 
              enable: true, 
              mode: "grab"
            },
            onclick: { enable: false },
            resize: true
          },
          modes: {
            grab: { distance: 200, line_linked: { opacity: 0.3 } }
          }
        },
        retina_detect: true
      });
    }

    // Text rotation
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        duration: 0.6
      }
    }
  };

  return (
    <section 
      id="hero" 
      className="hero"
      ref={heroRef}
    >
      <div id="particles-js" className="particles-container"></div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="hero-text">
            {/* Greeting - Minimal */}
            <motion.span 
              className="hero-greeting"
              variants={itemVariants}
            >
              👋 Hello, I'm
            </motion.span>
            
            {/* Name - Clean typography */}
            <motion.h1 variants={itemVariants}>
              Ambika Prasad Parida
            </motion.h1>
            
            {/* Animated Title - Simple underline effect */}
            <motion.div 
              className="hero-title-wrapper"
              variants={itemVariants}
            >
              <span className="hero-title-prefix">A</span>
              <div className="hero-title-animation">
                <span className="typed-text">
                  {texts[currentTextIndex]}
                </span>
                <span className="cursor">|</span>
              </div>
            </motion.div>

            {/* Description - Clean and concise */}
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Full-stack developer with 3+ years of experience crafting scalable 
              applications. I turn complex problems into elegant, user-friendly solutions.
            </motion.p>

            {/* Stats - Simplified */}
            <motion.div 
              className="hero-stats"
              variants={itemVariants}
            >
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </motion.div>

            {/* Buttons - Including Resume Download */}
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('projects')}
              >
                View Work
                <i className="bx bx-right-arrow-alt"></i>
              </motion.button>
              
              <motion.a 
                href="/assets/pdf/Resume.pdf" 
                className="btn btn-outline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-download"></i>
                Resume
              </motion.a>
              
              <motion.button 
                className="btn btn-outline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </motion.button>
            </motion.div>

            {/* Social Links - Minimal */}
            <motion.div 
              className="hero-social"
              variants={itemVariants}
            >
              <div className="social-links">
                <motion.a 
                  href="https://github.com/amk-18/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-link"
                  aria-label="GitHub"
                >
                  <i className="bx bxl-github"></i>
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/ambika-prasad-parida-7b07501ba/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <i className="bx bxl-linkedin"></i>
                </motion.a>
                
                <motion.a 
                  href="https://wa.me/917327838578" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-link"
                  aria-label="WhatsApp"
                >
                  <i className="bx bxl-whatsapp"></i>
                </motion.a>
                
                <motion.a 
                  href="mailto:ambikaparida08@gmail.com" 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-link"
                  aria-label="Email"
                >
                  <i className="bx bx-envelope"></i>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Profile Image - Clean circular design */}
          <motion.div 
            className="hero-image-wrapper"
            variants={imageVariants}
          >
            <div className="profile-image-container">
              <div className="profile-image-inner">
                <img 
                  src="/assets/img/ambika1.jpeg" 
                  alt="Ambika Prasad Parida" 
                  className="profile-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x400?text=Ambika';
                  }}
                />
              </div>
              
              {/* Simple decorative elements */}
              <div className="profile-dot-pattern"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Minimal */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <button 
          onClick={() => scrollToSection('about')}
          className="scroll-down"
          aria-label="Scroll down"
        >
          <span>Scroll</span>
          <i className="bx bx-chevron-down"></i>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;