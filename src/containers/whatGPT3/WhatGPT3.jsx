import React from "react";

import Feature from "../../components/feature/Feature";
import "./whatGPT3.css"

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT3" text="Know this right now"/>
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">GPT3 is excellent AI tool</h1>
        <p>try this by us</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature title="possibility is beyond your imagination" text="GPT3 is a new technology. This awesome tool is innovation" />
        <Feature title="possibility is beyond your imagination" text="GPT3 is a new technology. This awesome tool is innovation" />
        <Feature title="possibility is beyond your imagination" text="GPT3 is a new technology. This awesome tool is innovation" />
      </div>
    </div>
  )
}
export default WhatGPT3;
