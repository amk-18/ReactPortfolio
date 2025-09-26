// src/App.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Achievements from './components/Achievements/Achievements';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
//import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
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
      {/* <Services /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;