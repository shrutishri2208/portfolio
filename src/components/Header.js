import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
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
        <h2 className="2xl:text-xl xl:text-xl lg:scale-100 md:scale-95 sm:-mt-4 sm:scale-75 -mt-3 scale-75 mr-4 highlight1">
          resume
        </h2>
      </div>
    </div>
  );
};

export default Header;
