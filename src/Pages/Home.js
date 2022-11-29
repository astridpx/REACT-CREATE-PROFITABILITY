import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../assets/banner.jpg";
import "../Styles/Home.css";

import AboutUs from "./AboutUs";
import Press from "./Press";
import Contact from "./Contact";
// icons
import { BsFillPlayCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Navbar />
        <div className="banner-wrap">
          <div className="overlay"></div>
          <div className="banner">
            <img src={Banner} id="imgBanner" />
          </div>
        </div>
        <div className="hero">
          <div className="hero-child">
            <h1 className="hero-text">
              create <br /> software <br /> solution
            </h1>

            <p>
              At your price business <br />
              travel solution
            </p>
            <button type="button">
              <p>Write to us </p> <BsFillPlayCircleFill className="icons" />
            </button>
          </div>
        </div>
      </div>
      <AboutUs />
      <Press />
      <Contact />
    </>
  );
};
export default Home;
