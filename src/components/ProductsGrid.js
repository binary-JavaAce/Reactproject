import React, { useState, useEffect } from "react";
import "../styles.css";
import Product from "./product";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="product">
      {products.map((product) => (
        <Product produc={product}></Product>
      ))}
    </div>
  );
}
