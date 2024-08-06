import { useContext, useState } from "react";
import { useEffect } from "react";
import { RefsContext } from "../context/refsContext";

export const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { aboutMeRef } = useContext(RefsContext);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("trigger-point");

      if (element) {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const isSectionVisible =
          rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2;

        setIsVisible(isSectionVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={aboutMeRef}
      className="flex flex-col text-center py-6 px-10 md:px-15 lg:px-20 "
    >
      <h2
        className={`text-3xl font-semibold my-10 animate-fade-right animate-duration-1000 animate-delay-1000 animate-ease-linear ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        id="trigger-point"
      >
        About Me
      </h2>

      <p
        className={`text-base md:text-lg text-main-grey text-pretty  animate-fade-right animate-duration-1000 animate-delay-1000 animate-ease-linear ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Hello! My name is Carolina, I'm a Full Stack developer passionate about
        technology. I believe that my experience of over 3 years in the sales
        field has contributed to the development of valuable skills in
        communication, problem-solving, and teamwork. Additionally, I have
        learned to develop resilience and time management, which will certainly
        complement my technical skills in my new career in technology.
      </p>
      <p
        className={`text-base lg:text-lg text-main-grey animate-fade-right animate-duration-1000 animate-delay-1000 animate-ease-linear ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        I am an Agricultural Engineer and currently, I have decided to direct my
        career towards web development, where I see a field full of
        opportunities for innovation and personal growth. Having worked in a
        technology startup environment and needing to thoroughly understand the
        product I was selling, I became increasingly interested in this area,
        leading to my career transition. I am excited to connect with inspiring
        professionals, explore new opportunities, and collaborate on challenging
        projects. Feel free to contact 😊
      </p>
    </div>
  );
};
