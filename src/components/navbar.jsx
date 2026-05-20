import '../index.css';
import logoImg from '../assets/logo_img.svg';

var nonListElements = (item) => (
        <li>
            <a href="#" className="inline-flex px-[clamp(0.375rem,1vw,1rem)] py-[clamp(0.25rem,0.5vw,0.75rem)] items-center hover:bg-gray-50 rounded whitespace-nowrap text-[clamp(0.65rem,1.1vw,1rem)]">
                <span>{item}</span>
            </a>
        </li>
)

var listElements = (parentItem, childItems) => (
        <li className='relative parent'>
            <a href="#" className="inline-flex px-[clamp(0.375rem,1vw,1rem)] py-[clamp(0.25rem,0.5vw,0.75rem)] items-center hover:bg-gray-50 rounded whitespace-nowrap text-[clamp(0.65rem,1.1vw,1rem)]">
                <span>{parentItem}</span>
            </a>
            <ul className='child transition duration-300 absolute top-full right-0 w-48 bg-[--accent-bg] shadow-lg rounded-b z-50'>
                {childItems.map(childItem => childItemElements(childItem))}
            </ul>
        </li>
)

var childItemElements = (childItem) => (
    <li key={childItem}>
        <a href="#" className="flex px-4 py-3 hover:bg-gray-50 text-[clamp(0.65rem,1.1vw,1rem)] whitespace-nowrap">
            <span>{childItem}</span>
        </a>
    </li>
)

function Navbar() {
    let serviceItems = ['web development', 'mobile development', 'ui/ux design'];
    let pagesitems = ['Page 1', 'Page 2', 'Page 3'];

    var navBar = (
        <nav className="transition-all duration-300 flex flex-row flex-wrap items-center justify-between px-[clamp(0.5rem,2vw,1.5rem)] py-[clamp(0.25rem,1vw,1rem)] w-full">
            <div className="flex items-center">
                <img src={logoImg} alt="Logo" className="w-[clamp(1rem,2vw,2rem)] h-[clamp(1rem,2vw,2rem)] mr-2" />
                <div className="font-[--logo] whitespace-nowrap text-[clamp(1rem,2.2vw,2rem)]">
                    digimax
                </div>
            </div>
            <ul className="flex flex-row flex-wrap items-center gap-[clamp(0.125rem,0.8vw,1rem)] ml-auto">
                {nonListElements('HomePage')}
                {nonListElements('About Us')}
                {listElements('Services', serviceItems)}
                {nonListElements('Portfolio')}
                {nonListElements('Contact Us')}
                {listElements('Pages', pagesitems)}
            </ul>
        </nav>
    )

    return navBar;
}

export default Navbar;
