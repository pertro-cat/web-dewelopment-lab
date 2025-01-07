import React from "react";
import "./Header.css"; // Підключіть CSS для стилізації

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">World Rocket</h1>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/rockets">Rockets</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
