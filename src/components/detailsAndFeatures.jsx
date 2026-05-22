import '../index.css';
import UIUX from '../assets/stacks.png';
import StyleButton from './styleButton.jsx';
import target from '../assets/crosshair.png';
import secure from '../assets/shield.png';
import userFlow from '../assets/user.png';
import graphic from '../assets/graphic-design.png';

//30 70 ratio of the details and features section
const FeatureItem = ({ icon,text }) => (
    <span className="flex items-center gap-2 text-text-muted font-description">
        <img src={icon} alt={text} className="w-6 h-6 object-contain" />
        {text}
    </span>
);

const description = (
        <div className="grid gap-4">
        <h2 className="text-text font-sans text-4xl font-bold">Description</h2>
        <p className="text-text-muted font-description">
            At our workplace we are driven by the moto, For the customer, For the Future. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <p className="text-text-muted font-description">
            At our workplace we are driven by the motto, For the customer, For the Future. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="flex flex-col md:flex-row gap-x-8 md:gap-x-50 xl:gap-x-80 mt-6">
            <ul className="list-none list-inside text-text-muted font-description">
                <li>✓ &nbsp;Expertise in Digital Solutions</li>
                <li>✓ &nbsp;Innovation Design Approach</li>
                <li>✓ &nbsp;Strategic Digital Marketing</li>
                <li>✓ &nbsp;Data-Driven Decisions</li>
            </ul>
            <ul className="list-none list-inside text-text-muted font-description">
                <li>✓ &nbsp;Holistic Security Measures</li>
                <li>✓ &nbsp;Tailored Digital Strategy</li>
                <li>✓ &nbsp;Responsive & Scalable Design</li>
                <li>✓ &nbsp;Proven Track Record</li>
            </ul>
        </div>
        </div>
)

const features = (
    <div className="grid gap-4 bg-gradient-to-b from-primary-pink-transparent to-transparent p-10 from-1% to-60% rounded-lg"> 
        <h2 className="text-text font-sans text-4xl font-bold">Features</h2>
        <FeatureItem icon={UIUX} text="UI/UX User Friendly" />
        <FeatureItem icon={target} text="Focus On Target" />
        <FeatureItem icon={secure} text="Secure App" />
        <FeatureItem icon={userFlow} text="User Experience Flow" />
        <FeatureItem icon={graphic} text="Awesome Graphic Design" />
        <div className='py-2'></div>
        <StyleButton matter="DOWNLOAD BROCHURE" fullWidth={true} />
    </div>
)

const DetailsAndFeatures = () => {
    return(
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 p-4 gap-8 mt-10 md:mt-15 xl:mt-20 md:gap-12 xl:gap-16'>
            <div className='md:col-span-2 xl:col-span-3'>
                {description}
            </div>
            <div className='md:col-span-1 xl:col-span-1'>
                {features}
            </div>
        </div>
    );
}

export default DetailsAndFeatures;