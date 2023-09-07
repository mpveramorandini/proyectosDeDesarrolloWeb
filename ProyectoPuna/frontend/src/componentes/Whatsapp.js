import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

function Whatsapp() {
  return (
    <div className="AppWhatsapp">
      <ReactWhatsappButton
        countryCode="54"
        phoneNumber="1164850001"
        message="CARGO EXPRES"
        img src="/public/favicon-32x32.png"
       
        style={{
            // backgroundColor:"#9c8c72",
            height:"3rem",
            width:"3rem",
            left: "unset",
            right: "15px",
        }}
      />
    </div>
  )
}

export default Whatsapp;