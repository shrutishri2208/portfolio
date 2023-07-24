import React from "react";

const ProjectItem = ({ id, title, desc, tech, projectLink, githubLink }) => {
  const techStack = tech.join(", ");
  return (
    <div className=" mb-8">
      <div key={id} className="project-item mx-4 p-4 rounded-2xl h-full">
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
    </div>
  );
};

export default ProjectItem;
