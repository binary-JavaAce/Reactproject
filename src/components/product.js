import React from "react";
import { useState } from "react";

export default function Product({ product, addProductToCart }) {
  //error handler
  const handler = (e) => (e.target.src = "images/default.jfif");
  const [inCart, setInCart] = useState(false);

  //Change color dynamically
  const getRating = (rating) => {
    if (rating >= 8) return "rating-good";

    if (rating >= 5 && rating < 8) return "rating-ok";
    else return "rating-bad";
  };

  //Setting cart value
  const addToCart = (product) => {
    addProductToCart(product);
    setInCart(true); // Update state to indicate product is in cart
  };

  return (
    <div key={product.id} className="product">
      <img
        src={`images/${product.image}`}
        alt={product.title}
        onError={handler}
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <p className={`product-rating ${getRating(product.rating)}`}>
          {product.rating}
        </p>
        <p className="product-description">{product.description}</p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className={inCart ? "added-to-cart" : "item-btn"}
      >
        Add To Cart
      </button>
    </div>
  );
}
