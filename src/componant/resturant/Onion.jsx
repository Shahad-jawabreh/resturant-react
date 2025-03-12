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
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '20px',
  marginTop: '20px',
};

const recipeCardStyle = {
  width: '300px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
};

const imageStyle = {
  width: '100%',
  height: '250px', // تعيين ارتفاع ثابت للصور
  objectFit: 'cover', // لتغطية الصورة بشكل جيد داخل المساحة المحددة
  borderRadius: '8px',
  marginTop: '10px',
  transition: 'transform 0.3s ease-in-out',
};

const titleStyle = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#333', // تغيير اللون
  margin: '10px 0',
  textTransform: 'uppercase', // تحويل العنوان إلى أحرف كبيرة
  letterSpacing: '1px', // إضافة مسافة بين الحروف
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

export default function Onion() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=onion`);
    const data1 = await response.json();
    setProducts(data1.recipes);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const addToCart = (recipe) => {
    setCart([...cart, recipe]);
    alert(`${recipe.title} added to cart!`);
  };

  const addToFavorites = (recipe) => {
    setFavorites([...favorites, recipe]);
    alert(`${recipe.title} added to favorites!`);
  };

  return (
    <div style={containerStyle}>
      <h1>Onion Recipes 🍽️</h1>
      <div style={rowStyle}>
        {products.map((ele) => (
          <div key={ele.recipe_id} style={recipeCardStyle}>
            <h2 style={titleStyle}>{ele.title}</h2>
            <span>Publisher: {ele.publisher}</span>
            <img
              src={ele.image_url}
              alt={ele.title}
              style={imageStyle}
              onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            />
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
