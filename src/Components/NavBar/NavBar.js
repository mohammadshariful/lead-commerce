import React, { useState } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import CustomLink from "../CustomLink/CustomLink";
import "./NavBar.css";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav-container">
      <h3 className="logo">
        <span>L</span>ead Commerce
      </h3>

      <div className="menu-bar" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-links ${open ? "menuClose" : "menuOpen"}`}>
        <CustomLink to="/">DashBoard</CustomLink>
        <CustomLink to="/orders">Orders</CustomLink>
        <CustomLink to="/checkout">CheckOut</CustomLink>
        <CustomLink to="/payment">Payment</CustomLink>
        <CustomLink to="/address">Address</CustomLink>
        <p className="shopping-cart">
          <FaShoppingCart />
          <span className="item">5</span>
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
