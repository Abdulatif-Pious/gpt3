import React from "react";

import "./footer.css";
import logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text"> Do you want step in to the future ahead others</h1>
      </div>

      <div className="gpt3__footer-btn"> 
        <p>Reaquest early access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="logo_img"/>
          <p>Address <br /> All rights reserved.</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Privacy policy</p>
          <p>Terms and conditions</p>
          <p>contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>address</p>
          <p>telphone number</p>
          <p>email</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@2021 gpt3. <br />All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer;


