import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  backgroundColor: '#3498db', // لون خلفية الشريط العلوي
  padding: '10px 20px',
};

const linkStyle = {
  fontWeight: 'bold',
  color: '#fff',
  padding: '10px 15px',
  borderRadius: '5px',
  fontSize: '18px',
  textDecoration: 'none',
  transition: 'background 0.3s ease-in-out',
};

const linkHoverStyle = {
  backgroundColor: '#2980b9',
};

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={navStyle}>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              style={linkStyle}
              activeStyle={linkHoverStyle}
            >
              Home Page
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resturant"
              className="nav-link"
              style={linkStyle}
              activeStyle={linkHoverStyle}
            >
              Menu
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
