import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../styles/stagoutline.png';
import '../styles/header.css';

const Header = () => (
  <div className="header-image">
    <header className="header">
      <img className="logo" src={logo} />
      <nav className="nav">
        <Link className="nav-item" to="/">Property Listings</Link>
        <Link className="nav-item" to="/add-property">Add Property</Link>
      </nav>
    </header>
  </div>
);

export default Header;
