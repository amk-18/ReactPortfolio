// src/components/Skills/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Java', level: 92, icon: 'bx bxl-java' },
    { name: 'JavaScript', level: 78, icon: 'bx bxl-javascript' },
    { name: 'Python', level: 75, icon: 'bx bxl-python' },
    { name: 'MySQL', level: 90, icon: 'bx bx-data' },
    { name: 'Linux', level: 80, icon: 'bx bxl-linux' },
    { name: 'HTML/CSS', level: 85, icon: 'bx bxl-html5' },
    { name: 'Git', level: 85, icon: 'bx bxl-git' },
    { name: 'API Design', level: 87, icon: 'bx bx-api' }
  ];

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
          <p>Here are the key technical skills I bring to your projects.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="skills-extra">
          <h3>Additional Technologies</h3>
          <div className="tech-tags">
            {['Spring Boot', 'Hibernate', 'REST APIs', 'Docker', 'AWS', 'Microservices', 
              'Asterisk', 'React', 'Node.js', 'MongoDB'].map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;