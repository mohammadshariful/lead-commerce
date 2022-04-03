import React, { useEffect, useState } from "react";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Item from "../Item/Item";
import "./Cart.css";

const Cart = ({ cart }) => {
  let navigate = useNavigate();
  const [msg, setMsg] = useState("");
  useEffect(() => {
    if (cart.length === 2) {
      setTimeout(() => {
        setMsg(
          `Thanks added more product.Now you have products : ${cart.length}`
        );
      }, 500);
    } else {
      setMsg("");
    }
  }, [cart]);

  return (
    <div className="cart" data-aos="fade-up">
      <h2>Order Summary</h2>
      <div className="notify">
        {cart.length === 0 && <p>Please add product</p>}
        {cart.length === 1 && <p>Please add more product</p>}
        {msg}
      </div>
      <hr />
      <ul>
        {cart.map((item) => (
          <Item key={Math.random()} item={item} />
        ))}
      </ul>
      {cart.length === 0 || (
        <div className="btn-container">
          <button className="btn" onClick={() => navigate("/checkout")}>
            <FaShoppingCart />
            <p>Checkout</p>
          </button>
          <button className="btn" onClick={() => navigate("/orders")}>
            <FaEye />
            <p>Review Order</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
