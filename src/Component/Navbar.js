// Children
import Logo from './navbar/Logo';
import Menu from './navbar/Menu';
// gmn sih ya heheh
// const image = require('./navbar/logo192.png');
import image from './navbar/logo192.png';

// Parent
const Navbar = () => {
    return (
        <div>
            <Logo sumber={image}/>
            <Menu menu1='Home' menu2='About' menu3='Contact' />
        </div>
    )
}

export default Navbar;