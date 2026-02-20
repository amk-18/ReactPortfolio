// src/components/DarkModeToggle/DarkModeToggle.js
import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../../context/DarkModeContext';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        className="toggle-track"
        initial={false}
        animate={{
          backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc'
        }}
      >
        <motion.div
          className="toggle-thumb"
          initial={false}
          animate={{
            x: isDarkMode ? 24 : 0,
            backgroundColor: isDarkMode ? '#3b82f6' : '#fbbf24'
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {isDarkMode ? (
            <i className="bx bx-moon"></i>
          ) : (
            <i className="bx bx-sun"></i>
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;