import { useContext, useState } from "react";
import { RefsContext } from "../context/refsContext";
import project1 from "../assets/projects/burguerkenzie.png";
import project2 from "../assets/projects/pizza-menu-js.png";
import project3 from "../assets/projects/signin-signup-page.png";
import Project from "./project";
import { Fade } from "react-awesome-reveal";

export const Projects = () => {
  const { myProjectsRef } = useContext(RefsContext);

  return (
    <div ref={myProjectsRef} className="px-10 md:px-15 lg:px-20 pb-20 ">
      <Fade duration="3000" triggerOnce={false} fraction="0.2">
        <h2 className="text-3xl font-semibold my-10 text-center">
          Some of my projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          <Project
            src={project1}
            alt="Hamburger project's photo"
            href="https://github.com/carolf32/template-hamburgueria-react"
            text={
              <>
                My first React project, it simulates an food e-commerce and is
                fully responsive. I did it as one of the challenges while
                studying in Kenzie Academy. I used React Icons lib and SASS to
                customize. Click
                <a
                  className="text-main-color"
                  target="_blank"
                  href="https://template-hamburgueria-react.vercel.app"
                >
                  {" "}
                  here{" "}
                </a>
                to try it.
              </>
            }
          />
          <Project
            src={project2}
            alt="Pizza Menus project's photo"
            href="https://github.com/carolf32/pizza-menu-js"
            text={
              <>
                Made only with pure HTML, CSS and JS. Simulates an food
                e-commerce and is fully responsive. I did it as one of the
                B7Webs's course challenge. Click
                <a
                  className="text-main-color"
                  target="_blank"
                  href="https://carolf32.github.io/pizza-menu-js/"
                >
                  {" "}
                  here{" "}
                </a>
                to try it.
              </>
            }
          />
          <Project
            src={project3}
            alt="Sign in and sign up project's photo"
            href="https://github.com/carolf32/signin-signup-page"
            text={
              <>
                This was a Kenzie Academy's challenge, made with React, SASS for
                customization, Toastify library for the popups, Zod for
                validation and Axios for the integration with the API. Click
                <a
                  className="text-main-color"
                  target="_blank"
                  href="https://react-delta-ten.vercel.app"
                >
                  {" "}
                  here{" "}
                </a>
                to try it.
              </>
            }
          />
        </div>
      </Fade>
    </div>
  );
};
