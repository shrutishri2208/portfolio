import React from "react";

const AboutPage = () => {
  return (
    <div className="about-container my-16">
      <div className="name">
        shruti <br />
        shrivastava
      </div>
      <div className="main-text mx-2">
        <div className="description text-2xl">
          self-taught game developer, <br /> dabbling with <b>unity</b>,{" "}
          <b> react</b> and <b>blockchain</b>.
        </div>
        <div className="game-description text-2xl mt-20">
          first android game <span className="highlight1">murk</span> <br />
          live on google play store,
          <br />
          check it out <span className="highlight1">here</span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
