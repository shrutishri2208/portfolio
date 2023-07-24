import React from "react";
import { projects } from "../projects";
import ProjectItem from "./ProjectItem";

const ProjectsPage = () => {
  return (
    <div className="projects-container my-16 ">
      <div className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl projects-heading mb-4 mt-24">
        projects
      </div>
      <div className="items-container grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project) => {
          return <ProjectItem {...project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
