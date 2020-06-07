import React, { useEffect, useState } from "react";
import projects from "../data/projectdata";
import Card from "./Card";
import "../css/project.css";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    setProjectsData(projects);
    console.log(projectsData);
  });
  return (
    <div className="project">
      <div className="cardlist">
        {projectsData.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
