// src/components/Testimonials/Testimonials.js
import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Manish Ray",
      position: "Head of Strategic Marketing, Ikontel & Iqh",
      image: "/assets/img/manish1.jpeg",
      linkedin: "https://www.linkedin.com/in/raymanish/",
      content: "I had the privilege of working with Ambika Prasad Parida at Ikontel Solutions, where he consistently demonstrated his expertise in Java Full Stack Development. Ambika was instrumental in developing IVRS and CRM systems for hospitals including Bluebliss, Miracle, Relife, and Athreya, significantly enhancing patient engagement and streamlining hospital operations. His deep knowledge of Java, Spring Boot, and MySQL enabled him to automate appointment scheduling and customer interactions. This led to a 20% reduction in call drops and missed calls, greatly improving contactability. The CRM systems he implemented optimized patient record management, ensuring efficient communication. Ambika's focus on delivering scalable, reliable solutions with robust error handling has had a lasting impact. I highly recommend him for any role requiring expertise in Java, Spring Boot, and IVR/CRM system development."
    },
    {
      name: "Debashis Behera",
      position: "Leader in Banking Innovation",
      image: "/assets/img/debasis2.jpeg",
      linkedin: "https://www.linkedin.com/in/debashis-behera-08526127/",
      content: "Ambika is technically very strong. He clearly understands our customers requirements and work accordingly to fulfil that on time. his dedication towards work is unparalleled. He was one of the best technical resources in our team. I strongly recommend him for software product engineering. I wish him all the best for his future endeavours."
    }
  ];

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Client & Colleague Testimonials</h2>
          <p>What people say about working with me</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="bx bxs-quote-left"></i>
                </div>
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="author-info">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.position}</p>
                  <a 
                    href={testimonial.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="linkedin-link"
                  >
                    <i className="bx bxl-linkedin"></i>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;