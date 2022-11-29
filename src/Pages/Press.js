import React from "react";

import "../Styles/Press.css";
import Button from "../components/Button";

// Logos
import Logos1 from "../assets/logos1.png";
import Logos2 from "../assets/logos2.png";
import Logos3 from "../assets/logos3.png";
import Logos4 from "../assets/logos4.png";
import Logos5 from "../assets/logos5.png";
import Logos6 from "../assets/logos6.png";

const Press = () => {
  return (
    <>
      <div className="press-container">
        <div className="press-wrapper">
          <div className="info-box">
            <div className="info-press-text">
              <h2>Infiniti software solutions plans global expansion</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                in eius obcaecati suscipit, voluptas quae sequi iusto
                cupiditate, magni vero dolores perspiciatis deserunt id
                dignissimos odit amet minus itaque! Nobis.
              </p>
              <Button text="Read more" />
            </div>
          </div>
          <div className="press-gallery">
            <div className="press-one">
              <h1>Press</h1>
            </div>
            <div className="press-two"></div>
            <div className="press-three"></div>
          </div>
        </div>
      </div>
      {/* logos Gallery */}
      <div className="logos-container">
        <div className="logos">
          <img src={Logos1} className="card-logo" />
        </div>
        <div className="logos">
          <img src={Logos2} className="card-logo" />
        </div>
        <div className="logos">
          <img src={Logos3} className="card-logo" />
        </div>
        <div className="logos">
          <img src={Logos4} className="card-logo" />
        </div>
        <div className="logos">
          <img src={Logos5} className="card-logo" />
        </div>
        <div className="logos">
          <img src={Logos6} className="card-logo" />
        </div>
      </div>
    </>
  );
};

export default Press;
