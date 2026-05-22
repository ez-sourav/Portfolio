import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className='min-h-screen bg-[#0B0B0C] text-white'>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App