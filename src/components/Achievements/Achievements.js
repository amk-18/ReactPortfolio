// src/components/Achievements/Achievements.js
import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

const Achievements = () => {
  const certificates = [
    {
      title: "Java Certification",
      issuer: "HackerRank",
      file: "java_basic certificate.pdf"
    },
    {
      title: "Python Certification",
      issuer: "HackerRank",
      file: "python_basic certificate.pdf"
    },
    {
      title: "Software Engineer Certification",
      issuer: "HackerRank",
      file: "software_engineer certificate.pdf"
    },
    {
      title: "Problem Solving in JAVA",
      issuer: "HackerRank",
      file: "problem_solving_basic certificate.pdf"
    },
    {
      title: "SQL Advanced Certification",
      issuer: "HackerRank",
      file: "sql_advanced certificate.pdf"
    },
    {
      title: "JavaScript Certification",
      issuer: "HackerRank",
      file: "javascript_intermediate certificate.pdf"
    }
  ];

  const achievements = [
    {
      icon: "bx bx-trophy",
      title: "Fresher of the Month",
      description: "Recognized as 'Fresher of the Month' in August 2023 for developing a reusable generic IVR system that reduced development time by 40%."
    },
    {
      icon: "bx bx-code-alt",
      title: "15+ Projects Delivered",
      description: "Successfully delivered over 15 projects, including IVR systems, CRM solutions, and API integrations for various clients."
    },
    {
      icon: "bx bx-group",
      title: "20+ Happy Clients",
      description: "Worked with 20+ clients across industries, delivering scalable and efficient solutions tailored to their specific business needs."
    }
  ];

  return (
    <section id="achievements" className="achievements section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Achievements & Certifications</h2>
          <p>Here are some of my notable achievements and certifications that showcase my expertise.</p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              className="certificate-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="certificate-icon">
                <i className="bx bx-certificate"></i>
              </div>
              <h3>{cert.title}</h3>
              <p>Issued by {cert.issuer}</p>
              <motion.a 
                href={`/assets/pdf/${cert.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Certificate
              </motion.a>
            </motion.div>
          ))}
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;