// src/components/Resume/Resume.js
import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

const Resume = () => {
  const coreCompetencies = [
    {
      category: "Backend Development",
      skills: ["Java 8/11/17", "Spring Boot", "Spring Cloud", "Microservices Architecture", "REST APIs", "gRPC", "Python", "Asterisk AGI"],
      icon: "⚙️",
      description: "Building scalable, high-performance backend systems"
    },
    {
      category: "Database Management",
      skills: ["SQL", "MySQL", "PostgreSQL", "Query Optimization", "Database Design", "Indexing Strategies", "Data Migration"],
      icon: "🗄️",
      description: "Efficient data modeling and performance tuning"
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS (EC2, ECS, RDS, S3, Lambda, SQS)", "Docker", "Containerization", "Kafka", "Event-Driven Architecture"],
      icon: "☁️",
      description: "Cloud-native application deployment and management"
    },
    {
      category: "API & Integration Protocols",
      skills: ["RESTful APIs", "gRPC", "HL7/FHIR", "ASTM", "mTLS", "Webhooks", "SOAP"],
      icon: "🔗",
      description: "Secure and standardized system integrations"
    },
    {
      category: "Testing & Quality",
      skills: ["JUnit", "Mockito", "Integration Testing", "Postman", "API Testing", "Performance Testing"],
      icon: "🧪",
      description: "Ensuring code reliability and performance"
    },
    {
      category: "Development Tools",
      skills: ["Git", "Maven", "Gradle", "Jenkins", "Linux/Unix", "IntelliJ IDEA", "Eclipse"],
      icon: "🛠️",
      description: "Professional development workflow and CI/CD"
    }
  ];

  const professionalExperience = [
    {
      position: "Software Engineer",
      company: "Ikontel Solutions Pvt. Ltd.",
      location: "Bangalore, India",
      period: "Feb 2023 – Present",
      achievements: [
        {
          title: "Microservices Development",
          description: "Designed and developed 10+ production-grade Spring Boot microservices deployed on AWS ECS with Docker, serving 100K+ daily requests with 99.9% uptime"
        },
        {
          title: "Performance Optimization",
          description: "Engineered dedicated REST APIs that reduced IVR/CRM call latency by 5-10ms, improving customer experience for 50K+ daily users"
        },
        {
          title: "IVR System Development",
          description: "Created sophisticated Java services using Asterisk AGI for intelligent call routing and IVR systems, handling 10K+ concurrent calls"
        },
        {
          title: "Healthcare Integration",
          description: "Integrated 20+ diagnostic laboratory machines with LIS software using HL7/ASTM protocols, achieving 99.5% data accuracy and reducing manual entry by 60%"
        },
        {
          title: "Banking Security",
          description: "Implemented mTLS security for financial data exchange with major banking clients (Yes Bank, Tata Capital), ensuring PCI-DSS compliance"
        },
        {
          title: "Database Optimization",
          description: "Improved query performance by 45-60% through strategic indexing, query optimization, and database normalization techniques"
        },
        {
          title: "Team Leadership",
          description: "Led and mentored 4 junior developers through complete SDLC, implementing Agile practices that accelerated product delivery by 20%"
        }
      ]
    }
  ];

  const keyProjects = [
    {
      title: "Swiggy Credit Card Campaign Analytics Portal",
      period: "July 2025 – Present",
      technologies: "Java 17, Spring Boot 3.x, Apache Kafka, MySQL 8.0, AWS ECS, Docker, Redis",
      role: "Lead Backend Developer",
      description: "Enterprise-scale campaign analytics platform processing 500K+ daily transactions for credit card lead generation",
      challenges: [
        "Handling high-volume real-time data streaming",
        "Ensuring data consistency across distributed systems",
        "Maintaining PCI-DSS compliance for financial data"
      ],
      achievements: [
        "Architected event-driven microservices using Kafka, with Campaign Call Service as producer and Notification Services as consumers, achieving <100ms latency",
        "Implemented real-time dashboard using WebSocket connections for live analytics and monitoring of 1K+ monthly leads",
        "Executed seamless database migration from PostgreSQL to MySQL with zero data loss and 99.99% uptime",
        "Optimized complex analytical queries reducing report generation time from 30 seconds to <10 seconds",
        "Designed PCI-DSS compliant architecture with RBAC, audit trails, and encryption at rest and in transit"
      ],
      impact: "Generated 1K+ qualified monthly leads, contributing to 15% increase in credit card conversions"
    },
    {
      title: "Gen AI Bot Call Engine",
      period: "Oct 2024 – Apr 2025",
      technologies: "Spring Boot, gRPC, Apache Kafka, AWS ECS, mTLS, OpenAI GPT API, WebSocket",
      role: "Backend Developer",
      description: "AI-powered voice assistant service handling 10K+ daily banking customer interactions",
      challenges: [
        "Low-latency real-time voice processing",
        "Secure financial data transmission",
        "Integration with multiple banking systems"
      ],
      achievements: [
        "Implemented high-performance gRPC communication between Voice Assistant and Payment Service, achieving 5ms response times",
        "Designed event-driven architecture with Kafka for asynchronous communication to Notification Service and Admin Dashboard",
        "Developed real-time monitoring dashboard with WebSocket for live call tracking and OpenAI-powered conversation summaries",
        "Secured all service-to-service communication with mTLS, ensuring end-to-end encryption for financial data",
        "Integrated OpenAI GPT APIs for intelligent conversation handling and automated call summarization"
      ],
      impact: "Automated 40% of routine customer queries, reducing agent workload and improving response times by 60%"
    },
    {
      title: "Unified Communications Portal",
      period: "March 2023 – Sept 2024",
      technologies: "Spring Boot, AWS (EC2, RDS, SQS), MySQL, REST APIs, WebSocket",
      role: "Full Stack Developer",
      description: "Consolidated platform for automated customer engagement replacing 3 legacy systems",
      achievements: [
        "Architected modular microservices architecture serving 50+ concurrent agents with zero downtime",
        "Implemented real-time status tracking using WebSocket connections and secure webhooks",
        "Orchestrated external APIs to automate end-to-end call workflows, reducing manual intervention by 70%",
        "Deployed on auto-scaling AWS infrastructure handling 10,000+ daily transactions"
      ],
      impact: "Improved agent productivity by 25% through unified interface and automated workflows"
    }
  ];

  const achievements = [
    {
      title: "HackerRank Gold Badges",
      description: "5-Star Gold Badge in Java and SQL with Programming Certifications in Java, SQL, and JavaScript",
      icon: "⭐"
    },
    {
      title: "Lead Generation Excellence",
      description: "Delivered over 1,000+ qualified monthly leads through Swiggy campaign analytics portal, exceeding targets by 25%",
      icon: "🎯"
    },
    {
      title: "Performance Optimization",
      description: "Achieved 45-60% query performance improvement through database optimization techniques",
      icon: "⚡"
    },
    {
      title: "Team Leadership",
      description: "Successfully mentored 4 junior developers, resulting in 20% faster project delivery",
      icon: "👥"
    }
  ];

  const education = {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Gandhi Engineering College",
    location: "Bhubaneswar, India",
    period: "2017 – 2021",
    achievements: [
      "Graduated with distinction",
      "Active member of coding club and technical committees"
    ]
  };

  return (
    <section id="resume" className="resume section">
      <div className="container">
        <div className="section-title">
          <h2>Professional Resume</h2>
          <p>A comprehensive overview of my 3+ years journey in backend development</p>
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
                  <p className="profile-title">Senior Backend Developer</p>
                  <div className="profile-badge">3+ Years Experience</div>
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
                <a href="https://www.linkedin.com/in/ambikaparida" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/amk-18" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="https://portfolio.parida.in" target="_blank" rel="noopener noreferrer" title="Portfolio">
                  <i className="bx bx-globe"></i>
                </a>
                <a href="https://www.hackerrank.com/ambikaparida08" target="_blank" rel="noopener noreferrer" title="HackerRank">
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
                      <div className="category-title">
                        <h4>{category.category}</h4>
                        <p className="category-description">{category.description}</p>
                      </div>
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
              <h3>Key Achievements</h3>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-item">
                    <span className="achievement-icon">{achievement.icon}</span>
                    <div className="achievement-content">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="languages-card">
              <h3>Languages</h3>
              <div className="language-items">
                <div className="language-item">
                  <span className="language-name">English</span>
                  <span className="language-level">Professional Working</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Hindi</span>
                  <span className="language-level">Professional Working</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Odia</span>
                  <span className="language-level">Native</span>
                </div>
              </div>
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
              <p className="summary-text">
                Results-oriented Backend Developer with <strong>3+ years of experience</strong> designing and implementing 
                scalable microservices, automating complex workflows, and integrating diverse systems. Expert in 
                <strong> Java, Spring Boot, and AWS</strong> with a proven track record of delivering high-performance solutions 
                for banking, healthcare, and telecommunications sectors.
              </p>
              <p className="summary-text">
                Passionate about <strong>system optimization</strong> and <strong>clean code architecture</strong>, I've consistently 
                improved application performance by 45-60% through database optimization and architectural improvements. 
                Experienced in <strong>leading projects from conception to deployment</strong>, mentoring junior developers, 
                and implementing <strong>cloud-native solutions</strong> on AWS.
              </p>
              <div className="summary-highlights">
                <div className="highlight">
                  <span className="highlight-number">10+</span>
                  <span className="highlight-label">Microservices</span>
                </div>
                <div className="highlight">
                  <span className="highlight-number">500K+</span>
                  <span className="highlight-label">Daily Transactions</span>
                </div>
                <div className="highlight">
                  <span className="highlight-number">99.9%</span>
                  <span className="highlight-label">Uptime</span>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="experience-card">
              <h3>Professional Experience</h3>
              {professionalExperience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <div className="experience-title">
                      <h4>{exp.position}</h4>
                      <span className="experience-location">{exp.location}</span>
                    </div>
                    <div className="experience-meta">
                      <span className="company">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                  </div>
                  <div className="achievements-grid">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="achievement-detail">
                        <h5>{achievement.title}</h5>
                        <p>{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Projects */}
            <div className="projects-card">
              <h3>Key Projects</h3>
              <div className="projects-list">
                {keyProjects.map((project, index) => (
                  <div key={index} className="project-item">
                    <div className="project-header">
                      <div className="project-title">
                        <h4>{project.title}</h4>
                        <span className="project-role">{project.role}</span>
                      </div>
                      <span className="project-period">{project.period}</span>
                    </div>
                    
                    <div className="project-tech-stack">
                      {project.technologies.split(', ').map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    
                    <p className="project-description">{project.description}</p>
                    
                    {project.challenges && (
                      <div className="project-section">
                        <h5>Challenges</h5>
                        <ul>
                          {project.challenges.map((challenge, idx) => (
                            <li key={idx}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="project-section">
                      <h5>Key Achievements</h5>
                      <ul>
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {project.impact && (
                      <div className="project-impact">
                        <strong>Impact:</strong> {project.impact}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="education-card">
              <h3>Education</h3>
              <div className="education-item">
                <div className="education-header">
                  <h4>{education.degree} in {education.field}</h4>
                  <span className="education-period">{education.period}</span>
                </div>
                <div className="education-meta">
                  <span className="institution">{education.institution}</span>
                  <span className="location">{education.location}</span>
                </div>
                <ul className="education-achievements">
                  {education.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Download Button */}
            <motion.div 
              className="download-section"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="/assets/pdf/Resume.pdf" 
                download="Ambika_Prasad_Parida_Resume.pdf"
                className="download-btn"
              >
                <i className="bx bx-download"></i>
                <span>Download Detailed Resume (PDF)</span>
              </a>
              <p className="download-note">Includes complete work history, project details, and certifications</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;