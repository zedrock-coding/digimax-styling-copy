import '../index.css'; 
import logo from '../assets/logo_img.svg'; 

function Navbar() {
    var logo_img = require(logo);
}
function navItems(){
    let services = ['Web Development', 'App Development', 'Digital Marketing', 'Graphic Design', 'SEO'];
    let pages = ['page 1', 'page 2', 'page 3', 'page 4', 'page 5'];
    var items = ['Homepage', 'About Us', 'Services', 'Portfolio', 'Contact Us', 'Pages'];

    box = () => {
        for (let i = 0; i < items.length; i++) {
            if(items[i] === 'Services'){
                <li className='overflow-hidden hover:display-block hover:overflow-visible text-base bg-[--accent-bg]' key={i}>{items[i]}</li>
            }
        }
    }
}
