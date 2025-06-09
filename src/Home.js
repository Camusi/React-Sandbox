import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/Home.css';
import donuts_img from './resources/donuts.png';
import bush_img from './resources/bush.jpg';
import couch_img from './resources/couch.png';
import beach_img from './resources/beach.JPG';
import buttonUp from './resources/button.png';
import buttonDown from './resources/button-down.png';


export default function Home({setGold, multiplier}) {
    return (
        <div className="home">
            <h1>Sammy Sandbox</h1>
            <div className="island-container" style={{ backgroundImage: `url(${beach_img})` }}>
                <IslandCard
                    title="Stacked Donuts"
                    img={donuts_img}
                    description="Explore my obsession."
                    link="/beach"
                />
                <IslandCard
                    title="Luxury Couches"
                    img={couch_img}
                    description="Get pranked because they are not real."
                    link="/forest"
                />
                <IslandCard
                    title="Majestic Mountains"
                    img={bush_img}
                    description="Walk valleys and enjoy breathtaking views."
                    link="/mountain"
                />
            </div>

            <CoinButton setGold={setGold} multiplier={multiplier} />
        </div>
    );
}
Home.propTypes = {
    setGold: PropTypes.func.isRequired,
    multiplier: PropTypes.number.isRequired,
};



function IslandCard({title, img, description, link}) {
    return (
        <Link to={link} className="island-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </Link>
    );
}
IslandCard.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};



function CoinButton({setGold, multiplier}) {
    const [coins, setCoins] = useState([]);
    const [isPressed, setIsPressed] = useState(false);

    function handleMouseDown() {
        setIsPressed(true);
        const amount = 1 * multiplier;
        setGold((g) => g + amount);
        addCoin(amount);
    }

    function handleMouseUp() {
        setIsPressed(false);
    }

    function addCoin(amount) {
        const id = Date.now();
        const left = Math.random() * 60 + 20;
        const newCoin = { id, left, amount };
        setCoins((coins) => [...coins, newCoin]);
    }

    return (
        <div className="coin-button-container">
            <button
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                className="coin-button-img"
                style={{ background: 'none', border: 'none', padding: 0 }}
                aria-label="Coin Button"
            >
                <img src={isPressed ? buttonDown : buttonUp} alt=""/>
            </button>

            {coins.map(({ id, left, amount }) => (
                <span key={id} className="coin-emoji" style={{ left: `${left}%`, bottom: '100%', fontSize: '2rem' }}>
                    +{amount}🪙
                </span>
            ))}
        </div>
    );
}
CoinButton.propTypes = {
    setGold: PropTypes.func.isRequired,
    multiplier: PropTypes.number.isRequired,
};
