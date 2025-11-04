import { Link } from "react-router";
import logo from '@/assets/logo.png';

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo Kasa" className="header__logo"/>
            <nav className="header__navbar" aria-label="Navigation principale">
                <ul className="header__navbar-list">
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/apropos">À propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
