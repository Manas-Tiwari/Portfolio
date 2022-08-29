import React from "react";
import ProjectCard from "../../components/project-card/project-card.component";

class Projects extends React.Component {
  state = {
    projects: [
      {
        title: "Terminal Protfolio",
        description: "Get to know manas via `npx npx_manas`",
        tech: ["Nodejs"],
      },
      {
        title: "Protfolio Website",
        description: "Manas Tiwari portfolio website",
        tech: ["React.js", "JS", "HTML", "CSS"],
      },
      {
        title: "Dad jokes",
        description: "Get lame old dad jokes on https://manas-tiwari/github.io",
        tech: ["JS", "HTML", "CSS"],
      },
      {
        title: "Weather Website",
        description: "Know weather conditions of your location",
        tech: ["React.js", "JS", "HTML", "CSS"],
      },
    ],
  };

  render() {
    return (
      <div className="container mx-auto flex max-w-7xl flex-row flex-wrap my-16 justify-evenly">
        <ProjectCard
          title="cli protfolio"
          desc="Get to know The great Manas Tiwari via `npx npx_manas`, nodejs should be installed in your computer."
        />
        <ProjectCard
          title="Dad jokes"
          desc="The great dad jokes website created for lame old jokes."
        />
        <ProjectCard
          title="cli protfolio"
          desc="Get to know The great Manas Tiwari via `npx npx_manas`, nodejs should be installed in your computer."
        />
        <ProjectCard
          title="cli protfolio"
          desc="Get to know The great Manas Tiwari via `npx npx_manas`, nodejs should be installed in your computer."
        />
        <ProjectCard
          title="cli protfolio"
          desc="Get to know The great Manas Tiwari via `npx npx_manas`, nodejs should be installed in your computer."
        />
      </div>
    );
  }
}

export default Projects;
