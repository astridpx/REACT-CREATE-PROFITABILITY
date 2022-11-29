import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./CStyles/Swiper.css";
export default function Carousel() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide className="swiper-card">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper-card">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-card">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-card">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-card">Slide 5</SwiperSlide>
        <SwiperSlide className="swiper-card">Slide 6</SwiperSlide>
        <SwiperSlide className="swiper-card">Slide 7</SwiperSlide>
        <SwiperSlide className="swiper-card">Slide 8</SwiperSlide>
        <SwiperSlide className="swiper-card">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
