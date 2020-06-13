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
      <div>
        <span>Contact</span>
        <div className="contact">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/manmodesanket/"
                target="_blank"
              >
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
              </a>
            </li>
            <li>
              <a href="https://github.com/manmodesanket" target="_blank">
                <img src="https://img.icons8.com/material-rounded/48/000000/github.png" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/_manmodesanket" target="_blank">
                {" "}
                <img src="https://img.icons8.com/color/48/000000/twitter.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
