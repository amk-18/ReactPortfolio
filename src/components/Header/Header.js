// src/components/Header/Header.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminKey, setAdminKey] = useState('');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check session storage (cleared when browser closes)
  useEffect(() => {
    const adminLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
    setIsAdmin(adminLoggedIn);
  }, []);

  const handleAdminLogin = async () => {
    try {
      const response = await fetch(`/.netlify/functions/get-visitors?key=${adminKey}`);
      const data = await response.json();
      
      if (data.success) {
        setIsAdmin(true);
        setShowAdminLogin(false);
        setLoginError('');
        // Use sessionStorage - clears when browser closes
        sessionStorage.setItem('adminLoggedIn', 'true');
        
        // Open analytics viewer after successful login
        window.dispatchEvent(new CustomEvent('openAnalytics'));
      } else {
        setLoginError('Invalid admin key');
      }
    } catch (error) {
      setLoginError('Error connecting to server');
    }
  };

  const openAnalytics = () => {
    window.dispatchEvent(new CustomEvent('openAnalytics'));
  };

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header 
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="header-content">
            <motion.div 
              className="logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#hero">Ambika Prasad</a>
            </motion.div>

            <div className="header-actions">
              {/* Admin Button - Visible when logged in */}
              {isAdmin && (
                <motion.button
                  className="admin-analytics-btn"
                  onClick={openAnalytics}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  title="View Analytics (Ctrl+Shift+Alt+R)"
                >
                  <span className="admin-icon">📊</span>
                  <span className="admin-text">Analytics</span>
                </motion.button>
              )}

              {/* Admin Login Button - Visible when not logged in */}
              {!isAdmin && (
                <motion.button
                  className="admin-login-btn"
                  onClick={() => setShowAdminLogin(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  title="Admin Login"
                >
                  <span className="admin-icon">🔐</span>
                </motion.button>
              )}
            </div>

            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
              <ul>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <button 
              className={`mobile-nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="admin-login-modal" onClick={() => setShowAdminLogin(false)}>
          <div className="admin-login-content" onClick={e => e.stopPropagation()}>
            <h3>Admin Login</h3>
            <p>Enter your admin key to access analytics</p>
            
            <input
              type="password"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              placeholder="Enter admin key"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleAdminLogin();
                }
              }}
              autoFocus
            />
            
            {loginError && (
              <div className="admin-login-error">{loginError}</div>
            )}
            
            <div className="admin-login-buttons">
              <button onClick={() => setShowAdminLogin(false)}>Cancel</button>
              <button onClick={handleAdminLogin} className="login-btn">Login</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;