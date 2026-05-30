import '../index.css';
import mac from '../assets/mac.png';
import StyleButton from './styleButton.jsx';

const leftDiv = (
    <div className='flex flex-col items-start relative w-full md:w-[60%] xl:w-[45%] gap-y-6 bg-radial-[at_45%_40%] from-primary-pink-transparent via-gradient-purple-transparent to-transparent from-8% via-15% to-50%'>
        <h4 className='font-extrabold text-primary-pink font-sans text-[clamp(0.45rem,0.75vw,1rem)]'>WEBSITE DEVELOPMENT</h4>
        <h1 className='text-text-h font-sans nowrap text-[clamp(1.5rem,2.5vw,3.5rem)]'>Delivering IT solutions that enable you to work smarter.</h1>
        <p className='text-text-muted font-description'>At our workplace we are driven by the moto, For the customer, For the Future. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <StyleButton matter="DISCOVER MORE" />
    </div>
)

const rightDiv = (
    <img src={mac} alt="Macbook" className='w-[90%] sm:w-[80%] md:w-[50%] h-auto object-contain mt-12 md:mt-0' />
)

const HeroSection = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between py-12 md:py-24 gap-8'>
            {leftDiv}
            {rightDiv}
        </div>
    )
}

export default HeroSection;