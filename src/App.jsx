import Navbar from './components/navbar.jsx';
import HeroSection from './components/heroSection.jsx';
import DetailsAndFeatures from './components/detailsAndFeatures.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import './index.css'

function App() {
  const page = (
    <div className="w-full md:max-w-[80%] mx-auto bg-bg text-text">
      <Navbar />
      <HeroSection />
      <DetailsAndFeatures />
      <HowItWorks />
    </div>
  )

  return (
    page
  )
}

export default App
