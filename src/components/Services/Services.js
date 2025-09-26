// src/components/Services/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Mock Interview",
      duration: "30 mins",
      price: "₹ 200",
      description: "Get personalized mock interviews tailored to your target role and company. Receive detailed feedback on technical skills, communication, and problem-solving approach.",
      features: [
        "Role-specific technical questions",
        "Behavioral interview practice",
        "Real-time feedback and suggestions",
        "Interview strategy discussion",
        "Follow-up resources"
      ],
      icon: "🎯",
      popular: true
    },
    {
      id: 2,
      title: "Resume Review",
      duration: "15 mins",
      price: "₹ 100",
      description: "Comprehensive resume analysis with actionable feedback to make your resume stand out to recruiters and hiring managers.",
      features: [
        "ATS optimization tips",
        "Content structure review",
        "Achievement highlighting",
        "Keyword optimization",
        "Formatting suggestions"
      ],
      icon: "📄"
    },
    {
      id: 3,
      title: "Career Guidance",
      duration: "15 mins",
      price: "₹ 100",
      description: "Personalized career advice and roadmap planning to help you navigate your software development career path.",
      features: [
        "Skill gap analysis",
        "Career path planning",
        "Learning roadmap",
        "Industry insights",
        "Growth strategies"
      ],
      icon: "🚀"
    },
    {
      id: 4,
      title: "Interview Prep & Tips",
      duration: "15 mins",
      price: "₹ 100",
      description: "Quick session to prepare for upcoming interviews with proven strategies and tips from industry experience.",
      features: [
        "Company-specific preparation",
        "Common interview patterns",
        "Salary negotiation tips",
        "Technical assessment guidance",
        "Follow-up strategies"
      ],
      icon: "💡"
    },
    {
      id: 5,
      title: "Quick Chat",
      duration: "15 mins",
      price: "₹ 50",
      description: "Quick consultation for specific questions about coding, career decisions, or technical challenges.",
      features: [
        "Quick problem solving",
        "Code review snippets",
        "Career advice snippets",
        "Technical doubt clearing",
        "Quick feedback session"
      ],
      icon: "💬"
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Career Services</h2>
          <p>Professional guidance and mentorship to accelerate your career growth</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className={`service-card ${service.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {service.popular && (
                <div className="popular-badge">
                  <i className="bx bx-star"></i>
                  Most Popular
                </div>
              )}
              
              <div className="service-header">
                <div className="service-icon">
                  <span>{service.icon}</span>
                </div>
                <div className="service-pricing">
                  <h3>{service.title}</h3>
                  <div className="price-duration">
                    <span className="duration">{service.duration}</span>
                    <span className="price">{service.price}</span>
                  </div>
                </div>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-features">
                <h4>What's Included:</h4>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="bx bx-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a 
                href="https://topmate.io/ambika_parida" 
                target="_blank" 
                rel="noopener noreferrer"
                className="service-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bx bx-calendar"></i>
                Book Session
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="services-summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="summary-content">
            <h3>Why Choose My Services?</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <i className="bx bx-briefcase"></i>
                <div>
                  <h4>2+ Years Industry Experience</h4>
                  <p>Real-world insights from working at Ikontel Solutions</p>
                </div>
              </div>
              <div className="benefit-item">
                <i className="bx bx-code-alt"></i>
                <div>
                  <h4>Technical Expertise</h4>
                  <p>Java, Spring Boot, Microservices, AWS, and more</p>
                </div>
              </div>
              <div className="benefit-item">
                <i className="bx bx-rocket"></i>
                <div>
                  <h4>Proven Results</h4>
                  <p>Helped multiple developers improve their skills</p>
                </div>
              </div>
              <div className="benefit-item">
                <i className="bx bx-support"></i>
                <div>
                  <h4>Personalized Approach</h4>
                  <p>Tailored guidance based on your specific needs</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;