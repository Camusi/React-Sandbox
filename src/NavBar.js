import { Link } from 'react-router-dom';
import logo from './resources/logo-skate-transparent.png';
import './styles/NavBar.css';

export default function NavBar({gold}) {
    return (
        <nav>
            <div className="logo-box">
                <img src={logo} alt="logo-black" className="logo"/>
            </div>
            <div className="link-box">
                <Link to="/">Home</Link>
                <Link to="/beginners-archive">Beginners Archive</Link>
            </div>
            <div className="gold-display">
                Gold: <span>{gold}</span> 🪙
            </div>
        </nav>
    );
}
