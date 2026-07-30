import logo from './logo.jpg';

function Header() {
  return (
    <header className="site-header">
      <div className="header__brand">
        <img src={logo} alt="Bold Lead Concepts logo" className="header__logo" />
      </div>
      <nav className="header__nav">
        <a href="#contact">Contact</a>
        <a href="#about">Learn more</a>
        <a href="#values">Our values</a>
      </nav>
    </header>
  );
}

export default Header;
