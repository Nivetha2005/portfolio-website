import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaHome, FaBriefcase, FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <header className="Header">
      <div className="logo">
        <h1>Nivetha T</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link"><FaHome /> Home</Link></li>
          <li><Link to="/projects" className="nav-link"><FaBriefcase /> Projects</Link></li>
          <li><Link to="/contact" className="nav-link"><FaEnvelope /> Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
