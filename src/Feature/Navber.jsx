import React from "react";
import "./navber.css"
import { Link } from "react-router";

const Navber = () => {
  return (
    <div>
      <div className="content">
        <h1 className="header-logo">Navber</h1>
        <ul className="menu-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contract">Contract</Link>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
        </ul>
        <ul className="menu-end">
          <li>
            <Link to="login">Log-In</Link>
          </li>
          <li>
            <Link to="signin">Register</Link>
          </li>
          <div>
            {/* <img src={""} alt="🤵‍♂️" /> */}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
