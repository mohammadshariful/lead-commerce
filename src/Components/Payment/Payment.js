import React from "react";
import { FaArrowLeft, FaCreditCard, FaLock } from "react-icons/fa";
import "./Payment.css";
const Payment = () => {
  return (
    <div className="payment-container">
      <div className="payment-method method-container">
        <h2>Select a card</h2>
        <p className="method">
          <FaCreditCard />
          <span className="text">MasterCard ending in 4242</span>
        </p>
        <p className="method">
          <FaCreditCard />

          <span className="text">VISA Debit ending in 2894</span>
        </p>
      </div>
      <div className="add-payment method-container">
        <h2>Add a new Card</h2>
        <form className="payment-form">
          <div className="form-control">
            <label>Cardholder Name</label>
            <input type="text" placeholder="Jhon Maker" />
          </div>
          <div className="form-control">
            <label>Card Number</label>
            <input type="text" placeholder="5126-5987-2214-7621" />
            <FaCreditCard className="credit-card" />
          </div>
          <div className="payment-date">
            <div className="form-control">
              <label>Expire Date</label>
              <input type="date" placeholder="MM/YYYY" />
            </div>
            <div className="form-control">
              <label>CVC</label>
              <input type="text" placeholder="123" />
            </div>
          </div>
        </form>
        <div className="box-container">
          <span className="box"></span>
          <p>Save this as your default payment method</p>
        </div>
        <button className="payment-button">
          <FaCreditCard /> <p>Add Payment Method</p>
        </button>
        <div className="footer-container">
          <p className="back-btn">
            <FaArrowLeft /> Back
          </p>
          <p className="secure-connention">
            <FaLock /> Secure Connection
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
