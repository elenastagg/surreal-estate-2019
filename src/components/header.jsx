import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
  <div className="header-image">
    <header className="header">
      <img className="logo" src="https://i.pinimg.com/originals/1c/d6/22/1cd6226b62ebbd9e41dab207ae1eca6b.png" />
      <nav className="nav">
        <Link className="nav-item" to="/">Property Listings</Link>
        <Link className="nav-item" to="/add-property">Add Property</Link>
      </nav>
    </header>
  </div>
);

export default Header;
