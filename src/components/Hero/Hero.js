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
    'Software Developer', 
    'Problem Solver', 
    'API Specialist', 
    'Full Stack Developer', 
    'Quick Learner',
    'Tech Enthusiast',
    'UI/UX Designer'
  ];

  useEffect(() => {
    setIsVisible(true);

    // Enhanced particles.js configuration
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { 
            value: 120, 
            density: { enable: true, value_area: 800 } 
          },
          color: { value: "#10b981" },
          shape: { 
            type: ["circle", "triangle", "polygon"],
            polygon: { nb_sides: 6 }
          },
          opacity: { 
            value: 0.3, 
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1 }
          },
          size: { 
            value: 4, 
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.1 }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#8b5cf6",
            opacity: 0.2,
            width: 1.5
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: { enable: true, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { 
              enable: true, 
              mode: "grab",
              parallax: { enable: true, force: 60, smooth: 10 }
            },
            onclick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            grab: { distance: 200, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }

    // Text rotation with typing effect
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  // Mouse move parallax effect
  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
      
      setMousePosition({ x, y });
    }
  };

  // Mouse leave reset
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.4,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      id="hero" 
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
            {/* Greeting Badge */}
            <motion.span 
              className="hero-greeting"
              variants={itemVariants}
            >
              👋 Welcome to my portfolio
            </motion.span>
            
            {/* Name with animation */}
            <motion.h1 variants={itemVariants}>
              Ambika Prasad Parida
            </motion.h1>
            
            {/* Animated Title */}
            <motion.div 
              className="hero-title-wrapper"
              variants={itemVariants}
            >
              <span className="hero-title-prefix">I'm a</span>
              <div className="hero-title-animation">
                <span className="typed-text">
                  {texts[currentTextIndex]}
                </span>
                <span className="cursor">|</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Crafting innovative solutions through code with 3+ years of experience 
              in building scalable applications. Specialized in creating seamless 
              user experiences and solving complex problems.
            </motion.p>

            {/* Stats Section */}
            <motion.div 
              className="hero-stats"
              variants={itemVariants}
            >
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                <i className="bx bx-code-alt"></i>
                <span>View My Work</span>
                <i className="bx bx-right-arrow-alt"></i>
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                <i className="bx bx-envelope"></i>
                <span>Contact Me</span>
              </motion.a>

              <motion.a 
                href="/assets/pdf/Resume.pdf" 
                className="btn btn-accent"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-download"></i>
                <span>Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="hero-social"
              variants={itemVariants}
            >
              <span className="social-label">Connect with me</span>
              <div className="social-links">
                <motion.a 
                  href="https://github.com/amk-18/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-link github"
                >
                  <i className="bx bxl-github"></i>
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/ambika-prasad-parida-7b07501ba/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-link linkedin"
                >
                  <i className="bx bxl-linkedin"></i>
                </motion.a>
                
                <motion.a 
                  href="https://wa.me/917327838578" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-link whatsapp"
                >
                  <i className="bx bxl-whatsapp"></i>
                </motion.a>
                
                <motion.a 
                  href="https://www.hackerrank.com/ambikaparida08" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-link hackerrank"
                >
                  <i className="bx bx-code-alt"></i>
                </motion.a>

                <motion.a 
                  href="mailto:ambikaparida08@gmail.com" 
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-link email"
                >
                  <i className="bx bx-envelope"></i>
                </motion.a>

                {/* <motion.a 
                  href="https://twitter.com/yourhandle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-link twitter"
                >
                  <i className="bx bxl-twitter"></i>
                </motion.a> */}
              </div>
            </motion.div>
          </div>

          {/* Profile Image with Floating Elements */}
          <motion.div 
            className="hero-image-wrapper"
            variants={imageVariants}
            whileHover="hover"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          >
            <div className="profile-image-container">
              <div className="profile-image-inner">
                <img 
                  src="/assets/img/ambika1.jpeg" 
                  alt="Ambika Prasad Parida" 
                  className="profile-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x400?text=Ambika+Prasad+Parida';
                  }}
                />
              </div>
              <div className="profile-image-border"></div>
              
              {/* Floating Elements */}
              <motion.div 
                className="floating-element element-1"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <i className="bx bx-code-alt"></i>
              </motion.div>
              
              <motion.div 
                className="floating-element element-2"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  rotate: [0, -15, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <i className="bx bx-brain"></i>
              </motion.div>
              
              <motion.div 
                className="floating-element element-3"
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 20, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <i className="bx bx-rocket"></i>
              </motion.div>
            </div>

            {/* Achievement Badge */}
            <motion.div 
              className="achievement-badge"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              <span className="badge-text">Top Rated</span>
              <span className="badge-icon">🏆</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.a 
          href="#about" 
          className="scroll-down"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Scroll Down</span>
          <div className="arrow">
            <i className="bx bx-chevron-down"></i>
          </div>
        </motion.a>
      </motion.div>

      {/* Background Decorative Elements */}
      <div className="hero-background-elements">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;