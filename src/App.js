// src/App.js
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
