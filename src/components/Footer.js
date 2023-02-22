import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="flex justify-end mt-16 ">
      <GitHubIcon className="scale-115 ml-8" />
      <LinkedInIcon className="scale-125 ml-8" />
      <EmailIcon className="scale-125 ml-8" />
    </div>
  );
};

export default Footer;
