import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="flex justify-end mt-16 footer b ">
      <div className="">
        <a href="https://github.com/shrutishri2208" target="_blank">
          <GitHubIcon className="scale-150 ml-8 highlight3" />
        </a>
        <a
          href="https://www.linkedin.com/in/shruti-shrivastava-676606228/"
          target="_blank"
        >
          <LinkedInIcon className="scale-150 ml-8 highlight3" />
        </a>
        <a
          href="mailto:shrutishri2208@gmail.com?body=Hello%20there%20profile%20viewer%20:)"
          target="_blank"
        >
          <EmailIcon className="scale-150 ml-8 highlight3" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
