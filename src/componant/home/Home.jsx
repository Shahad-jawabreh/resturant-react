import React from 'react';

export default function Home() {
  const containerStyle = {
    backgroundImage: `url(public/backgrounf.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',  // Full height of the viewport
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',   // Text color on top of the background
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1>Welcome to our restaurant</h1>
        {/* Add other content as needed */}
      </div>
    </div>
  );
}
