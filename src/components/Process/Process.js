// src/components/Process/Process.js
import React from 'react';
import { motion } from 'framer-motion';
import './Process.css';

const Process = () => {
  const steps = [
    {
      icon: "bx bx-target-pointer",
      title: "1. Ideation & Research",
      description: "I begin by thoroughly understanding the problem space through stakeholder interviews, market research, and competitive analysis. This phase involves defining clear objectives, identifying user needs, and exploring potential technical solutions."
    },
    {
      icon: "bx bx-planet",
      title: "2. Planning & Architecture",
      description: "I create detailed project plans with milestones, timelines, and resource allocation. This includes designing system architecture, database schemas, API contracts, and selecting appropriate technologies. Tools like Jira and Lucidchart help in visualizing and organizing the work."
    },
    {
      icon: "bx bx-palette",
      title: "3. UI/UX Design",
      description: "For projects requiring user interfaces, I design wireframes and mockups focusing on usability and accessibility. I collaborate with designers (or use tools like Figma myself) to create intuitive user experiences that align with business goals."
    },
    {
      icon: "bx bx-code",
      title: "4. Development & Testing",
      description: "I implement the solution using clean, maintainable code following best practices. This phase includes unit testing, integration testing, and continuous code reviews. I use Git for version control and follow agile methodologies for iterative development."
    },
    {
      icon: "bx bx-test-tube",
      title: "5. Quality Assurance",
      description: "I conduct rigorous testing including functional testing, performance testing, security testing, and user acceptance testing. Automated testing tools like Selenium or Jest are used where appropriate to ensure reliability."
    },
    {
      icon: "bx bx-rocket",
      title: "6. Deployment & Maintenance",
      description: "I deploy applications using CI/CD pipelines with tools like Jenkins or GitHub Actions. For cloud deployments, I use Docker, Kubernetes, and AWS services. Post-deployment, I monitor performance and provide ongoing maintenance and updates."
    }
  ];

  return (
    <section id="process" className="process section">
      <div className="container">
        <div className="section-title">
          <h2>My Development Process</h2>
          <p>From ideation to deployment, here's how I bring ideas to life with a structured approach.</p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-icon">
                <i className={step.icon}></i>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;