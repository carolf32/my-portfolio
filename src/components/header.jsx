import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import style from "../styles/styleSheet.module.scss";
import { useContext } from "react";
import { RefsContext } from "../context/refsContext";
import { useTheme } from "../hooks/useTheme";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const { helloRef, aboutMeRef, myStackRef, myProjectsRef, contactsRef } =
    useContext(RefsContext);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      className={`${style.headerBorder} z-40 bg-main-bg-light dark:bg-main-bg-dark text-main-bg-dark dark:text-main-bg-light`}
    >
      <div className="flex justify-between items-center py-6 px-10 md:px-15 lg:px-20 text-lg">
        <ul className="flex justify-between gap-4">
          <li className="hover:text-third-main-color">
            <button onClick={() => handleScroll(helloRef)}>Hello</button>
          </li>
          <li className="hover:text-third-main-color">
            <button onClick={() => handleScroll(aboutMeRef)}>About me</button>
          </li>
          <li className="hover:text-third-main-color">
            <button onClick={() => handleScroll(myStackRef)}>My stack</button>
          </li>
          <li className="hover:text-third-main-color">
            <button onClick={() => handleScroll(myProjectsRef)}>
              Projects
            </button>
          </li>
          <li className="hover:text-third-main-color">
            <button onClick={() => handleScroll(contactsRef)}>Contacts</button>
          </li>
        </ul>
        <div className="text-third-main-color hover:bg-third-main-color hover:text-white hover:rounded-full transition transform hover:scale-110 duration-300">
          {theme == "light" ? (
            <MdOutlineDarkMode size={20} onClick={() => setTheme("dark")} />
          ) : (
            <MdOutlineLightMode size={20} onClick={() => setTheme("light")} />
          )}
        </div>
      </div>
    </div>
  );
};
