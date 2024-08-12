import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Card.css';
const url = "https://dummyjson.com/products";

function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url).then((resp) => {
      const products = resp.data.products;
      const firstNineProducts = products.slice(0, 9);
      setData(firstNineProducts);
    });
  }, []);

  
 
  return (
    <div className="card-container">
      {data.map((item) => (
        <div className="card-item" key={item.id}>
          <img src={item.images[0]} alt={item.title} className="image" />
          <p className="title">{item.title}</p>
          <p className="category">Category: {item.category}</p>
          <p className="price">Price: ${item.price}</p>
          <p className="brand">Brand: {item.brand}</p>
          <p className="weight">Weight: {item.weight} kg</p>
          <p className="rating">Rating: {item.rating}</p>
          <button className="card">Add to card</button>
          <button className="card1">Buy now</button>
        </div>
      ))}
    </div>
  );
}

export default Api;
