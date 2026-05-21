import '../index.css';
import mac from '../assets/mac.png';

const leftDiv = (
    <div className='grid grid-rows-none relative left-0 top-0 max-w-[80%] md:max-w-[60%] xl:max-w-[45%] gap-y-6 bg-[radial-gradient(circle at center, var(--primary-pink), var(--bg), transparent)]'>
        <h4 className='font-extrabold text-primary-pink font-sans text-[clamp(0.45rem,0.75vw,1rem)]'>WEBSITE DEVELOPMENT</h4>
        <h1 className='text-text-h font-sans text-5xl nowrap'>Delivering IT solutions that enable you to work smarter.</h1>
        <p className='color-text font-description'>At our workplace we are driven by the moto, For the customer, For the Future. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className='px-[clamp(0.5rem,1.25vw,1.5rem)] py-[clamp(0.15rem,0.25vw,0.5rem)] flex items-center bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-yellow hover:opacity-90 hover:brightness-125 transition-opacity rounded-4xl whitespace-nowrap text-[clamp(0.65rem,1.1vw,1rem)] font-extrabold text-gray-200  shadow-lg transition duration-300 ease-in-out font-sans size-fit'>DISCOVER MORE</button>
    </div>
)

const rightDiv = (
    <img src={mac} alt="Macbook" className='w-[40%] h-[40%] object-contain' />
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