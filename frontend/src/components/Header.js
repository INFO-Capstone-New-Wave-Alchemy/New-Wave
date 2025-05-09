import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
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
        {/* Logo on the left */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="NEWWAVE Logo" className="logo-image" />
          </Link>
        </div>

        {/* All links on the right */}
        <div className="navbar-links-wrapper">
          {/* Desktop Navigation */}
          <div className="navbar-links-desktop">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/ai-mentor" className="nav-link">AI Mentor</Link>
            <Link to="/goal-tracking" className="nav-link">Goal Tracking</Link>
            <Link to="/goal-overview" className="nav-link">Goal Overview</Link>
            <Link to="/goal-dashboard" className="nav-link">Goal Dashboard</Link>
            <Link to="/contact" className="contact-button">Contact Us</Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="navbar-mobile-toggle">
            <button
              onClick={toggleMenu}
              className="mobile-menu-button"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when closed */}
              <svg
                className={isMenuOpen ? "hidden" : "mobile-icon"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when open */}
              <svg
                className={isMenuOpen ? "mobile-icon" : "hidden"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`navbar-mobile-menu ${isMenuOpen ? "show" : ""}`}>
        <div className="mobile-menu-links">
          <Link to="/" className="mobile-nav-link">Home</Link>
          <Link to="/ai-mentor" className="mobile-nav-link">AI Mentor</Link>
          <Link to="/goal-tracking" className="mobile-nav-link">Goal Tracking</Link>
          <Link to="/goal-overview" className="mobile-nav-link">Goal Overview</Link>
          <Link to="/goal-dashboard" className="mobile-nav-link">Goal Dashboard</Link>
          <Link to="/contact" className="mobile-contact-button">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
