import React from "react";

import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title : "Amazed ? Just continue", 
    text : "You will be excited by features of gpt3"
  },  
  {
    title : "Amazed ? Just continue", 
    text : "You will be excited by features of gpt3"
  }, 
  {
    title : "Amazed ? Just continue", 
    text : "You will be excited by features of gpt3"
  }, 
  {
    title : "Amazed ? Just continue", 
    text : "You will be excited by features of gpt3"
  }
];


const Features = () => { 
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The future is Now and step into the future.</h1>
        <p>Get requested earlt to access it</p>
      </div>

      <div className="gpt3__features-container">
        {featuresData.map( (data, index) => {
          const { title, text } = data;

          return <Feature title={title} text={text} key={title + index}/>
        })}
      </div>
    </div>
  )
}

export default Features;