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
        <Link to="/projects">
          <h2 className="text-2xl ml-20">projects</h2>
        </Link>
        <Link to="/about">
          <h2 className="text-2xl ml-20">about</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
