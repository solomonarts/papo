import React, { useState, useEffect, useRef } from "react";
import papologo from "../assets/images/papologo.png";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const menuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // state for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // toggle the menu state
  };

  // Function to close menu if clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  // Attach event listener when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <img src={papologo} className="nav-logo" alt="Logo" />
          $PAPO
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Mobile menu */}
        <div
          ref={menuRef}
          className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
        >
          <button className="close-button" onClick={toggleMobileMenu}>
            <MdOutlineClose />
          </button>
          <ul className="nav-links-mobile">
            <li>
              <a onClick={toggleMobileMenu} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={toggleMobileMenu} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={toggleMobileMenu} href="#how-it-works">
                How It Works
              </a>
            </li>
            <li>
              <a onClick={toggleMobileMenu} href="#apply">
                Apply for Funding
              </a>
            </li>
            <li>
              <a onClick={toggleMobileMenu} href="#faq">
                FAQ
              </a>
            </li>
            <li>
              <a onClick={toggleMobileMenu} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#how-it-works">How It Works</a>
          </li>
          <li>
            <a href="#apply">Apply for Funding</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
