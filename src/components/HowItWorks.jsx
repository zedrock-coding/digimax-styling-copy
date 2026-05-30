import '../index.css';
import chat from '../assets/chat-bubble.png';
import devices from '../assets/devices.png';
import stack from '../assets/stacks_2.png';
import prototype from '../assets/prototype.png';
import StyleButton from './styleButton.jsx';

let cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

const Cards = ({ img, title, text, btnText }) => {
    return (
        <div className='flex flex-col items-center gap-4 p-4 text-center'>
            <div className='flex items-center justify-center w-16 h-16 bg-how-it-works-bg rounded-full'>
                <img src={img} alt={title} className='w-8 h-8' />
            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-xl font-bold font-sans'>{title}</h3>
                <p className='text-base text-text-muted px-4'>{text}</p>
            </div>
            <StyleButton matter={btnText} />
        </div>
    )
}
const HowItWorks = () => {
    return (
        <div className='w-full flex flex-col gap-8 bg-radial-[at_50%_0%] from-gradient-purple-faded to-transparent from-0% to-35% mt-16 md:mt-24 pt-12'>
            <h4 className='font-extrabold text-primary-pink font-sans text-[clamp(0.45rem,0.75vw,1rem)] text-center'>How It Works</h4>
            <h2 className='text-text-h font-extrabold font-sans text-3xl md:text-4xl text-center w-[95%] md:w-[70%] lg:w-[50%] mx-auto'>Unlock Astonishing Results with Just 3 Simple Steps!</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-between gap-6 px-4 py-12'>
                <Cards img={chat} title="Free Consultation" text={cardText} btnText="CHAT NOW" />
                <Cards img={devices} title="Discover the product" text={cardText} btnText="LEARN MORE" />
                <Cards img={stack} title="WireFrame & Production" text={cardText} btnText="LEARN MORE" />
                <Cards img={prototype} title="Prototype Application" text={cardText} btnText="REPORT" />
            </div>
        </div>
    )
}

export default HowItWorks;