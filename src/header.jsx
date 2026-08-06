import { Link } from 'react-router-dom';
import logo from './logo.jpg';

function Header() {
  return (
    <header className="site-header">
      <div className="header__brand">
        <img src={logo} alt="Bold Lead Concepts logo" className="header__logo" />
      </div> 
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/partners">Partners</Link>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
