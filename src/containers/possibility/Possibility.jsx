import React from "react";

import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";


const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility_img"/>
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request early  to get started</h4>
        <h1 className="gradient__text">Possibility is beyond your imagination</h1>
        <p>Know this by gpt3</p>
        <h4> Request early  to get started</h4>
      </div>

    </div>
  )
}

export default Possibility; 