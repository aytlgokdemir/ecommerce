import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import Menu from "./Menu";
import LoginScreen from "./LoginScreen";

function Header() {
  const [hover, setHover] = useState(false);

  const handleToggleHover = () => {
    setHover((prevState) => !prevState);
  };

  const searchStyle = {
    fontSize: "18px",
    position: "absolute",
    top: "1.7cm",
    left: "25px",
    cursor: "pointer",
  };

  const iconStyle = {
    fontSize: "20px",
    margin: "10px",
    marginLeft: "30px",
    cursor: "pointer",
    marginTop: "1.7cm",
  };

  return (
    <>
      <div className="header">
        <div className="leftSide">
          <p className="logo">
            ecom
            <br />
            merce
          </p>
        </div>
        <div className="rightSide">
          <div className="boxes">
            <BsSearch style={searchStyle} />
            <input type="search" placeholder="Search" />
            <div
              className="login-screen"
              onMouseEnter={handleToggleHover}
              onMouseLeave={handleToggleHover}
            >
              <button
                style={{
                  width: "100px",
                  height: "9vh",
                  position: "relative",
                  top: "40%",
                  left: "15%",
                  border: "none",
                  backgroundColor: "white",
                }}
              >
                <AiOutlineUser
                  style={{
                    position: "absolute",
                    fontSize: "20px",
                    cursor: "pointer",
                    marginLeft: "-40px",
                    top: "40%",
                  }}
                />
                <p className="user">Login/Register</p>
              </button>
              {hover && <LoginScreen />}
            </div>
            <div
              style={{
                marginLeft: "80px",
                marginTop: "2px",
              }}
            >
              <AiOutlineHeart style={iconStyle} />
              <SlBasket style={iconStyle} />
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
}

export default Header;
