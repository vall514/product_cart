import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>Your added items will appear here</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <span>{item.name}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.name, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.name, 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.name)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
