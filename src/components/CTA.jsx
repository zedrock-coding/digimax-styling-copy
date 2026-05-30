import '../index.css';
import banner from '../assets/banner.png';
import StyleButton from './styleButton.jsx';

const divCTA = (
    <div className="relative z-10 w-[95%] sm:w-[90%] md:w-[70%] lg:w-[60%] flex flex-col gap-6 text-left rounded-2xl py-8 px-6 md:py-16 md:px-12 bg-purple-CTA-bg shadow-2xl mx-auto my-16 backdrop-blur-sm">
        <h2 className="text-text-h font-bold font-sans text-3xl md:text-4xl leading-tight">Pioneering Digital Excellence:<br />Discover the Digimax<br />Advantage.</h2>
        <p className="text-base text-text-muted font-description">Experience the future of digital solutions with Digimax. Our cutting-edge technology and innovative approach empower businesses to thrive in the digital age. Join us on a journey of transformation and success.</p>
        <StyleButton matter="DISCOVER MORE" />
    </div>
)

const CTA = () => {
    return (
        <div className="relative w-full flex items-center justify-center min-h-[400px] mt-16 md:mt-24 mb-10 overflow-hidden rounded-2xl">
            <img src={banner} alt="CTA Banner" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            {divCTA}
        </div>
    )
}

export default CTA;