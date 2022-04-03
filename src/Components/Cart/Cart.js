import React from "react";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import Item from "../Item/Item";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <ul>
        {cart.map((item) => (
          <Item key={Math.random()} item={item} />
        ))}
      </ul>
      {cart.length === 0 || (
        <div className="btn-container">
          <button className="btn">
            <FaShoppingCart />
            <p>Checkout</p>
          </button>
          <button className="btn">
            <FaEye />
            <p>Review Order</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
