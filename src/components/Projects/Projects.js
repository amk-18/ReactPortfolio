// src/components/Projects/Projects.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('professional');
  
  const projectCategories = [
    { key: 'professional', label: 'Professional Projects', icon: '💼' },
    { key: 'personal', label: 'Personal Projects', icon: '🚀' }
  ];

  const professionalProjects = [
    {
      id: 1,
      title: 'Journey Builder',
      type: 'Workflow Management System',
      description: 'A comprehensive platform for managing customer communication workflows across multiple channels with customizable automation rules and real-time analytics. Developed reusable generic IVR system that reduced development time by 40%.',
      images: [
        '/assets/img/journey1.png',
        '/assets/img/journey2.png', 
        '/assets/img/journey3.png'
      ],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'REST APIs', 'IVR'],
      features: [
        'Multi-channel communication management (IVR, WhatsApp, Email)',
        'Customizable workflow automation with scheduling',
        'Real-time analytics dashboard',
        'Reusable generic IVR components',
        'Data integration through XLSX file uploads',
        'Dynamic report generation'
      ],
      achievements: '40% development time reduction',
      impact: 'Recognized as "Fresher of the Month" for this innovation'
    },
    {
      id: 2,
      title: 'Unified Communications Portal',
      type: 'Backend System',
      description: 'Architected a consolidated Spring Boot portal to replace 3 disparate systems, eliminating context-switching and improving agent productivity by 25%. Automated end-to-end call workflows by orchestrating external APIs.',
      image: '/assets/img/projects/communications-portal.jpg',
      technologies: ['Spring Boot', 'AWS ECS', 'RDS', 'SQS', 'MySQL', 'REST APIs'],
      features: [
        'Scalable microservices architecture',
        'Real-time status tracking with webhooks',
        'AWS cloud deployment with ECS',
        '10,000+ daily transactions handling',
        'Advanced exception handling and logging'
      ],
      achievements: '25% productivity improvement'
    },
    {
      id: 3,
      title: 'Banking Customer Journey Automation',
      type: 'Automation Engine',
      description: 'Designed backend engine for multi-channel customer journey platform. Developed Python service to automate post-call logic and personalized communication sequences for major banking clients.',
      image: '/assets/img/projects/banking-automation.jpg',
      technologies: ['Spring Boot', 'Python', 'Hibernate', 'MySQL', 'SSL/TLS', 'mTLS'],
      features: [
        'Multi-channel integration (IVR, SMS, WhatsApp)',
        'Secure mutual TLS authentication',
        'Real-time data synchronization with banking systems',
        '70% reduction in manual follow-up',
        'Webhook callback processing'
      ],
      achievements: 'Acquired 1 new banking client'
    },
    {
      id: 4,
      title: 'Scalable IVR System for Power Discom',
      type: 'Telephony System',
      description: 'Developed multi-tenant IVR system handling customer queries for TPWODL and TPCODL power units. Optimized call flows and database queries for improved efficiency.',
      image: '/assets/img/projects/ivr-system.jpg',
      technologies: ['Java', 'AWS EC2', 'MySQL', 'IVR', 'Telephony'],
      features: [
        'Multi-tenant architecture for different power units',
        'Optimized database queries and call flows',
        'AWS EC2 deployment with auto-scaling',
        '20% customer service efficiency improvement',
        '99.9% system uptime'
      ],
      achievements: '15% faster complaint resolution'
    },
    {
      id: 5,
      title: 'LIS Machine Integration',
      type: 'Healthcare Integration',
      description: 'Seamless integration of diagnostic machines with Laboratory Information Systems using HL7 and ASTM protocols, automating 10,000+ monthly test results.',
      image: '/assets/img/projects/lis-integration.jpg',
      technologies: ['Java', 'HL7', 'ASTM', 'MySQL', 'Laboratory Systems'],
      features: [
        'HL7/ASTM protocol integration for 20+ machine models',
        'Automated processing of 10,000+ monthly test results',
        'Advanced error handling and data validation',
        '60% reduction in manual data entry errors',
        'Real-time test result synchronization'
      ],
      achievements: '60% error reduction'
    },
    {
      id: 6,
      title: 'PDF Generation APIs',
      type: 'Automation Tool',
      description: 'Automated PDF creation from large datasets using JSON input and Apache PDFBox. Developed JSP-based system for accurate report generation.',
      image: '/assets/img/projects/pdf-generation.jpg',
      technologies: ['Java', 'JSP', 'Apache PDFBox', 'MySQL', 'JSON Processing'],
      features: [
        'Batch PDF generation from JSON datasets',
        'Customizable PDF templates and layouts',
        'JSP-based user interface for configuration',
        '40% reduction in manual report processing',
        'High-performance batch processing'
      ],
      achievements: '40% processing time reduction'
    }
  ];

  const personalProjects = [
    {
      id: 1,
      title: 'WeCode - Coding Practice Platform',
      type: 'Full Stack Application (In Progress)',
      description: 'A comprehensive coding platform where developers can practice coding challenges, participate in contests, and improve their programming skills with real-time code execution and progress tracking.',
      image: '/assets/img/projects/wecode-platform.jpg',
      technologies: ['Spring Boot', 'React', 'MySQL', 'Docker', 'AWS', 'Real-time Execution'],
      features: [
        'Real-time code execution engine',
        'Multiple programming languages support',
        'Code submission and evaluation system',
        'User progress tracking and analytics',
        'Contest hosting and leaderboards',
        'Docker containerization for security'
      ],
      status: 'In Development',
      github: 'https://github.com/amk-18/wecode.git',
      demo: '#'
    }
  ];

  const currentProjects = activeCategory === 'professional' ? professionalProjects : personalProjects;

  // Image carousel component for projects with multiple images
  const ProjectImageCarousel = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    if (!project.images) {
      return (
        <div className="project-image">
          <img src={project.image || '/assets/img/projects/default-project.jpg'} alt={project.title} />
          <div className="project-overlay">
            <div className="project-type">{project.type}</div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                  <i className="bx bxl-github"></i>
                </a>
              )}
              {activeCategory === 'professional' && project.achievements && (
                <span className="achievement-badge" title="Key Achievement">
                  <i className="bx bx-trophy"></i>
                </span>
              )}
              {project.status && (
                <span className="status-badge">{project.status}</span>
              )}
            </div>
          </div>
        </div>
      );
    }

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
      <div className="project-image-carousel">
        <div className="carousel-container">
          <img 
            src={project.images[currentImageIndex]} 
            alt={`${project.title} - View ${currentImageIndex + 1}`} 
          />
          
          {project.images.length > 1 && (
            <>
              <button className="carousel-btn prev" onClick={prevImage}>
                <i className="bx bx-chevron-left"></i>
              </button>
              <button className="carousel-btn next" onClick={nextImage}>
                <i className="bx bx-chevron-right"></i>
              </button>
              
              <div className="carousel-indicators">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
              
              <div className="carousel-counter">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}
          
          <div className="project-overlay">
            <div className="project-type">{project.type}</div>
            <div className="project-links">
              {activeCategory === 'professional' && project.achievements && (
                <span className="achievement-badge" title="Key Achievement">
                  <i className="bx bx-trophy"></i>
                </span>
              )}
              {project.images.length > 1 && (
                <span className="gallery-badge" title="Multiple Views">
                  <i className="bx bx-images"></i>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Showcasing my professional work at Ikontel Solutions and personal initiatives that demonstrate technical expertise</p>
        </div>

        <div className="project-categories">
          {projectCategories.map(category => (
            <motion.button
              key={category.key}
              className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="category-icon">{category.icon}</span>
              {category.label}
              <span className="project-count">
                ({category.key === 'professional' ? professionalProjects.length : personalProjects.length})
              </span>
            </motion.button>
          ))}
        </div>

        <div className="projects-grid">
          {currentProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <ProjectImageCarousel project={project} />
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {activeCategory === 'professional' && project.achievements && (
                    <div className="achievement-pill">{project.achievements}</div>
                  )}
                </div>
                
                <p className="project-description">{project.description}</p>
                
                {project.impact && (
                  <div className="project-impact">
                    <i className="bx bx-award"></i>
                    <span>{project.impact}</span>
                  </div>
                )}
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {activeCategory === 'personal' && project.github && (
                  <div className="project-actions">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                      <i className="bx bxl-github"></i>
                      View Source Code
                    </a>
                  </div>
                )}

                {activeCategory === 'professional' && (
                  <div className="professional-badge">
                    <i className="bx bx-buildings"></i>
                    Developed at Ikontel Solutions
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="projects-summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="summary-item">
            <span className="summary-number">6</span>
            <span className="summary-label">Enterprise Projects</span>
            <span className="summary-subtext">Delivered</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">15+</span>
            <span className="summary-label">REST APIs</span>
            <span className="summary-subtext">Developed</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">10K+</span>
            <span className="summary-label">Transactions</span>
            <span className="summary-subtext">Daily Handling</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">40%</span>
            <span className="summary-label">Efficiency Gain</span>
            <span className="summary-subtext">Average Improvement</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;