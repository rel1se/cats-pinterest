import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header/index.jsx";
import HomePage from "./pages/HomePage/index.jsx";
import FavoritePage from "./pages/FavoritePage/index.jsx";
import {useState} from "react";
import {FavoriteProvider} from "./context/FavoriteContext.jsx";

function App() {
    const [activePage, setActivePage] = useState('all-cats');

    const handleNavigate = (page) => {
        setActivePage(page);
    };
    return (
        <FavoriteProvider>
            <Router>
                <Header activePage={activePage} onNavigate={handleNavigate} />
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/favorite" element={<FavoritePage/>}/>
                </Routes>
            </Router>
        </FavoriteProvider>

    );
}

export default App
