import { Link } from 'react-router-dom';
import logo from './resources/logo-skate-transparent.png';
import './styles/NavBar.css';
import PropTypes from "prop-types";

export default function NavBar({ gold, secretUnlocked, multiplier }) {
    return (
        <nav>
            <div className="logo-box">
                <img src={logo} alt="logo-black" className="logo"/>
            </div>
            <div className="link-box">
                <Link to="/">Home</Link>
                <Link to="/beginners-archive">Beginners Archive</Link>
                <Link to="/store">Store</Link>
                {secretUnlocked && <Link to="/secret-page">Secret Page</Link>}
            </div>
            <div className="gold-display">
                Gold: <span>{gold}</span> 🪙<br />
                Multiplier: x{multiplier}
            </div>
        </nav>
    );
}
NavBar.propTypes = {
    gold: PropTypes.number.isRequired,
    secretUnlocked: PropTypes.bool.isRequired,
    multiplier: PropTypes.number.isRequired
};

