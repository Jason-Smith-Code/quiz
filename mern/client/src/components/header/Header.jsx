import './Header.scss';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Logo />   
            <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </header>
    )
}

export default Header;