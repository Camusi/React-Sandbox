import { Link } from 'react-router-dom';
import './styles/Home.css';
import donuts_img from './resources/donuts.png';
import bush_img from './resources/bush.jpg';
import couch_img from './resources/couch.png';
import { useState } from 'react';
import buttonUp from './resources/button.png';
import buttonDown from './resources/button-down.png';

export default function Home({setGold}) {
    return (
        <div className="home">
            <h1>Sammy Sandbox</h1>
            <div className="island-container">
                <IslandCard
                    title="Stacked Donuts"
                    img={donuts_img}
                    description="Explore my obsession."
                    link="/beach"
                />
                <IslandCard
                    title="Lunxury Couches"
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

            <CoinButton setGold={setGold}/>
        </div>
    );
}


function IslandCard({ title, img, description, link }) {
    return (
        <Link to={link} className="island-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </Link>
    );
}


function CoinButton({ setGold }) {
    const [coins, setCoins] = useState([]);
    const [isPressed, setIsPressed] = useState(false);

    function handleMouseDown() {
        setIsPressed(true);
        setGold(g => g + 1);
        addCoin();
    }

    function handleMouseUp() {
        setIsPressed(false);
    }

    function addCoin() {
        const id = Date.now();
        const left = Math.random() * 60 + 20;
        const newCoin = { id, left };
        setCoins((coins) => [...coins, newCoin]);
    }

    return (
        <div className="coin-button-container">
            <img
                src={isPressed ? buttonDown : buttonUp}
                alt="Coin Button"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                className="coin-button-img"
            />
            {coins.map(({ id, left }) => (
                <span key={id} className="coin-emoji" style={{left: `${left}%`, bottom: '100%', fontSize: '2rem',}}>+1🪙
                </span>
            ))}
        </div>
    );
}

