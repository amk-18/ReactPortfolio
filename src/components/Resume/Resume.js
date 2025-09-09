// src/components/Resume/Resume.js
import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

const Resume = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Ikontel Solutions Pvt. Ltd., Bangalore, Karnataka",
      period: "Feb 2023 – Present",
      achievements: [
        "Integrated diagnostic machines with LIS using HL7 and ASTM protocols, automating 10,000+ monthly test results in MySQL, reducing manual errors by 60%",
        "Developed a JSP-based PDF generation system using Apache PDFBox, improving report accuracy and reducing processing time by 40%",
        "Built IVRS and CRM systems for hospitals including Bluebliss, Miracle, Relife, and Athreya, automating appointments and enhancing patient record management",
        "Contributed to IVR systems for Tata Power (TPSODL and TPCODL), automating customer service and improving system reliability",
        "Created a generic IVR solution for hospitals, simplifying updates and reducing development time by 40% through reusable components"
      ]
    }
  ];

  const education = [
    {
      institution: "Gandhi Engineering College",
      degree: "Bachelor of Technology",
      period: "2017 - 2021",
      details: "CGPA: 8.12"
    },
    {
      institution: "Koustuv Institute Of Science",
      degree: "12th Grade",
      period: "2016 - 2017"
    },
    {
      institution: "Daityari High School",
      degree: "10th Grade",
      period: "2015"
    }
  ];

  const skills = [
    "Java", "Spring Boot", "Hibernate", "Python", "JavaScript", 
    "HTML/CSS", "MySQL", "Linux", "Git", "Microservices", 
    "API Design", "Asterisk", "REST APIs", "Docker", "AWS"
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>My professional journey and qualifications</p>
          <motion.a 
            href="/assets/Resume.pdf" 
            download="Ambika_Prasad_Parida_Resume.pdf"
            className="btn btn-primary mt-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume (PDF)
          </motion.a>
        </div>

        <div className="resume-content">
          <div className="resume-left">
            <motion.div 
              className="resume-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Contact</h3>
              <div className="contact-info">
                <p><i className="bx bx-phone"></i> +91 7327838578</p>
                <p><i className="bx bx-envelope"></i> ambikaparida08@gmail.com</p>
                <p><i className="bx bx-map"></i> Bangalore, Karnataka</p>
              </div>
            </motion.div>

            <motion.div 
              className="resume-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.institution}</h4>
                  <p className="period">{edu.period}</p>
                  <p className="degree">{edu.degree}</p>
                  {edu.details && <p className="details">{edu.details}</p>}
                </div>
              ))}
            </motion.div>

            <motion.div 
              className="resume-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="resume-right">
            <motion.div 
              className="resume-card main-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1>AMBIKA PRASAD PARIDA</h1>
              <h3 className="title">Full Stack Developer</h3>
              
              <div className="professional-summary">
                <h3>Professional Summary</h3>
                <p>
                  Dedicated Java Full Stack Developer with over 2 years of experience in developing scalable, 
                  high-performance web applications using Java, Spring Boot, and Microservices. Proficient in 
                  building RESTful APIs, integrating systems with HL7 and ASTM protocols, and optimizing database 
                  management with MySQL. Skilled in both frontend and backend technologies, including JSP, HTML, 
                  CSS, and JavaScript. Passionate about learning new technologies and improving development 
                  processes to drive project success.
                </p>
              </div>

              <div className="experience">
                <h3>Experience</h3>
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <h4>{exp.title}</h4>
                    <p className="company">{exp.company}</p>
                    <p className="period">{exp.period}</p>
                    <ul>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;