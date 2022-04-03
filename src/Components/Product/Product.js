import React from "react";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import "./Product.css";
const Product = ({ product, handlerClick }) => {
  const { phone_name, brand, image } = product;
  return (
    <div className="product-container" data-aos="fade-up">
      <img src={image} alt="" />
      <div className="product-info">
        <p className="product-name">{phone_name}</p>
        <h4>Brand : {brand}</h4>
        <div className="btn-container">
          <button className="btn" onClick={() => handlerClick(product)}>
            <FaShoppingCart />
            <p>Add to Cart</p>
          </button>
          <button className="btn">
            <FaEye />
            <p>View Details</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
