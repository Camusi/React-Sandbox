import './styles/BeginnersArchive.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const user = {
    name: 'Hedy Lamar',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product =>
    <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
        {product.title}
    </li>
);

// 🔹 Main Page component
export default function BeginnersArchive() {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="main">
            <div>
                <h1>{clicked ? "Welcome to my app" : "Why haven't you clicked it yet?"}</h1>
                <MyButton clicked={clicked} setClicked={setClicked} /><br />

                <h1>{user.name}</h1>
                <img
                    className="avatar"
                    src={user.imageUrl}
                    alt={'Photo of ' + user.name}
                    style={{
                        width: user.imageSize,
                        height: user.imageSize
                    }}
                />
                <ul>{listItems}</ul>
            </div>
        </div>
    );
}

// 🔹 Button component
function MyButton({clicked, setClicked}) {
    const [buttonClicks, setButtonClicks] = useState(0);

    function handleClick() {
        setClicked(true);
        setButtonClicks(buttonClicks + 1);
    }

    const buttonText = clicked ? `Thanks x${buttonClicks}` : 'Click me!';

    return (
        <>
            <div className="glass-btn-wrap">
                <button onClick={handleClick} className="glass-btn">
                    <span>{buttonText}</span>
                </button>
                <div className="glass-btn-shadow"></div>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                style={{position: "absolute", width: "100%", height: "100%", zIndex: "0"}}
            >
            </svg>
        </>
    );
}
MyButton.propTypes = {
    clicked: PropTypes.bool,
    setClicked: PropTypes.func
};
