import React from "react";
import "../Styles/AboutUs.css";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Gallery1 from "../assets/gallery1.jpg";

// pages
import Product from "./Product";

const AboutUs = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-wrapper">
          <div className="gallery-box">
            <div className="one">
              <h2>About</h2>
              <h2>Us</h2>
            </div>
            <div className="two">{/* <img src={Gallery1} /> */}</div>
            <div className="three"></div>
          </div>
          <div className="info-box">
            <div className="info-text">
              <h2>
                Never doubt that a small group of thoughtful, committed people
                can change the world
              </h2>
              <p>
                Our endecriver has been to create world class travel and
                aviation technology solutions. We believe in building strong
                partnerships with our customerssto ensure that we are able to
                deliver or rebuilt and cost efficient solutions to them.
              </p>
            </div>
            <div className="bottom">
              <Button text="Read more" />
            </div>
          </div>
        </div>
      </div>

      {/* Swiper */}
      <Product />
    </>
  );
};

export default AboutUs;
