import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f4f4f9',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  padding: '15px 40px',
  margin: '12px',
  borderRadius: '10px',
  fontSize: '22px',
  fontWeight: 'bold',
  background: 'linear-gradient(135deg, #3498db, #2980b9)',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const linkHoverStyle = {
  transform: 'scale(1.1)',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
};

export default function Resturant() {
  return (
    <div style={containerStyle}>
      {['Pizza', 'Onion', 'Salad'].map((item) => (
        <Link 
          key={item} 
          to={`/${item}`} 
          style={linkStyle} 
          onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
