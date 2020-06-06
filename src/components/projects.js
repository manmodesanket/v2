import React, { useEffect, useState } from "react";
import projects from "../data/projectdata";
import Card from "./Card";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    setProjectsData(projects);
    console.log(projectsData);
  });
  return (
    <div>
      <ul>
        {projectsData.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </ul>
    </div>
  );
};

export default Projects;
