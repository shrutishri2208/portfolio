import React from "react";
import { projects } from "../projects";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectsPage = () => {
  return (
    <div className="projects-container my-16">
      {/* <div className="text-2xl projects-heading mb-12">projects</div> */}
      <div className="items-container grid grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const { id, title, desc, tech, projectLink, githubLink } = project;
          return (
            <div key={id} className="project-item m-4 p-4 rounded-2xl ">
              <div className="project-header mb-8 flex justify-between">
                <p>&lt; {id} &gt;</p>
                <div className="links flex">
                  <GitHubIcon className="ml-4" />
                  <OpenInNewIcon className="ml-4" />
                </div>
              </div>
              <div className="project-body">
                <h2 className="font-bold text-xl mb-2">{title}</h2>
                <p className="text-xs">{desc}</p>
              </div>
              <div className="project-tech text-xs mt-4 grid grid-cols-2">
                {tech.map((item) => {
                  return (
                    <p className="bg-white bg-opacity-80 text-black rounded-full p-2 mr-2 mb-2 flex justify-center items-center">
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
