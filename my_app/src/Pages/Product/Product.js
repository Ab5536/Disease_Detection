import React, { useEffect, useState } from 'react';
import axios from "axios";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/Products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => setError(error.message));
  }, []);
  const clickButtonHandler=async ()=>{
    const result = await axios.post('http://localhost:5000/api/Products')
            
  }
  return (    
    <div>
        <button onClick={clickButtonHandler}>Fetch Product</button>
      <h2>Product List</h2>
      {error && <p>Error: {error}</p>}
      {products.length > 0 ? (
        products.map(product => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))
      ) : (

        <p>No products available.</p>
      )}
    </div>
  );
}

export default ProductList;
