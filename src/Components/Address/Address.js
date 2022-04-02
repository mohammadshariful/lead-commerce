import React from "react";
import { FaAddressCard, FaArrowLeft, FaLock } from "react-icons/fa";
const Address = () => {
  return (
    <div className="payment-container">
      <div className="add-payment method-container">
        <form className="payment-form">
          <div className="form-control">
            <label>Shipping Name</label>
            <input type="text" placeholder="Jhon Maker" />
          </div>
          <div className="form-control">
            <label>Street Name</label>
            <input type="text" placeholder="123 Plae Grond Stret" />
          </div>
          <div className="form-control">
            <label>City</label>
            <input type="text" placeholder="Vermont" />
          </div>
          <div className="form-control">
            <label>State/Province</label>
            <input type="text" placeholder="California" />
          </div>
          <div className="form-control">
            <label>Country</label>
            <input type="text" placeholder="United State of America" />
          </div>
        </form>
        <div className="box-container">
          <span className="box"></span>
          <p>Save this as your default payment method</p>
        </div>
        <button className="payment-button">
          <FaAddressCard /> <p>Add Address</p>
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

export default Address;
