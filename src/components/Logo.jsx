import { Link } from "react-router-dom";
import "../css/Logo.css";

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src="/logo.svg" alt="MovieVerse Logo" className="logo-icon" />
      <span className="logo-text">MovieVerse</span>
    </Link>
  );
}

export default Logo; 