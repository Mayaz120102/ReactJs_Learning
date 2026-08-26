import React, { useState } from "react";

const ProductCart = ({ product ,cart, setCart}) => {
 

  const handleCart = () => {
    setCart([...cart, product]);
  };

  console.log(cart, "cart from product");

  const isAlreadyInCart = cart.find(pd=>pd.id === product.id)
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-content">
        <span className="product-category">{product.category}</span>

        <h3 className="product-title">{product.title}</h3>

        <p className="product-description">{product.description}</p>

        <div className="product-rating">
          <span className="rating-star">★</span>
          <span>{product.rating.rate}</span>
          <span className="rating-count">({product.rating.count} reviews)</span>
        </div>

        <div className="product-footer">
          <span className="product-price">${product.price}</span>

          <button className="product-button" onClick={handleCart}>
            {isAlreadyInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
