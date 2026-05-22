import '../index.css';
import mac from '../assets/mac.png';
import StyleButton from './styleButton.jsx';

const leftDiv = (
    <div className='grid grid-rows-none relative left-0 top-0 max-w-[80%] md:max-w-[60%] xl:max-w-[45%] gap-y-6 bg-radial-[at_45%_40%] from-primary-pink-transparent via-gradient-purple-transparent to-transparent from-8% via-15% to-50%'>
        <h4 className='font-extrabold text-primary-pink font-sans text-[clamp(0.45rem,0.75vw,1rem)]'>WEBSITE DEVELOPMENT</h4>
        <h1 className='text-text-h font-sans text-5xl nowrap'>Delivering IT solutions that enable you to work smarter.</h1>
        <p className='text-text-muted font-description'>At our workplace we are driven by the moto, For the customer, For the Future. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <StyleButton matter="DISCOVER MORE" />
    </div>
)

const rightDiv = (
    <img src={mac} alt="Macbook" className='w-[50%] h-[50%] object-contain' />
)

const HeroSection = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between px-6 py-12'>
            {leftDiv}
            {rightDiv}
        </div>
    )
}

export default HeroSection;