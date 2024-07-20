import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div className="header">
      <Link to="/">
        <img src="./assets/shared/logo.svg" alt="logo" />
      </Link>
      <button className="burger-button" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <ul className="header__links">
          <li className="header__links-item">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="header__links-item">
            <Link to="/destination" onClick={toggleMenu}>
              Destination
            </Link>
          </li>
          <li className="header__links-item">
            <Link to="/crew" onClick={toggleMenu}>
              Crew
            </Link>
          </li>
          <li className="header__links-item">
            <Link to="/technology" onClick={toggleMenu}>
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
