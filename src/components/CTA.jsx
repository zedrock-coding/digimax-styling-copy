import '../index.css';
import banner from '../assets/banner.png';
import StyleButton from './styleButton.jsx';

const divCTA = (
    <div className="relative left-15 top-100 grid grid-rows-none w-[80%] md:w-[60%] flex gap-6 text-left rounded-lg py-12 px-12 bg-purple-CTA-bg">
        <h2 className="text-text-h text-bold font-sans text-4xl ">Pioneering Digital Excellence:<br />Discover the Digimax<br />Advantage.</h2>
        <p className="text-base text-text-muted font-description">Experience the future of digital solutions with Digimax. Our cutting-edge technology and innovative approach empower businesses to thrive in the digital age. Join us on a journey of transformation and success.</p>
        <StyleButton matter="DISCOVER MORE" />
    </div>
)

const CTA = () => {
    return (
        <div className="relative">
            <img src={banner} alt="CTA Banner" className="absolute inset-0 w-full h-auto object-cover" />
            {divCTA}
        </div>
    )
}

export default CTA;