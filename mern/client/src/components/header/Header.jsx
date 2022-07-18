import './Header.scss';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Logo />   
            <Link to="/login"><button>Login</button></Link>
        </header>
    )
}

export default Header;