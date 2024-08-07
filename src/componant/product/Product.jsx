import React, { useEffect, useState } from 'react';

export default function Product() {
  let [produc, setProduct] = useState([]);

  const getele = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getele();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '20px' }}>
      {produc.map((ele) => {
        return (
          <div key={ele.id} style={{ width: 'calc(25% - 20px)', border: '1px solid #ddd', margin: '10px', padding: '15px', textAlign: 'center' }}>
            <h2 style={{ color: '#333', fontSize: '1.5em', marginBottom: '10px' }}>{ele.title}</h2>
            <span style={{ display: 'block', marginTop: '10px', color: '#777' }}>Price: {ele.price}</span>
            <img src={ele.image} alt="" className='img-fluid' style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }} />
            <p style={{ marginTop: '10px', color: '#555' }}>Rate: {ele.rating.rate}</p>
          </div>
        );
      })}
    </div>
  );
}
