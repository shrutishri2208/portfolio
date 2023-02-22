import React from "react";
import ProjectsPage from "./ProjectsPage";

const AboutPage = () => {
  return (
    <div className="about-container my-10">
      <div className="name">
        shruti <br />
        shrivastava
      </div>
      <div className="main-text mx-2 mt-4">
        <div className="description text-lg">
          self-taught game developer, <br /> dabbling with <b>unity</b>,{" "}
          <b> react</b> and <b>blockchain</b>.
        </div>
        {/* <div className="game-description text-2xl mt-20">
          first android game <span className="highlight1">murk</span> <br />
          live on google play store,
          <br />
          check it out <span className="highlight1">here</span>
        </div> */}
        <ProjectsPage />
      </div>
    </div>
  );
};

export default AboutPage;
