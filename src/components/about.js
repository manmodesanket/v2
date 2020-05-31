import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <div className="about">
      <div>
        <p>
          I am a final year student at MIT College of Engineer. I am majoring in
          IT branch. Looking for opportunity as Software Engineer/Front-end
          Engineer. I am striving to be pixel perfect. Currently in love with
          React.
        </p>
      </div>
      <div>
        <span>Proficient Skills</span>
        <div className="skills">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>C++</li>
            <li>Git</li>
          </ul>
          <ul>
            <li>Data Strcuture</li>
            <li>Algorithms</li>
            <li>Agile Methodology</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
