// src/components/About/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Building Scalable Solutions for a Smarter Future</p>
        </div>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src="/assets/img/ambika2.jpeg" alt="Ambika Prasad Parida" />
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Full Stack Developer</h3>
            <p className="about-description">
              Technology enthusiast with a passion for creating scalable, efficient, and seamless solutions.
            </p>
            
            <div className="about-details">
              <div className="detail-card">
                <h4>Personal Info</h4>
                <ul>
                  <li><strong>Name:</strong> Ambika Prasad Parida</li>
                  <li><strong>Education:</strong> B.Tech (CGPA: 8.12)</li>
                  <li><strong>Email:</strong> ambikaparida08@gmail.com</li>
                  <li><strong>Phone:</strong> +91 7327838578</li>
                </ul>
              </div>
              
              <div className="detail-card">
                <h4>Professional Info</h4>
                <ul>
                  <li><strong>Location:</strong> Bangalore, Karnataka</li>
                  <li><strong>Current Company:</strong> Ikontel Solutions Pvt. Ltd.</li>
                  <li><strong>Experience:</strong> 2+ Years</li>
                  <li><strong>Specialization:</strong> Full Stack Development</li>
                </ul>
              </div>
            </div>
            
            <div className="about-actions">
              <motion.a 
                href="#skills" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                My Skills
              </motion.a>
              <motion.a 
                href="#projects" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                My Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;