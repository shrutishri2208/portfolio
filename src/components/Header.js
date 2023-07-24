import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const handleResumeClick = () => {
    fetch("shrutiResume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "shrutiResume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="flex justify-between">
      <Link to="/">
        <div className="bg">
          <img src={logo} className="logo" />
        </div>
      </Link>
      <div className="flex">
        {/* <Link to="/projects">
          <h2 className="text-2xl ml-20">projects</h2>
        </Link> */}
        {/* <h2
          className="resume-btn 2xl:text-xl xl:text-xl lg:scale-100 md:scale-95 sm:-mt-4 sm:scale-75 -mt-3 scale-75 mr-4 highlight1"
          onClick={handleResumeClick}
        >
          resume
        </h2> */}
      </div>
    </div>
  );
};

export default Header;
