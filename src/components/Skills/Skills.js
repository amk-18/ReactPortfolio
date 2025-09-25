// src/components/Skills/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      color: "#3B82F6",
      skills: [
        { name: "Java", percentage: 95 },
        { name: "JavaScript", percentage: 90 },
        { name: "Python", percentage: 85 }
      ]
    },
    {
      title: "Backend & APIs",
      icon: "⚙️",
      color: "#10B981",
      skills: [
        { name: "Node.js", percentage: 90 },
        { name: "Spring Boot", percentage: 88 },
        { name: "RESTful APIs", percentage: 95 },
        { name: "JUnit", percentage: 85 }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      color: "#8B5CF6",
      skills: [
        { name: "Relational DBs (SQL)", percentage: 90 },
        { name: "MongoDB", percentage: 85 },
        { name: "Cosmos DB", percentage: 80 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      color: "#F59E0B",
      skills: [
        { name: "Kubernetes", percentage: 85 },
        { name: "AWS", percentage: 82 },
        { name: "EC2", percentage: 88 },
        { name: "Kafka", percentage: 90 }
      ]
    },
    {
      title: "Data Science & ML",
      icon: "📊",
      color: "#EF4444",
      skills: [
        { name: "Tableau", percentage: 80 },
        { name: "Google Colab", percentage: 78 }
      ]
    },
    {
      title: "Tools & Monitoring",
      icon: "🛠️",
      color: "#06B6D4",
      skills: [
        { name: "Postman", percentage: 90 },
        { name: "Git", percentage: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
          <p>A comprehensive overview of my technical expertise and proficiency levels</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-card-header" style={{ borderBottomColor: category.color }}>
                <span className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div 
                        className="progress-fill"
                        style={{ backgroundColor: category.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 + categoryIndex * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="summary-item">
            <span className="summary-number">6</span>
            <span className="summary-label">Skill Categories</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">18</span>
            <span className="summary-label">Technologies</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">87%</span>
            <span className="summary-label">Average Proficiency</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;