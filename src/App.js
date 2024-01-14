import React from "react";

import { Navbar, Brand, CTA  } from "./components";
import { Header, WhatGPT3, Solutions, Blog, Possibility, Footer } from "./containers";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <div className="app__max-size">
          <Header />
          <Brand />
          <WhatGPT3 />
          <Solutions />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  )
}; 


export default App;

