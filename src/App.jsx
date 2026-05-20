import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

const App = () => {
  return (
    <div className='bg-[#0B0B0C] min-h-screen text-white overflow-x-hidden'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App