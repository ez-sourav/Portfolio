import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About';
import Skill from './Components/Skill';
import Project from './Components/project/Project';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import GlobalGlow from './Components/GlobalGlow';

const App = () => {
  return (
    <div className='min-h-screen bg-[#0B0B0C] text-white overflow-x-hidden relative'>
      <GlobalGlow />

      <main className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App