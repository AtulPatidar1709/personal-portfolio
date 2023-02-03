import React from "react";
import Intro from "./components/intro/";
import Skills from "./components/skills";
import Portfolio from "./components/portfolioo";
import Blogs from "./components/blogs/index"
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Intro />
      <Skills />
      <Portfolio/>
      <Blogs/>
    </div>

  );
}

export default App;
