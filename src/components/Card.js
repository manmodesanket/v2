import React, { useState } from "react";

const Projects = (props) => {
  const [project, setProject] = useState(props.project);
  return (
    <div className="card">
      <div className="title">
        <div>
          <h3>
            {" "}
            <span>{project.name}</span>
          </h3>
        </div>
        <div>
          <a href={project.github} target="_blank">
            Github
          </a>
        </div>
        <div>
          <a href={project.website} target="_blank">
            Website
          </a>
        </div>
      </div>
      <div>{project.description}</div>
      <div>
        <ul>
          {project.stack.map((s, i) => {
            return (
              <li>
                <span key={i}>{s}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
