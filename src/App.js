import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import NavBar from './NavBar';
import Home from './Home';
import BeginnersArchive from './BeginnersArchive';
import Store from "./Store";
import SecretPage from "./SecretPage";

export default function App() {
    const [gold, setGold] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [secretUnlocked, setSecretUnlocked] = useState(false);

    return (
        <div>
            <NavBar gold={gold} multiplier={multiplier} secretUnlocked={secretUnlocked} />
            <Routes>
                <Route path="/" element={<Home setGold={setGold} multiplier={multiplier} />} />
                <Route path="/beginners-archive" element={<BeginnersArchive />} />
                <Route
                    path="/store"
                    element={
                        <Store
                            gold={gold}
                            setGold={setGold}
                            multiplier={multiplier}
                            setMultiplier={setMultiplier}
                            secretUnlocked={secretUnlocked}
                            setSecretUnlocked={setSecretUnlocked}
                        />
                    }
                />
                {secretUnlocked && <Route path="/secret-page" element={<SecretPage />} />}
            </Routes>
        </div>
    );
}
