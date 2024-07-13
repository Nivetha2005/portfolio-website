

import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaMobileAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="Footer">
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/nivethat3" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/nivetha2005" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="tel:+91 9840077658"><FaMobileAlt />+91 9840077658</a>
        <a href="mailto:nivethatk03@gmail.com"><FaEnvelope /> nivethatk03@gmail.com</a>
      </div>
      <p>&copy; 2024 Nivetha. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

