import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="nav-container">
      <h3 className="logo">
        <span>L</span>ead Commerce
      </h3>
      <div className="nav-links">
        <CustomLink to="/">DashBoard</CustomLink>
        <CustomLink to="/orders">Orders</CustomLink>
        <CustomLink to="/checkout">CheckOut</CustomLink>
        <CustomLink to="/payment">Payment</CustomLink>
        <CustomLink to="/address">Address</CustomLink>
      </div>
    </nav>
  );
};

export default NavBar;
