import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoTriangleLeft } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import Button from "../components/Button";

// Logo Card
import Citrix from "../assets/logo-card1.png";
import Github from "../assets/card-logo2.png";
import Napster from "../assets/card-logo3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../Styles/Product.css";

const Product = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="product-container">
        <div className="card-wrapper">
          <div className="title-wrapper">
            <div className="title-card">
              <h2>
                Pro <br /> ducts
              </h2>
            </div>
            <div className="slider-button">
              {/* prev button */}
              <button onClick={() => swiperRef.current.swiper.slidePrev()}>
                <GoTriangleLeft className="triangle-btn first-btn" />
              </button>
              {/* Button nxt */}
              <button onClick={() => swiperRef.current.swiper.slideNext()}>
                <GoTriangleRight className="triangle-btn sec-btn" />
              </button>
            </div>
          </div>
          {/* slider */}
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            ref={swiperRef}
            className="mySwiper"
          >
            {/* Citrix Slider */}
            <SwiperSlide className="swiper-card">
              <BsFillCloudArrowUpFill className="icon-cloud" />
              <img src={Citrix} className="card-logo" />
              <div className="card-text">
                <h3>
                  Airline <br />
                  Solution
                </h3>
                <p>
                  An innovative solutions that helps airlines to effectively
                  customer complaints feedback and queries, if integrates with
                  the airlines website and acts on us CRM system.
                </p>
                <Button text="Book a demo" />
              </div>
            </SwiperSlide>
            {/* End of Citrix slider */}
            {/* Github Slider */}
            <SwiperSlide className="swiper-card">
              <BsFillCloudArrowUpFill className="icon-cloud" />
              <img src={Github} className="card-logo" />
              <div className="card-text">
                <h3>Expensive&nbsp;Management Solution</h3>
                <p>
                  An easy to use business travel & expense management solution
                  that helps automate travel booking and tracking of all expnses
                  using a single web based interface.
                </p>
                <Button text="Book a demo" />
              </div>
            </SwiperSlide>
            {/* End of Github slier */}
            {/* Napser Slider */}
            <SwiperSlide className="swiper-card">
              <BsFillCloudArrowUpFill className="icon-cloud" />
              <img src={Napster} className="card-logo" />
              <div className="card-text">
                <h3>Group Revenue Management</h3>
                <p>
                  GroupRM is an innovative solution that helps airlines to
                  effectively control group traffic, it aids in incoming sales
                  by enabling the group analysts to better manage and optimize
                  group sales
                </p>
                <Button text="Book a demo" />
              </div>
            </SwiperSlide>
            {/* End  of Napster Slider */}
            {/*  */}
            <SwiperSlide className="swiper-card">
              {" "}
              <BsFillCloudArrowUpFill className="icon-cloud" />
              <img src={Citrix} className="card-logo" />
              <div className="card-text">
                <h3>
                  Airline <br />
                  Solution
                </h3>
                <p>
                  An innovative solutions that helps airlines to effectively
                  customer complaints feedback and queries, if integrates with
                  the airlines website and acts on us CRM system
                </p>
                <Button text="Book a demo" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-card">
              {" "}
              <BsFillCloudArrowUpFill className="icon-cloud" />
              <img src={Citrix} className="card-logo" />
              <div className="card-text">
                <h3>
                  Airline <br />
                  Solution
                </h3>
                <p>
                  An innovative solutions that helps airlines to effectively
                  customer complaints feedback and queries, if integrates with
                  the airlines website and acts on us CRM system
                </p>
                <Button text="Book a demo" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Product;
