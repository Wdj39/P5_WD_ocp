import './Footer.scss';
import logo_f from '../../IMG/LOGO Footer.svg'

function Footer() {
    return (
        <footer>
            <img src={logo_f} alt="kasa_logo" />
            <p>© 2024 Kasa. Tous droits réservés</p>
        </footer>
    );
}

export default Footer;
