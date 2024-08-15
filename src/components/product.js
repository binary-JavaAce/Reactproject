import React from "react";

export default function Product(product) {
  return (
    <div key={product.id}>
      <img src={`images/${product.image}`} alt={product.title} />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{product.price}</p>
        <p className="product-rating">{product.rating}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
}
