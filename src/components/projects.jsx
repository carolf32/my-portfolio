import { useContext, useState } from "react";
import { RefsContext } from "../context/refsContext";
import project1 from "../assets/projects/generic-website.png";
import project2 from "../assets/projects/pizza-menu-js.png";
import project3 from "../assets/projects/signin-signup-page.png";
import Project from "./project";

export const Projects = () => {
  const { myProjectsRef } = useContext(RefsContext);

  return (
    <div ref={myProjectsRef} className="px-10 md:px-15 lg:px-20 pb-20 ">
      <h2 className="text-3xl font-semibold my-10 text-center">
        Some of my projects
      </h2>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <Project src={project1} alt="Generic Website project's photo" />
        <Project src={project2} alt="Pizza Menus project's photo" />
        <Project src={project3} alt="Sign in and sign up project's photo" />
      </div>
    </div>
  );
};
