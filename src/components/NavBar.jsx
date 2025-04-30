import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Logo from "./Logo";

function NavBar() {
    return <nav className="navbar">
        <div className="nav-content">
            <Logo />
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </div>
    </nav>
}

export default NavBar