import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import About from "./components/about";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import "./css/styles.css";

const App = () => {
  return (
    <div>
      <div className="content">
        <Navbar />
        <Router>
          <Intro path="/" />
          <About path="/about" />
          <Projects path="/projects" />
        </Router>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
