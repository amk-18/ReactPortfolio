// src/components/Projects/Projects.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Journey Builder',
      category: 'web',
      description: 'A comprehensive platform for managing customer communication workflows across multiple channels.',
      image: '/assets/img/journey1.png',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript'],
      links: {
        github: 'https://github.com/amk-18/journey-builder',
        demo: '#'
      }
    },
    {
      id: 2,
      title: 'LIS Machine Integration',
      category: 'api',
      description: 'Seamless integration of diagnostic machines with Laboratory Information Systems using HL7 and ASTM protocols.',
      image: '/assets/img/projects/lis-integration.jpg',
      technologies: ['Java', 'HL7', 'ASTM', 'MySQL'],
      links: {
        github: 'https://github.com/amk-18/lis-integration',
        demo: '#'
      }
    },
    {
      id: 3,
      title: 'PDF Generation APIs',
      category: 'automation',
      description: 'Automated PDF creation from large datasets using JSON input and Apache PDFBox.',
      image: '/assets/img/projects/pdf-generation.jpg',
      technologies: ['Java', 'JSP', 'Apache PDFBox', 'MySQL'],
      links: {
        github: 'https://github.com/amk-18/pdf-generation',
        demo: '#'
      }
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'api', label: 'API Integration' },
    { key: 'automation', label: 'Automation' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>Explore my projects showcasing my expertise in system integrations, automation, and application development.</p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <motion.button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <i className="bx bxl-github"></i>
                    </a>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;