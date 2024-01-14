import React from "react";

import ai from "../../assets/ai.png"; 
import people from "../../assets/people.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's build something with GPT3 </h1>
        <p>You will be amazed by using this new technology.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="email" />
          <button type="button">Get started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people img"/>
          <p>1.600 people has already tried OpenAi in last 24 hours.</p>
        </div>

      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="ai_img" />
      </div>
    </div>
  )
} 

export default Header;
