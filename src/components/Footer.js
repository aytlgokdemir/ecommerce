/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Payment1 from "../assets/payment1.svg";
import Payment2 from "../assets/payment2.svg";
import Payment3 from "../assets/payment3.svg";
import Payment4 from "../assets/payment4.svg";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";

function Footer() {
  const paymentStyle = {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "15px",
  };

  const linkStyle = {
    flexBasis: "50%",
    listStyle: "none",
    marginRight: "-40px",
  };

  const rounded ={
    display:'flex',
    border:'2px solid #fff', 
    borderRadius:'50px', 
    width:'30px', 
    height:'30px',
    marginRight:'10px'
  };

  const iconStyle = {
    fontSize: "15px",
    cursor: "pointer",
    margin:'6px'
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-about">
          <div className="column">
            <h3 className="services-title">ABOUT</h3>
            <ul>
              <li className="services-link">
                <a href="#">About ecommerce</a>
              </li>
              <li className="services-link">
                <a href="#">Privacy Policy and Cookies</a>
              </li>
              <li className="services-link">
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3 className="services-title">SERVICES</h3>
            <ul>
              <li className="services-link">
                <a href="#">Contact Us</a>
              </li>
              <li className="services-link">
                <a href="#">FAQ's</a>
              </li>
              <li className="services-link">
                <a href="#">Delivery</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3 className="services-title">INSPIRATION</h3>
            <ul>
              <li className="services-link">
                <a href="#">Blog</a>
              </li>
              <li className="services-link">
                <a href="#">Brands</a>
              </li>
              <li className="services-link">
                <a href="#">Trends</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3 className="services-title">CREATE ACCOUNT</h3>
            <p className="account">
              Seen Something you love? Why wait? Create an Account today!
            </p>
          </div>
        </div>

        <div className="footer-about">
          <div className="column1">
            <h3 className="services-title">PAYMENT METHODS</h3>

            <ul style={paymentStyle}>
              <li style={linkStyle}>
                <img src={Payment1} />
              </li>
              <li style={linkStyle}>
                <img src={Payment2} />
              </li>
              <li style={linkStyle}>
                <img src={Payment3} />
              </li>
              <li style={linkStyle}>
                <img src={Payment4} />
              </li>
            </ul>
          </div>

          <div className="column1">
            <h3 className="services-title">CALL US</h3>
            <p>000 000 000</p>
          </div>

          <div className="column1">
            <h3 className="services-title">GET SOCIAL</h3>
            <div style={{display:'flex',}}>
            <div style={rounded}>
            <BsFacebook style={iconStyle} />
            </div>
            <div style={rounded}>
            <BsInstagram style={iconStyle} />
            </div>
            <div style={rounded}>
            <BsTwitter style={iconStyle} />
            </div>
            <div style={rounded}>
            <BsPinterest style={iconStyle} />
            </div>
            </div>     
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
