import React from "react";
import { projects } from "../projects";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectsPage = () => {
  return (
    <div className="projects-container my-16">
      <div className="text-3xl projects-heading mb-4 mt-24">projects</div>
      <div className="items-container grid grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const { id, title, desc, tech, projectLink, githubLink } = project;
          const techStack = tech.join(", ");
          return (
            <div key={id} className="project-item m-4 p-4 rounded-2xl">
              <h2 className="font-bold text-2xl mb-2">{title}</h2>
              <div className="project-body">
                <p className="">{desc}</p>
                <div className="project-tech mt-4 ">
                  <p className="font-semibold mt-12 mb-4">{techStack}</p>
                </div>
              </div>
              <div className="project-links text-xs">
                <button className="highlight2 mr-4">view</button>
                <button className="highlight2">github</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
