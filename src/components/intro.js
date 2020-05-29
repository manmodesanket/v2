import React from "react";
import "../css/intro.css";

const Intro = () => {
  return (
    <div>
      <div className="intro">
        <h1>Hello 👋</h1>
        <h2 className="intro_para">
          I'm <span>Sanket Manmode</span>, I call myself a Software Engineer. I
          am a Final year Engineering Student at MIT College of Engineering,
          Pune majoring in IT branch. Currently, I am in love with React and
          learning new things everyday.
        </h2>
        <div className="email">Get in touch at: manmodesanket@gmail.com</div>
      </div>
    </div>
  );
};

export default Intro;
