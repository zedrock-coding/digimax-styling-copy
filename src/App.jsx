import React from 'react';
import Navbar from './components/navbar.jsx';
import HeroSection from './components/heroSection.jsx';
import DetailsAndFeatures from './components/detailsAndFeatures.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import CTA from './components/CTA.jsx';
import './index.css'

function App() {
  const page = (
    <div className="w-full md:max-w-[95%] lg:max-w-[85%] px-4 sm:px-6 lg:px-8 mx-auto bg-bg text-text overflow-hidden">
      <Navbar />
      <HeroSection />
      <DetailsAndFeatures />
      <HowItWorks />
      <CTA />
    </div>
  )

  return (
    page
  )
}

export default App
