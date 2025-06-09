import './styles/Store.css';
import sunset_img from './resources/sunset.JPG';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export default function Store({ gold, setGold, setMultiplier, setSecretUnlocked }) {
    const [error, setError] = useState("");
    const [itemsBought, setItemsBought] = useState(() => {
        const saved = localStorage.getItem('itemsBought');
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem('itemsBought', JSON.stringify(itemsBought));
    }, [itemsBought]);

    const multipliers = [
        { id: 'x2', label: "x2 Multiplier", factor: 2, cost: 100, action: () => setMultiplier(m => m * 2) },
        { id: 'x3', label: "x3 Multiplier", factor: 3, cost: 300, action: () => setMultiplier(m => m * 3) },
        { id: 'x5', label: "x5 Multiplier", factor: 5, cost: 750, action: () => setMultiplier(m => m * 5) },
        { id: 'x10', label: "x10 Multiplier", factor: 10, cost: 1500, action: () => setMultiplier(m => m * 10) },
        { id: 'x20', label: "x20 Multiplier", factor: 20, cost: 3500, action: () => setMultiplier(m => m * 20) },
        { id: 'x50', label: "x50 Multiplier", factor: 50, cost: 8000, action: () => setMultiplier(m => m * 50) },
    ];

    const miscellaneous = [
        {
            id: 'secret',
            label: "Unlock Secret Page",
            cost: 5000,
            action: () => setSecretUnlocked(true),
        }
    ];

    function handlePurchase(item) {
        if (itemsBought[item.id]) return;
        if (gold >= item.cost) {
            setGold(gold - item.cost);
            item.action();
            setItemsBought(prev => ({ ...prev, [item.id]: true }));
            setError("");
        } else {
            setError("Not enough gold.");
        }
    }

    return (
        <div className="store-page">
            <h1>Store</h1>

            <section className="multipliers" style={{ backgroundImage: `url(${sunset_img})` }}>
                <h2>Multipliers</h2>
                <div className="store-grid">
                    {multipliers.map(item => (
                        <div key={item.id} className="store-item">
                            <h3>{item.label}</h3>
                            <p>Upgrade to x{item.factor}</p>
                            <p>Cost: {item.cost} 🪙</p>
                            <button
                                onClick={() => handlePurchase(item)}
                                disabled={itemsBought[item.id]}
                            >
                                {itemsBought[item.id] ? "Sold" : "Buy"}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="multipliers">
                <br/>
                <br/>
                <h2>Miscellaneous</h2>
                <div className="store-grid">
                    {miscellaneous.map(item => (
                        <div key={item.id} className="store-item">
                            <h3>{item.label}</h3>
                            <p>Cost: {item.cost} 🪙</p>
                            <button
                                onClick={() => handlePurchase(item)}
                                disabled={itemsBought[item.id]}
                            >
                                {itemsBought[item.id] ? "Sold" : "Buy"}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {error && <p className="store-error">{error}</p>}
        </div>
    );
}
Store.propTypes = {
    gold: PropTypes.number.isRequired,
    setGold: PropTypes.func.isRequired,
    setMultiplier: PropTypes.func.isRequired,
    setSecretUnlocked: PropTypes.bool.isRequired
};
