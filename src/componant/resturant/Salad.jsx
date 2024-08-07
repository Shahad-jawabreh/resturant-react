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
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginTop: '10px',
};

export default function Salad() {
  let [produc, setProduct] = useState([]);

  const getele = async () => {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=salad`);
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
            <h2>{ele.title}</h2>
            <span>Publisher: {ele.publisher}</span>
            <img src={ele.image_url} alt={ele.title} style={imageStyle} />
            <p>Rate: {ele.social_rank}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
