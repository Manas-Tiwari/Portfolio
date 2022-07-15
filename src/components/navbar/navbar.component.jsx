import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import "./navbar.style.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="max-w-7xl font-poppins mx-auto sm:px-6 lg:px-8 px-2 py-[4px]">
        <nav className="z-50 flex justify-center items-center">
          <div className="btn-primary">
            <FontAwesomeIcon icon={faProjectDiagram} className="pr-2" />
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              Projects
            </a>
          </div>
          <div className="btn-primary">
            <FontAwesomeIcon icon={faGithub} className="pr-2" />
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              Github
            </a>
          </div>
          <div className="btn-primary">
            <FontAwesomeIcon icon={faLinkedin} className="pr-2" />
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="btn-primary">
            <FontAwesomeIcon icon={faTwitter} className="pr-2" />
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
