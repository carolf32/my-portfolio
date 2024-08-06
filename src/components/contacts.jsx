import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { RefsContext } from "../context/refsContext";
import { Fade } from "react-awesome-reveal";

export const Contacts = () => {
  const { contactsRef } = useContext(RefsContext);

  return (
    <Fade duration="3000" triggerOnce={false} fraction="0.5">
      <div ref={contactsRef}>
        <h2 className="text-3xl font-semibold my-10 text-center">
          My contacts
        </h2>
        <div className="flex flex-wrap px-10 md:px-15 lg:px-20 pb-20 justify-center gap-14 text-center">
          <a
            href="mailto:carolinafrederico32@hotmail.com"
            target="_blank"
            className="flex flex-col justify-center items-center transition transform hover:scale-110 duration-300"
          >
            <MdOutlineEmail className="rounded-full bg-third-main-color w-10 h-10 p-2 shadow-md shadow-main-color" />
            <h3 className="text-lg font-semibold">E-mail</h3>
            <p className="text-main-grey">carolinafrederico32@hotmail.com</p>
          </a>
          <a
            href="https://wa.link/1ytako"
            target="_blank"
            className="flex flex-col justify-center items-center transition transform hover:scale-110 duration-300"
          >
            <div className="rounded-full bg-third-main-color w-10 h-10 flex justify-center items-center shadow-md shadow-main-color">
              <BsTelephone className="w-5 h-5" />
            </div>

            <h3 className="text-lg font-semibold">Telephone</h3>
            <p className="text-main-grey">+351 961 185 205</p>
          </a>
          <a
            href="https://www.linkedin.com/in/carolina-do-amaral/"
            target="_blank"
            className="flex flex-col justify-center items-center transition transform hover:scale-110 duration-300"
          >
            <div className="rounded-full shadow-md shadow-main-color bg-third-main-color w-10 h-10 flex justify-center items-center">
              <FaLinkedinIn className="w-5 h-5" />
            </div>

            <h3 className="text-lg font-semibold">Linkedin</h3>
            <p className="text-main-grey">@carolina-do-amaral</p>
          </a>
          <a
            href="https://github.com/carolf32"
            target="_blank"
            className="flex flex-col justify-center items-center transition transform hover:scale-110 duration-300"
          >
            <FaGithub className="rounded-full bg-third-main-color w-10 h-10 p-2 shadow-md shadow-main-color" />
            <h3 className="text-lg font-semibold">Github</h3>
            <p className="text-main-grey">@carolf32</p>
          </a>
        </div>
      </div>
    </Fade>
  );
};
