import Carolina from "../assets/Photo/carolina.jpeg";
import style from "../styles/styleSheet.module.scss";
import Resume from "../assets/CV-Carolina/CV-Carolina-do-Amaral-Frederico.pdf";
import { useContext } from "react";
import { RefsContext } from "../context/refsContext";
import { Fade } from "react-awesome-reveal";

export const Banner = () => {
  const { helloRef } = useContext(RefsContext);

  return (
    <div
      ref={helloRef}
      className="flex justify-between pt-20 px-10 md:px-15 md:pt-28 lg:px-20 lg:pt-48 lg:pb-28 items-center  "
    >
      <div className="w-80 h-80 flex flex-col justify-center gap-3">
        <Fade cascade damping={0.5} triggerOnce={false} duration="3000">
          <h1 className="text-4xl md:text-5xl">
            Hello there,
            <span className="text-third-main-color font-semibold">
              {" "}
              I'm Carolina :){" "}
            </span>
          </h1>
        </Fade>
        <h3 className="text-main-grey text-xl mb-2">Full Stack Developer</h3>
        <div>
          <a
            href={Resume}
            target="_blank"
            className="rounded-full shadow-md shadow-main-color font-semibold bg-third-main-color px-4 py-2 mr-2 hover:bg-main-color"
          >
            Download CV
          </a>
          <a
            href="mailto:carolinafrederico32@hotmail.com"
            className={`${style.blueBorder} shadow-md shadow-main-color font-semibold text-third-main-color hover:bg-main-color hover:text-main-grey rounded-full px-4 py-2 mr-2"`}
          >
            Get in touch
          </a>
        </div>
      </div>
      <img
        src={Carolina}
        alt="Carolina's photo"
        className="w-60 h-60 z-0 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full shadow-md shadow-white transition transform hover:scale-110 duration-300"
      />
    </div>
  );
};
