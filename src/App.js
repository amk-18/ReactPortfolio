// src/App.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { DarkModeProvider } from './context/DarkModeContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Achievements from './components/Achievements/Achievements';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CookieConsent from './components/CookieConsent/CookieConsent';

// IMPORTANT: Remove these imports
// import { useAnalytics } from './components/Analytics/Analytics';
// import Analytics from './components/Analytics/Analytics';

import './App.css';

function AppContent() {
  // Remove this line
  // useAnalytics();
  
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Achievements />
      <Skills />
      <Resume />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <CookieConsent />
      {/* Remove this line */}
      {/* <Analytics /> */}
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;