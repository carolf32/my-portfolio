import { useContext, useState } from "react";
import { RefsContext } from "../context/refsContext";
import { Fade, Flip } from "react-awesome-reveal";
import style from "../styles/styleSheet.module.scss";

export const AboutMe = () => {
  const { aboutMeRef } = useContext(RefsContext);

  return (
    <div
      ref={aboutMeRef}
      className="flex flex-col text-center pb-0 lg:pb-6 pt-6 lg:pt-0 px-10 md:px-15 lg:px-20 "
    >
      <div className="mx-auto hidden lg:block ">
        <iframe
          className="dark:hidden"
          src="https://lottie.host/embed/fe17fdce-104a-48cf-ae96-2b9845470523/WFxO5GoxTS.json"
        ></iframe>
        <iframe
          className="hidden dark:block"
          src="https://lottie.host/embed/228377da-72f1-4379-88ed-7b434b093568/Thf5Fc4Bwq.json"
        ></iframe>
      </div>
      <Fade duration="3000" triggerOnce={false} fraction="0.2">
        <h2 className={`text-3xl font-semibold my-10 `}>About Me</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col  gap-3 ">
            <div
              className={`text-base md:text-lg  text-black bg-main-grey rounded-lg p-4`}
            >
              <h2 className="text-xl font-semibold mb-3">
                👩🏼‍💻 Education and training
              </h2>
              Graduadet as Full Stack Dev at Kenzie Academy Brasil, having taken
              other courses focused on Front and Back End, such as B7WEB,
              Origamid and Udemy
            </div>
            <div
              className={`text-base md:text-lg text-black bg-main-grey rounded-lg p-4`}
            >
              <h2 className="text-xl font-semibold mb-3 ">
                🌍 Language skills
              </h2>
              <div className={`${style.blackBorder} rounded-full text-sm my-2`}>
                <div
                  className={`rounded-full bg-main-color m-0.5 w-auto text-white `}
                >
                  Portuguese (Native)
                </div>
              </div>
              <div
                className={`${style.blackBorder} rounded-full text-sm my-2 text-white `}
              >
                <div className={`rounded-full bg-main-color m-0.5 w-4/5`}>
                  English (C1 Level)
                </div>
              </div>
              <div
                className={`${style.blackBorder} rounded-full text-sm my-2 text-white font-`}
              >
                <div className={`rounded-full bg-main-color m-0.5 w-1/3`}>
                  Spanish (B1 Level)
                </div>
              </div>
            </div>
          </div>
          <iframe src="https://lottie.host/embed/e289f9ee-2169-4880-a636-089edada0b4e/IVoi7HXLH4.json"></iframe>
        </div>
      </Fade>
    </div>
  );
};
