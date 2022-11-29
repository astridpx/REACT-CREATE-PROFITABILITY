import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { RiMenu3Fill } from "react-icons/ri";
import "../Styles/Navbar.css";

const Navbar = () => {
  const AboutUs = useRef();
  const AboutClick = () => {
    console.log("ke");
    AboutUs.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="nav-container">
        <nav>
          <div className="logo">
            <img src={Logo} className="logo-img" />
            <label>CREATE</label>
          </div>
          <ul>
            <div className="navlinks">
              <li>
                <Link to="/" onClick={AboutClick}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </div>
            <div className="btns">
              <button>Login</button>
              <button>Register</button>
              <RiMenu3Fill id="menu" />
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
