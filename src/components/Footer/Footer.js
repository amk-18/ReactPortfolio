// src/components/Footer/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} Ambika Prasad Parida. All rights reserved.</p>
          </div>
          <div className="footer-social">
            <motion.a 
              href="https://github.com/amk-18/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="bx bxl-github"></i>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/ambika-prasad-parida-7b07501ba/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="bx bxl-linkedin"></i>
            </motion.a>
            <motion.a 
              href="https://wa.me/917327838578" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="bx bxl-whatsapp"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;