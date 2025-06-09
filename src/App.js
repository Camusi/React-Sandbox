import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import BeginnersArchive from './BeginnersArchive';
import {useState} from "react";

export default function App() {
    const [gold, setGold] = useState(0)
    return (
        <div>
            <div style={{ height: '5rem', backgroundColor: "#fff9e6" }}></div>
            <NavBar gold={gold}/>
            <Routes>
                <Route path="/" element={<Home setGold={setGold}/>} />
                <Route path="/beginners-archive" element={<BeginnersArchive />} />
            </Routes>
        </div>
    );
}
