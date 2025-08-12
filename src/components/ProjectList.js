import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
  console.log(projects);
  const loopProjects = projects.map((projects) => {
  return <ol key={projects.id}>
      <ul>
        {projects.name}
      </ul>
      <ul>
        {projects.about}
      </ul>
      <ul>
        {projects.technologies}
      </ul>
      <ProjectItem technologies={projects.technologies} />
  </ol>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{loopProjects}</div>
      
    </div>
  );
}

export default ProjectList;
