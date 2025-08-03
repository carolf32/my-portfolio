import { useContext, useState } from "react";
import { RefsContext } from "../context/refsContext";
import project1 from "../assets/projects/burguerkenzie.png";
import project2 from "../assets/projects/pizza-menu-js.png";
import project3 from "../assets/projects/signin-signup-page.png";
import project4 from "../assets/projects/ecommerce-template.png";
import project5 from "../assets/projects/admin-stock.png";
import project6 from "../assets/projects/thedevelopers.png";
import project7 from "../assets/projects/hospital-app.png";
import project8 from "../assets/projects/chatapp.png";
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
                validation and Axios for the integration with the API. You can
                sign up, login and register/update/delete techlonogies in your
                profile page. Click
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
          <Project
            src={project4}
            alt="Audio e-commerce template project's photo"
            href="https://github.com/carolf32/audio-ecommerce-template/tree/main"
            text={
              <>
                This is my first Full Stack solo project. I used React JS on the
                Front End, Axios to conect with the server, Zod for validation
                and serialization, React Router Dom and Reack Hook Form for the
                routes and the forms, Tailwind Css for styling and finally
                Typescript. You can sign up, login, or enter as a guest. Add
                items on cart, see total and cart items. As employee you can
                add/update/remove products. You can try it{" "}
                <a
                  className="text-main-color"
                  target="_blank"
                  href="https://audio-ecommerce-template-m89p.vercel.app"
                >
                  {" "}
                  here{" "}
                </a>
              </>
            }
          />

          <Project
            src={project5}
            alt="Admin stock template"
            href="https://github.com/carolf32/admin-stock-template/tree/main"
            text={
              <>
                This application is aimed at controlling stock in an online
                headphones store. It's the second part of audio e-commerce's
                project. As employee you can add/update/remove products. Sign up
                or login your account. I used Typescript to program with React,
                React Router Dom for the routes, React Icons as the icon
                library, React Toastify for popups, Tailwind CSS for styling,
                Node JS for the back end, Axios to consume the API, Zod for
                serialization. Try it
                <a
                  className="text-main-color"
                  target="_blank"
                  href="https://admin-stock-template.vercel.app"
                >
                  {" "}
                  here{" "}
                </a>
              </>
            }
          />

          <Project
            src={project6}
            alt="The developers website template"
            href="https://github.com/carolf32/developers-angular-project"
            text={
              <>
                This application was my first Angular+Typescript project. It is
                a website with 4 devs, each one have its own comments page. You
                can check the comments or leave a comment if you are logged in.
              </>
            }
          />

          <Project
            src={project7}
            alt="The Hospital App"
            href="https://github.com/carolf32/hospital-appointments"
            text={
              <>
                This is a Full Stack application built with the MERN stack
                (MongoDB, Express.js, React.js, Node.js) that allows patients to
                book appointments with doctors, doctors to manage their
                schedules, and administrators to oversee the entire system. The
                system also includes online payment integration and three levels
                of authentication.
              </>
            }
          />

          <Project
            src={project8}
            alt="The Chat App"
            href="https://github.com/carolf32/chat-application"
            text={
              <>
                This project is a full stack real-time chat application built
                with React JS and Firebase. It allows users to create an
                account, chat with friends, and send images during
                conversations.
              </>
            }
          />
        </div>
      </Fade>
    </div>
  );
};
