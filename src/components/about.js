import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <div className="about">
      <div>
        <p>
          I am a Software Engineering Associate at Amdocs. I am learning Web
          Development skills. I am striving to be pixel perfect. When I am not
          coding I will probably be watching Football or a TV series.
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
            <li>Java</li>
          </ul>
          <ul>
            <li>Data Strcuture</li>
            <li>Algorithms</li>
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
