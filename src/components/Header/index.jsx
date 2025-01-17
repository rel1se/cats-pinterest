import {Link} from "react-router-dom";
import "./Header.scss"

const Header = ({activePage, onNavigate}) => {
    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/">
                    <button
                        className={`header-button ${activePage === 'all-cats' ? 'active' : ''}`}
                        onClick={() => onNavigate('all-cats')}
                    >
                        Все котики
                    </button>
                </Link>
                <Link to="/favorite">
                    <button
                        className={`header-button ${activePage === 'favorite-cats' ? 'active' : ''}`}
                        onClick={() => onNavigate('favorite-cats')}
                    >
                        Любимые котики
                    </button>
                </Link>
            </nav>
        </header>
    )
}

export default Header;