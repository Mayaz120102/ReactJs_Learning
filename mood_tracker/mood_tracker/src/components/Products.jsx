import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import Cart from "./Cart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
   const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="pd-parents">
      <h2 className="products-heading">Products</h2>

      <Cart cart={cart} setCart={setCart}/>

      {isLoading ? (
        <p className="loading-text">Loading products...</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCart product={product} key={product.id} cart={cart} setCart={setCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
