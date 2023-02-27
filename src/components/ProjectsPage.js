import React from "react";
import { projects } from "../projects";

const ProjectsPage = () => {
  return (
    <div className="projects-container my-16 ">
      <div className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl projects-heading mb-4 mt-24">
        projects
      </div>
      <div className="items-container grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project) => {
          const { id, title, desc, tech, projectLink, githubLink } = project;
          const techStack = tech.join(", ");
          return (
            <div key={id} className="project-item m-4 p-4 rounded-2xl">
              <h2 className="font-bold text-2xl mb-2 project-title">{title}</h2>
              <div className="project-body">
                <p className="">{desc}</p>
                <div className="project-tech mt-4 ">
                  <p className="font-semibold mt-12 mb-4">{techStack}</p>
                </div>
              </div>
              <div className="project-links text-xs">
                {projectLink && (
                  <a href={projectLink} target="_blank">
                    <button className="highlight2 mr-4">view</button>
                  </a>
                )}
                <a href={githubLink} target="_blank">
                  <button className="highlight2">github</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
