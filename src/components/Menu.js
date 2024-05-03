import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Menu() {
  const [sideNavWidth, setSideNavWidth] = useState(0);

  const openNav = () => {
    setSideNavWidth(350);
  };

  const closeNav = () => {
    setSideNavWidth(0);
  };

  const buttonStyle = {
    display: "flex",
    position:'absolute',
    alignItems: "center",
    marginLeft: "-23px",
    cursor: "pointer",
    borderRadius:'20px',
    padding:'5px 15px',
    paddingBottom:'5px',
    fontSize: "18px",
    border: "none",
    color: "#fff",
    textDecoration: "none",
    fontFamily:'Poppins',
    backgroundColor:'black',
  };

  const iconStyle = {
    fontSize: "20px",
  };

  const navigationStyle = {
    display: "flex",
    alignItems: "center",
  };

  const linkStyle = {
    marginLeft: "40px",
    textDecoration: "none",
    color: "#000",
    fontSize: "18px",
    fontFamily: "Poppins",
  };

  return (
    <div>
      <div className="navigation">
        <div className="header-navigation">
            <div className="menu-navigation">
          <NavLink 
            to="/Menu"
            style={navigationStyle}
          >
            <button style={buttonStyle} onClick={openNav}>
              <BiMenu style={iconStyle} />
              Menu
            </button>
          </NavLink>
          </div>
          <div className="sidenav" style={{ width: sideNavWidth + "px" }}>
            <div className="closebtn-box">
              <AiOutlineCloseCircle className="closebtn" onClick={closeNav} />
            </div>
            <Link to="/">Home</Link>
            <Link to="/Kitchen">Kitchen</Link>
            <Link to="/Decoration">Decoration</Link>
          </div>
          <Link style={linkStyle} to="/trending">Trending</Link>
          <Link style={linkStyle} to="/home">Home</Link>
          <Link style={linkStyle} to="/about">About</Link>
          <Link style={linkStyle} to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
