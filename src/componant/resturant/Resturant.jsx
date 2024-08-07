import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  padding: '15px 30px',
  margin: '10px',
  borderRadius: '8px',
  fontSize: '20px',
  background: '#3498db',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background 0.3s ease-in-out',
};

const linkHoverStyle = {
  background: '#2980b9',
};

export default function Resturant() {
  return (
    <div style={containerStyle}>
      <Link to="/Pizza" style={linkStyle} activeStyle={linkHoverStyle}>
        Pizza
      </Link>
      <Link to="/Onion" style={linkStyle} activeStyle={linkHoverStyle}>
        Onion
      </Link>
      <Link to="/Salad" style={linkStyle} activeStyle={linkHoverStyle}>
        Salad
      </Link>
    </div>
  );
}
