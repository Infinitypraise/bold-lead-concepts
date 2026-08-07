import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header__brand">
        <img src={logo} alt="Bold Lead Concepts logo" className="header__logo" />
      </div>
      <button
        className={`header__toggle ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`header__nav ${isOpen ? 'is-open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link to="/partners" onClick={() => setIsOpen(false)}>Partners</Link>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
