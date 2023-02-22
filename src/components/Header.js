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
        <h2 className="text-xl mr-4 highlight1">resume</h2>
      </div>
    </div>
  );
};

export default Header;
