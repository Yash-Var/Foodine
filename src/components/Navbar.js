import React from "react";
import logo from "./logo_image.png";
import "../index.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div>
          <ul className="navbar-list">
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
