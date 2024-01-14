import React from "react";

import Feature from "../../components/feature/Feature";
import "./solutions.css";

const solutionData = [
  {
    title : "Natural Language Understanding", 
    text : `GPT-3.0  can do  tasks such as language translation, summarization, and content creation.`
  },  
  {
    title : "Code Generation and Assistance", 
    text : `Developers can leverage GPT-3.0 for generating code snippets, providing assistance 
      in programming tasks.`
  }, 
  {
    title : "Creative Writing and Content Generation", 
    text : `GPT-3.5 can be used to generate creative writing, including articles, stories, and 
      poetry.`
  }
];

const Solutions = () => { 
  return (
    <div className="gpt3__features section__padding" id="solutions">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">This discovery is the solution</h1>
        <p>Get requested earlt to access it</p>
      </div>

      <div className="gpt3__features-container">
        {solutionData.map((data, index) => (
          <Feature 
            key={data.title + index}
            title={data.title} 
            text={data.text} />
        ))}
      </div>
    </div>
  )
}

export default Solutions;