import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "./CStyles/Button.css";

const Button = (props) => {
  return (
    <button type="button" id="btn">
      <p>{props.text}</p> <BsFillPlayCircleFill id="btn-icons" />
    </button>
  );
};

export default Button;
