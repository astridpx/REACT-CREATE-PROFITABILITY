import React from "react";
import Button from "../components/Button";
import "../Styles/Contact.css";
import { BiMobile } from "react-icons/bi";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="title-wrapper">
            <div className="contact-title-card">
              <h2>Contact</h2>
            </div>
          </div>
          <div className="contact-map-wrapper">
            <div className="contact-info">
              <div className="support">
                <h3>Support</h3>
                <div className="mobile">
                  <label>
                    <BiMobile />
                  </label>
                  <p id="mobile">+63 992 838 8288</p>
                </div>
                <div className="mail">
                  <label>
                    <GrMail />
                  </label>
                  <p>support@gmail.com</p>
                </div>
              </div>
              <div className="sales">
                <h3>Sales </h3>
                <div className="mobile">
                  <label>
                    <BiMobile />
                  </label>
                  <p id="mobile">+63 992 838 8288</p>
                </div>
                <div className="mail">
                  <label>
                    <GrMail />
                  </label>
                  <p>support@gmail.com</p>
                </div>
              </div>
              <Button text="Contact us" />
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61877.02792612612!2d121.0214853286743!3d14.234881872553771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd7d3d83da264f%3A0x3a8e4025b00e304f!2sNuvali!5e0!3m2!1sen!2sph!4v1666014867299!5m2!1sen!2sph"
                width="600"
                height="450"
                allowFullScreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
