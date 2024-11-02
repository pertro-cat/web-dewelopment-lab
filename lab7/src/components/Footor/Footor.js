import React from "react";
import "./Footer.css";
import logo from "../images/rocket__in__tab.svg";
import facebookIcon from "../images/facebook-icon.svg";
import instagramIcon from "../images/instagram-icon.svg";
import twitterIcon from "../images/twitter-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <img src={logo} alt="Company Logo" className="footer__logo" />
          <h4>Great Rocket</h4>
        </div>
        <div className="footer__links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="you are gay" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="porn hub" />
          </a>
          <a
            href="https://x.com/home?lang=uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Elon Musk" />
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
