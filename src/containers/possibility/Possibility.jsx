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
        <h1 className="gradient__text">Possibility is beyond your imagination</h1>
        <p>The possibilities with GPT-3.5 are quite extensive due to its large-scale language model and versatile capabilities</p>
      </div>
    </div>
  )
}

export default Possibility; 