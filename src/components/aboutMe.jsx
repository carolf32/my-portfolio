import { useContext, useState } from "react";
import { RefsContext } from "../context/refsContext";
import { Fade } from "react-awesome-reveal";

export const AboutMe = () => {
  const { aboutMeRef } = useContext(RefsContext);

  return (
    <Fade duration="3000" triggerOnce={false} fraction="0.5">
      <div
        ref={aboutMeRef}
        className="flex flex-col text-center py-6 px-10 md:px-15 lg:px-20 "
      >
        <h2 className={`text-3xl font-semibold my-10 `}>About Me</h2>

        <p className={`text-base md:text-lg text-main-grey text-pretty  $`}>
          Hello! My name is Carolina, I'm a Full Stack developer passionate
          about technology. I believe that my experience of over 3 years in the
          sales field has contributed to the development of valuable skills in
          communication, problem-solving, and teamwork. Additionally, I have
          learned to develop resilience and time management, which will
          certainly complement my technical skills in my new career in
          technology.
        </p>
        <p className={`text-base lg:text-lg text-main-grey`}>
          I am an Agricultural Engineer and currently, I have decided to direct
          my career towards web development, where I see a field full of
          opportunities for innovation and personal growth. Having worked in a
          technology startup environment and needing to thoroughly understand
          the product I was selling, I became increasingly interested in this
          area, leading to my career transition. I am excited to connect with
          inspiring professionals, explore new opportunities, and collaborate on
          challenging projects. Feel free to contact 😊
        </p>
      </div>
    </Fade>
  );
};
