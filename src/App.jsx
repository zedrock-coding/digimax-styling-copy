import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import HeroSection from './components/heroSection.jsx'
import './index.css'

function App() {
  const page = (
    <div className="w-full md:max-w-[80%] mx-auto bg-bg text-text">
      <Navbar />
      <HeroSection />
    </div>
  )

  return (
    page
  )
}

export default App
