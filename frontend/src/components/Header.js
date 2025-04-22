import React, { useState } from 'react';
import '../index.css';
import logo from '../img/NEWWAVE-Wordmark-Blue.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="/" className="logo-link">
              <img src={logo} alt="NEWWAVE Logo" className="logo-image" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="navbar-links-desktop">
            <a href="/" className="nav-link">Home</a>
            <a href="/ai-mentor" className="nav-link">AI Mentor</a>
            <a href="/goal-tracking" className="nav-link">Goal Tracking</a>
            <a href="/contact" className="contact-button">Contact Us</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="navbar-mobile-toggle">
            <button
              onClick={toggleMenu}
              className="mobile-menu-button"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={isMenuOpen ? "hidden" : "mobile-icon"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={isMenuOpen ? "mobile-icon" : "hidden"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`navbar-mobile-menu ${isMenuOpen ? "show" : ""}`}>
          <div className="mobile-menu-links">
            <a href="/" className="mobile-nav-link">Home</a>
            <a href="/ai-mentor" className="mobile-nav-link">AI Mentor</a>
            <a href="/goal-tracking" className="mobile-nav-link">Goal Tracking</a>
            <a href="/contact" className="mobile-contact-button">Contact Us</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;