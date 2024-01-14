import React from "react";

import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const blogData = [
  {
    imgUrl: blog01,
    date: "Jan 23, 2023",
    text: "New model has been launched"
  },
  {
    imgUrl: blog02,
    date: "Feb 15, 2023",
    text: "New feature is being tested"
  },
  {
    imgUrl: blog03,
    date: "March 3, 2023",
    text: "The advantage of  GPT-3.0 model"
  },
  {
    imgUrl: blog04,
    date: "Apr 17, 2023",
    text: "New GPT-4.0 model"
  },
  {
    imgUrl: blog05,
    date: "May 23, 2023",
    text: "New model surpasses possibility"
  },
]


const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Read our articles</h1>
      </div>

      <div className="gpt3__blog-container">
        
        <div className="gpt3__blog-container_groupA">
          {blogData.slice(0,1).map((item) => (
            <Article 
              key={item.date}
              imgUrl={item.imgUrl} 
              date={item.date} 
              text={item.text} />
          ))}
        </div>

        <div className="gpt3__blog-container_groupB">
          {blogData.slice(1).map((item) => (
            <Article 
              key={item.date}
              imgUrl={item.imgUrl} 
              date={item.date} 
              text={item.text} />
          ))}
        </div>

      </div>

    </div>
  )
}

export default Blog;
