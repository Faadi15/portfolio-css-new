import React from 'react';
import Image from 'next/image';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-image">
        <img src="src\app\fahad.jpg" alt="Profile" className="header-img" />
      </div>
      <div className="header-text">
        <h1 className="header-title">Fahad Siddiqui</h1>
        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
//