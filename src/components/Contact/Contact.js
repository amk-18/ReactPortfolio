// src/components/Contact/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('https://formspree.io/f/xldeegbp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Let's Connect</h2>
          <p>Have an idea, project, or just want to say hi? Drop me a message!</p>
        </div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="info-item">
              <i className="bx bx-map"></i>
              <div>
                <h4>Location:</h4>
                <p>Yeshwantpur, Bengaluru, India</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="bx bx-envelope"></i>
              <div>
                <h4>Email:</h4>
                <p>ambikaparida08@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="bx bx-phone"></i>
              <div>
                <h4>Call:</h4>
                <p>+91 7327838578</p>
              </div>
            </div>

            <div className="info-item">
              <i className="bx bx-share-alt"></i>
              <div>
                <h4>Social Media:</h4>
                <div className="social-links">
                  <a href="https://github.com/amk-18/" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ambika-prasad-parida-7b07501ba/" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a href="https://wa.me/917327838578" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-whatsapp"></i>
                  </a>
                  <a href="https://www.hackerrank.com/ambikaparida08" target="_blank" rel="noopener noreferrer">
                    <i className="bx bx-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Your Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Enter 10 digit mobile number"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            {submitStatus === 'success' && (
              <div className="alert alert-success">
                <i className="bx bx-check-circle"></i>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="alert alert-error">
                <i className="bx bx-error"></i>
                Something went wrong. Please try again or contact me directly at ambikaparida08@gmail.com
              </div>
            )}
            
            <motion.button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <>
                  <i className="bx bx-loader bx-spin"></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="bx bx-send"></i>
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;