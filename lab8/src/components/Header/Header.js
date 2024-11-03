import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/rocket__in__tab.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <img src={logo} alt="Rocket Logo" className="header-logo" />
          <h1 className="header-title">World Rocket</h1>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/contact">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
