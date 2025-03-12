import React, { useEffect, useState } from 'react';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '20px',
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginTop: '20px',
};

const recipeCardStyle = {
  width: '30%',
  backgroundColor: '#f8f9fa',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  position: 'relative',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover', // Ensures the image covers the area uniformly
  borderRadius: '8px',
  marginTop: '10px',
};

const titleStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#333',
};

const buttonHoverStyle = {
  backgroundColor: '#2980b9',
};
const buttonStyle = {
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  margin: '5px',
  transition: 'background 0.3s ease-in-out',
};

const addToCartStyle = {
  ...buttonStyle,
  background: '#28a745',
  color: '#fff',
};

const addToFavoritesStyle = {
  ...buttonStyle,
  background: '#ff4757',
  color: '#fff',
};

const likeButtonHoverStyle = {
  backgroundColor: '#c0392b',
};

export default function Pizza() {
  let [produc, setProduct] = useState([]);

  const getele = async () => {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data1 = await response.json();
    const data = data1.recipes;
    setProduct(data);
  };

  useEffect(() => {
    getele();
  }, []);

  return (
    <div style={containerStyle}>
      <div className="row" style={rowStyle}>
        {produc.map((ele) => (
          <div className="col-md-4" key={ele.recipe_id} style={recipeCardStyle}>
            <h2 style={titleStyle}>{ele.title}</h2>
            <span>Publisher: {ele.publisher}</span>
            <img src={ele.image_url} alt={ele.title} style={imageStyle} />
            <p>Rate: {ele.social_rank.toFixed(1)}</p>
            <button style={addToCartStyle} onClick={() => addToCart(ele)}>
              🛒 Add to Cart
            </button>
            <button style={addToFavoritesStyle} onClick={() => addToFavorites(ele)}>
              ❤️ Favorite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
