// src/components/Resume/Resume.js
import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

const Resume = () => {
  const coreCompetencies = [
    {
      category: "Backend Development",
      skills: ["Java 8+", "Spring Boot", "Microservices", "Hibernate/JPA", "JSP/Servlets", "Python"],
      icon: "⚙️"
    },
    {
      category: "Databases & Tools",
      skills: ["MySQL", "SQL Query Optimization", "JUnit", "Maven"],
      icon: "🗄️"
    },
    {
      category: "API & Protocols",
      skills: ["RESTful APIs", "SOAP", "Webhooks", "HTTP/HTTPS", "HL7", "ASTM"],
      icon: "🔗"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (EC2, ECS, S3, RDS, Lambda, SQS, CloudWatch)", "Docker", "Jenkins", "Linux CLI"],
      icon: "☁️"
    },
    {
      category: "Domain Knowledge",
      skills: ["IVR/CRM Automation", "Financial Technology (FinTech)", "Healthcare IT (LIS)"],
      icon: "🎯"
    }
  ];

  const professionalExperience = [
    {
      position: "Software Engineer",
      company: "Ikontel Solutions Pvt. Ltd., Bangalore",
      period: "Feb 2023 – Present",
      achievements: [
        "Engineered and deployed 10+ scalable microservices using Spring Boot and AWS (ECS, RDS, SQS), enhancing system modularity and reducing API response time by 20%",
        "Automated IVR and CRM workflows by developing 15+ robust REST APIs, slashing manual effort by 50% and accelerating customer query resolution by 30%",
        "Spearheaded backend integrations for major banking clients (Tata Capital, Yes Bank)",
        "Integrated 20+ diagnostic laboratory machines with LIS software via HL7/ASTM protocols, slashing data entry errors by 60% and ensuring compliance",
        "Improved system reliability by implementing advanced exception handling and logging, reducing production downtime by 15%",
        "Mentored and led a team of 4 junior developers through the full SDLC, improving team productivity and project delivery speed by 20%"
      ]
    }
  ];

  const keyProjects = [
    {
      title: "Unified Communications Portal for Automated Customer Engagement",
      technologies: "Spring Boot, AWS, MySQL, REST APIs",
      description: "Architected a consolidated Spring Boot portal to replace 3 disparate systems, eliminating context-switching and improving agent productivity by 25%",
      achievements: [
        "Automated end-to-end call workflows by orchestrating external APIs",
        "Implemented real-time status tracking using secure webhooks",
        "Deployed on scalable AWS infrastructure handling 10,000+ daily transactions"
      ]
    },
    {
      title: "Banking Customer Journey Automation Engine (Tata Capital, Yes Bank)",
      technologies: "Spring Boot, Python, Hibernate, MySQL",
      description: "Designed backend engine for multi-channel customer journey platform, contributing to acquisition of 1 new banking client",
      achievements: [
        "Developed Python service automating post-call logic, reducing manual follow-up by 70%",
        "Built secure API gateway ensuring 99.9% data accuracy",
        "Multi-channel integration (IVR, SMS, WhatsApp)"
      ]
    },
    {
      title: "Scalable IVR System for Power Discom (TPWODL)",
      technologies: "Java, AWS EC2, MySQL",
      description: "Developed multi-tenant IVR system handling customer queries for power units",
      achievements: [
        "Increased customer service efficiency by 20%",
        "Optimized call flows reducing complaint resolution time by 15%",
        "Multi-tenant architecture for different power units"
      ]
    }
  ];

  const achievements = [
    "5-Star Gold Badge in Java and SQL on HackerRank",
    "Certifications in Java, SQL, and JavaScript Proficiency",
    "Recognized as 'Fresher of the Month' for developing reusable generic IVR system"
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container">
        <div className="section-title">
          <h2>Professional Resume</h2>
          <p>My journey, skills, and accomplishments in backend development</p>
        </div>

        <div className="resume-layout">
          {/* Left Sidebar - Personal Info & Core Competencies */}
          <motion.div 
            className="resume-sidebar"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Personal Info Card */}
            <div className="personal-info-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <img src="/assets/img/ambika1.jpeg" alt="Ambika Prasad Parida" />
                </div>
                <div className="profile-info">
                  <h1>Ambika Prasad Parida</h1>
                  <p className="profile-title">Software Engineer</p>
                  <div className="profile-contacts">
                    <div className="contact-item">
                      <i className="bx bx-phone"></i>
                      <span>+91 7327838578</span>
                    </div>
                    <div className="contact-item">
                      <i className="bx bx-envelope"></i>
                      <span>ambikaparida08@gmail.com</span>
                    </div>
                    <div className="contact-item">
                      <i className="bx bx-map"></i>
                      <span>Bangalore, India</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-links">
                
                <a href="https://www.linkedin.com/in/ambika-prasad-parida-7b07501ba/" target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-linkedin"></i>
                  
                </a>
                <a href="https://github.com/amk-18" target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-github"></i>
                  
                </a>
                <a href="https://portfolio.parida.in" onClick={(e) => e.preventDefault()}>
                  <i className="bx bx-globe"></i>
                  
                </a>
                <a href="https://www.hackerrank.com/ambikaparida08" target="_blank" rel="noopener noreferrer">
                  <i className="bx bx-code-alt"></i>
                  
                </a>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="competencies-card">
              <h3>Core Competencies</h3>
              <div className="competencies-list">
                {coreCompetencies.map((category, index) => (
                  <div key={index} className="competency-category">
                    <div className="category-header">
                      <span className="category-icon">{category.icon}</span>
                      <h4>{category.category}</h4>
                    </div>
                    <div className="skills-tags">
                      {category.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="achievements-card">
              <h3>Achievements & Certifications</h3>
              <ul className="achievements-list">
                {achievements.map((achievement, index) => (
                  <li key={index}>
                    <i className="bx bx-trophy"></i>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Main Content - Experience & Projects */}
          <motion.div 
            className="resume-main"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Professional Summary */}
            <div className="summary-card">
              <h3>Professional Summary</h3>
              <p>
                Results-driven Backend Developer with 2+ years of experience specializing in building high-performance, 
                scalable microservices and RESTful APIs using Java and Spring Boot. Proven expertise in automating complex 
                workflows for IVR/CRM systems and securing seamless third-party integrations (HL7/ASTM, Banking APIs). 
                Successfully delivered cloud-native solutions on AWS, improving system efficiency by up to 30% and reducing 
                operational overhead by 50%. A collaborative team player adept at leading projects and mentoring junior engineers.
              </p>
            </div>

            {/* Professional Experience */}
            <div className="experience-card">
              <h3>Professional Experience</h3>
              {professionalExperience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h4>{exp.position}</h4>
                    <div className="experience-meta">
                      <span className="company">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Projects */}
            <div className="projects-card">
              <h3>Key Projects</h3>
              <div className="projects-list">
                {keyProjects.map((project, index) => (
                  <div key={index} className="project-item">
                    <h4>{project.title}</h4>
                    <div className="project-technologies">
                      <span>{project.technologies}</span>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-achievements">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="education-card">
              <h3>Education</h3>
              <div className="education-item">
                <h4>B.Tech</h4>
                <div className="education-meta">
                  <span className="institution">Gandhi Engineering College</span>
                  <span className="period">2017 – 2021</span>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <motion.a 
              href="/assets/pdf/Resume.pdf" 
              download="Ambika_Prasad_Parida_Resume.pdf"
              className="download-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bx bx-download"></i>
              Download Full Resume (PDF)
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;