import logo from './logo.svg';
import './App.css';

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product =>
    <li
        key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
    >
        {product.title}
    </li>
);

let clicked = false;

export default function App() {
    return (
        <div>
            <h1>{clicked ? "Welcome to my app" : "Why haven't you clicked it yet?"}</h1>
            <MyButton /><br />
            <img className="avatar" src={logo} alt="logo"/>

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
    );
}


function MyButton() {
    let button_text = "Click me!";
    return (
      <button className="test_button">{button_text}</button>
    );
}
