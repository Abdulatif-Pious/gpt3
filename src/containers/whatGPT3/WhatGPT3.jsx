import React from "react";

import Feature from "../../components/feature/Feature";
import "./whatGPT3.css"

const content = [
  {
    title: "Massive scale",
    text: "GPT-3.0 is capable of understanding and generating human-like text across a wide range of topics." 
  },
  {
    title: "Multifunctional capabilities",
    text: "It excels in varous natural language processing tasks, like language translatiin, code generateion and .etc" 
  },
  {
    title: "Contextual understanding",
    text: "GPT-3.0 model exhibts an advanced understanding of content in text." 
  }
]

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">GPT3 is excellent AI tool</h1>
        <p>This innovative technology is powerful enought to do massive tasks.</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        {content.map((item, index) => (
          <Feature 
            key={`${item.title}-${index}`}
            title={item.title} 
            text={item.text} />
        ))}
      </div>
    </div>
  )
}
export default WhatGPT3;
