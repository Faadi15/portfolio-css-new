import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Fahad Siddiqui</p>
      <div className="footer-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
