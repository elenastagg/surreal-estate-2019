import React from 'react';
import '../styles/header.css';

const Header = () => (
  <header className="header">
    <img className="logo" src="https://i.pinimg.com/originals/1c/d6/22/1cd6226b62ebbd9e41dab207ae1eca6b.png" />
    <nav className="nav">
      <span className="nav-item">Property Listings</span>
      <span className="nav-item">Add Property</span>
    </nav>
  </header>
);

export default Header;
