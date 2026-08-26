import React from 'react';
import ProductCart from './ProductCart';

const Cart = ({cart, setCart}) => {
    return (
        <div className='cart-parent'>
            <h2>Cart</h2>

             <div className="products-grid">
          {cart.map((product) => (
            <ProductCart product={product} key={product.id} cart={cart} setCart={setCart} />
          ))}
        </div>
        </div>
    );
};

export default Cart;