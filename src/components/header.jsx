import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import style from "../styles/styleSheet.module.scss";
import { useContext, useEffect, useState } from "react";
import { RefsContext } from "../context/refsContext";
import { useTheme } from "../hooks/useTheme";
import { MdClose } from "react-icons/md";

export const Header = () => {
  /* Change theme */
  const { theme, setTheme } = useTheme();

  /* Scroll */
  const { helloRef, aboutMeRef, myStackRef, myProjectsRef, contactsRef } =
    useContext(RefsContext);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  /* Open and close menu */
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <div>
      <div
        className={`${style.headerBorder} z-40 bg-main-bg-light dark:bg-main-bg-dark text-main-bg-dark dark:text-main-bg-light`}
      >
        <div className=" flex justify-between items-center py-6 px-10 md:px-15 lg:px-20 text-lg">
          {menuOpen == true ? (
            <MdClose
              size={20}
              onClick={toggleMenu}
              className="text-third-main-color hover:bg-third-main-color hover:text-white hover:rounded-full transition transform hover:scale-110 duration-300"
            />
          ) : (
            <IoMenuSharp
              size={20}
              onClick={toggleMenu}
              className="text-third-main-color md:hidden hover:bg-third-main-color hover:text-white hover:rounded-full transition transform hover:scale-110 duration-300"
            />
          )}

          <ul className="md:flex justify-between gap-4 hidden">
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
              <button onClick={() => handleScroll(contactsRef)}>
                Contacts
              </button>
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

      <ul
        className={`h-full z-40 bg-main-bg-dark bg-opacity-85 fixed top-0 mt-20 w-full px-10 md:px-15 lg:px-20 text-4xl flex-col gap-4 ${
          menuOpen == true ? "flex" : "hidden"
        }`}
      >
        <li className="hover:text-third-main-color">
          <button
            onClick={() => {
              handleScroll(helloRef);
              toggleMenu();
            }}
          >
            Hello
          </button>
        </li>
        <li className="hover:text-third-main-color">
          <button
            onClick={() => {
              handleScroll(aboutMeRef);
              toggleMenu();
            }}
          >
            About me
          </button>
        </li>
        <li className="hover:text-third-main-color">
          <button
            onClick={() => {
              handleScroll(myStackRef);
              toggleMenu();
            }}
          >
            My stack
          </button>
        </li>
        <li className="hover:text-third-main-color">
          <button
            onClick={() => {
              handleScroll(myProjectsRef);
              toggleMenu();
            }}
          >
            Projects
          </button>
        </li>
        <li className="hover:text-third-main-color">
          <button
            onClick={() => {
              handleScroll(contactsRef);
              toggleMenu();
            }}
          >
            Contacts
          </button>
        </li>
      </ul>
    </div>
  );
};
