import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../IMG/LOGO.svg'

function Header() {
    return (
        <header>
            <img src={logo} alt="kasa_logo" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/propos">À propos</Link>
            </nav>
        </header>
    );
}

export default Header;
