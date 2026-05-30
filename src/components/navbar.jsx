import { useState } from 'react';
import '../index.css';
import logoImg from '../assets/logo_img.svg';
import StyleButton from './styleButton.jsx';

var nonListElements = (item) => (
    <li>
        <a href="#" className="inline-flex px-[clamp(0.45rem,1.25vw,1.5rem)] py-[clamp(0.25rem,0.5vw,0.75rem)] items-center hover:bg-gray-700 hover:opacity-90 rounded-4xl whitespace-nowrap text-[clamp(0.5rem,0.75vw,0.85rem)] font-extrabold font-sans">
            <span>{item}</span>
        </a>
    </li>
)

var listElements = (parentItem, childItems) => (
    <li className='relative parent'>
        <a href="#" className="inline-flex px-[clamp(0.45rem,1.25vw,1.5rem)] py-[clamp(0.25rem,0.5vw,0.75rem)] items-center hover:bg-gray-700 hover:opacity-90 rounded-4xl whitespace-nowrap text-[clamp(0.5rem,0.75vw,0.85rem)] font-extrabold font-sans">
            <span>{parentItem}</span>
        </a>
        <ul className='child transition duration-300 absolute top-full right-0 w-48 bg-[--accent-bg] shadow-lg rounded-b z-50'>
            {childItems.map(childItem => childItemElements(childItem))}
        </ul>
    </li>
)

var childItemElements = (childItem) => (
    <li key={childItem}>
        <a href="#" className="flex px-4 py-3 hover:bg-gray-700 hover:opacity-90 text-[clamp(0.5rem,0.75vw,0.85rem)] whitespace-nowrap font-sans">
            <span>{childItem}</span>
        </a>
    </li>
)

let DropDown = (<span className={`ml-1 text-[1.2rem] transition-transform duration-200 text-gray-400`}>▾</span>
);

let logo = (<div className="flex items-center">
    <img src={logoImg} alt="Logo" className="w-[clamp(1.25rem,2.5vw,2.5rem)] h-[clamp(1.5rem,3vw,3rem)] mr-2" />
    <div className="font-logo whitespace-nowrap text-[clamp(1rem,2.2vw,2rem)] mt-1">
        <a href="../App.jsx">digimax</a>
    </div>
</div>);

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    let serviceItems = ['web development', 'mobile development', 'ui/ux design'];
    let pagesitems = ['Page 1', 'Page 2', 'Page 3'];

    var navBar = (
        <nav className="transition-all duration-300 w-full relative z-50 px-[clamp(0.5rem,2vw,1.5rem)] py-[clamp(0.25rem,1vw,1rem)]">
            <div className="mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
                <div className="flex items-center justify-between h-16 w-full lg:w-auto">
                {logo}
                <button onClick={toggleMenu} className="lg:hidden text-text-muted hover:text-text-h focus:outline-none">
                    {!isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 transition transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </button>
                </div>
                <ul className={`${isOpen ? ' items-center flex absolute top-full left-0 w-full bg-bg shadow-xl p-6 z-40' : 'hidden'} lg:flex flex-col lg:flex-row flex-wrap lg:items-center gap-4 lg:gap-[clamp(0.125rem,0.8vw,1rem)] lg:static lg:w-auto lg:p-0 lg:shadow-none lg:bg-transparent ml-auto`}>
                    {nonListElements('HomePage')}
                    {nonListElements('About Us')}
                    {listElements(<span className="flex items-center">Services {DropDown}</span>, serviceItems)}
                    {nonListElements('Portfolio')}
                    {nonListElements('Contact Us')}
                    {listElements(<span className="flex items-center">Pages {DropDown}</span>, pagesitems)}
                    <StyleButton matter="GET STARTED" />
                </ul>
            </div>
        </nav>
    )

    return navBar;
}

export default Navbar;
