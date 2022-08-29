import React from "react";
import cli from "./cli.png";
import Tag from "../tags/tags.component";
import './project-card.styles.css';

const ProjectCard = ({title, desc}) => {
  return (
    <a
      href="https://npmjs.com"
      alt="npmjs"
      className="mx-6 my-8"
    >
      <button>
        <div className="container w-full lg:max-w-xs">
          <div className="flex flex-col">
            <img
              className="project-img basis-56 rounded-t-2xl"
              src={cli}
              alt="Hero"
            />
            <div className="rounded-b-2xl bg-white p-5 text-left">
              <div className="text-2xl font-abril  font-bold pb-2 leading-relaxed tracking-wider">
                {title.toUpperCase()}
              </div>
              <p className="text-lg font-poppins font-medium text-zinc-700 leading-tight pb-4">
                {desc}
              </p>
              <div className="container font-poppins mx-auto flex flex-row text-zinc-800 flex-wrap">
                <Tag text="Nodejs" />
                <Tag text="TypeScript" />
                <Tag text="Nextjs" />
                <Tag text="Vuejs" />
                <Tag text="Reactjs" />
                <Tag text="JavaScript" />
              </div>
            </div>
          </div>
        </div>
      </button>
    </a>
  );
};

export default ProjectCard;
