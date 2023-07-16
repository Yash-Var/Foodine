import React, { useState } from "react";
import logo from "./logo_image.png";
import "../index.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [auth, setAuth] = useState(true);
  return (
    <>
      <div className="navbar">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div>
          <ul className="navbar-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Cart</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          {auth === false ? (
            <button onClick={() => setAuth(true)}>Logout</button>
          ) : (
            <button onClick={() => setAuth(false)}>Login</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
