import React, { useState, useEffect } from "react";
import "../styles.css";
import Product from "./Product.js";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [price, setprice] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSearch = (e) => setSearch(e.target.value);
  const priceHandler = (e) => setprice(e.target.value);
  const ratingHandler = (e) => setRating(e.target.value);

  const matchesPrice = (productPrice, price) => {
    if (price === "<=$10") {
      return productPrice <= 10;
    } else if (price === "$10-$20") {
      return productPrice > 10 && productPrice <= 20;
    } else if (price === "$20-$30") {
      return productPrice > 20 && productPrice <= 30;
    } else if (price === "$30-$40") {
      return productPrice > 30 && productPrice <= 40;
    } else if (price === "$40-$50") {
      return productPrice > 40 && productPrice <= 50;
    }
    return true;
  };

  const filterProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const productPrice = product.price;
    const matchesRate = !rating || product.rating === parseFloat(rating);
    return matchesPrice(productPrice, price) && matchesRate && matchesSearch;
  });

  return (
    <div>
      {/* Creating Search Bar */}
      <input
        className="search-input"
        type="text"
        placeholder="search product..."
        value={search}
        onChange={handleSearch}
      />
      {/* Creating Price and Rating filter */}
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Price</label>
          <select
            className="filter-dropdown"
            onChange={priceHandler}
            value={price}
          >
            <option value="">All Prices</option>
            <option value="<=$10">{"<=$10"}</option>
            <option value="$10-$20">{"$10-$20"}</option>
            <option value="$20-$30">{"$20-$30"}</option>
            <option value="$30-$40">{"$30-$40"}</option>
            <option value="$40-$50">{"$40-$50"}</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={ratingHandler}
          >
            <option>Rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
      </div>

      {/* Creating Main Page  */}
      <div className="products-grid">
        {filterProducts.map((product) => (
          /* Calling product component */
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
    </div>
  );
}
