import { useContext } from "react";
import { RefsContext } from "../context/refsContext";
import { Fade } from "react-awesome-reveal";
import style from "../styles/styleSheet.module.scss";

export const AboutMe = () => {
  const { aboutMeRef } = useContext(RefsContext);

  return (
    <div
      ref={aboutMeRef}
      className="flex flex-col text-center pb-0 lg:pb-6 pt-6 lg:pt-0 px-10 md:px-15 lg:px-20 "
    >
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

              <div className="flex justify-between items-center ">
                <h3 className="font-semibold px-3 ">Portuguese</h3>

                <div
                  className={`${style.blackBorder} rounded-full text-sm my-2  w-10/12`}
                >
                  <div
                    className={`rounded-full bg-main-color m-0.5 w-auto text-white `}
                  >
                    Native
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center ">
                <h3 className="font-semibold px-3 ">English</h3>
                <div
                  className={`${style.blackBorder} rounded-full text-sm my-2 text-white w-10/12`}
                >
                  <div className={`rounded-full bg-main-color m-0.5 w-4/5`}>
                    C1 Level
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center ">
                <h3 className="font-semibold px-3 ">Spanish</h3>
                <div
                  className={`${style.blackBorder} rounded-full text-sm my-2 text-white w-10/12`}
                >
                  <div className={`rounded-full bg-main-color m-0.5 w-1/3`}>
                    B1 Level
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <iframe src="https://lottie.host/embed/e289f9ee-2169-4880-a636-089edada0b4e/IVoi7HXLH4.json"></iframe>
          </div>
        </div>
      </Fade>
    </div>
  );
};
