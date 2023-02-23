import React from "react";
import ProjectsPage from "./ProjectsPage";

const AboutPage = () => {
  return (
    <div className="about-container my-10">
      <div className="name 2xl:text-8xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl">
        shruti <br />
        shrivastava
      </div>
      <div className="main-text mx-2 mt-4">
        <div className="description 2xl:text-xl xl:text-xl lg:text-lg md:text-base sm:text-sm">
          i am a self-taught front-end developer and game developer, <br />{" "}
          dabbling with <b>unity</b>, <b> react</b> and <b>blockchain</b>.
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
