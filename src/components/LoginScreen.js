/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import clf1 from "../assets/clf1.png";
import clf2 from "../assets/clf2.png";
import clf3 from "../assets/clf3.png";

function LoginScreen() {

  const rounded ={
        border:'1px solid #878686',
        borderRadius:'50%',
        width:'40px',
        height:'40px',
        cursor:'pointer'
  }

  return (
    <div className="login-form" style={{ zIndex: 1 }}>
      <div
        style={{
          margin: "10px",
          marginBottom: "20px",
        }}
      >
        <p>Existing Customer</p>
        <h5 style={{color:'#6b6a6a'}}>Forgotten Password?</h5>
        <button>Login</button>
        <hr />
        <p>New Customer</p>
        <button>Create an Account</button>
        <hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "25px 18px 18px",
          }}
        >
          <div style={rounded}>
            <div style={{margin:'4px', marginTop:'7px', marginLeft:'6px'}}>
           <img src={clf1}></img>
           </div>
          </div>
          <div style={rounded}>
            <div style={{margin:'4px', marginTop:'4px', marginLeft:'5px'}}>  
              <img src={clf2}></img>
            </div>
          </div>
          <div style={rounded}>
            <div style={{margin:'4px', marginTop:'5px', marginLeft:'5px'}}>
          <img src={clf3}></img>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
