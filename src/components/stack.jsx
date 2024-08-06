import { useContext } from "react";
import style from "../styles/styleSheet.module.scss";
import { RefsContext } from "../context/refsContext";
import { Fade } from "react-awesome-reveal";

export const Stack = () => {
  const { myStackRef } = useContext(RefsContext);

  return (
    <Fade duration="3000" triggerOnce={false} fraction="0.2">
      <div ref={myStackRef} className="px-10 md:px-15 lg:px-20 py-24 ">
        <h2 className="text-3xl font-semibold my-10 text-center">My Stack</h2>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5 ">
          <div
            className={`${style.stack} shadow-md shadow-main-color transition transform hover:scale-110 duration-300`}
          >
            <h2 className="font-semibold">HTML5</h2>
            <i className={`devicon-html5-plain ${style.icon}`}></i>
          </div>
          <div
            className={`${style.stack} shadow-md shadow-main-color transition transform hover:scale-110 duration-300`}
          >
            <h2 className="font-semibold">CSS3</h2>
            <i className={`devicon-css3-plain ${style.icon}`}></i>
          </div>
          <div
            className={`${style.stack} shadow-md shadow-main-color transition transform hover:scale-110 duration-300`}
          >
            <h2 className="font-semibold">Javascript</h2>
            <i className={`devicon-javascript-plain ${style.icon}`}></i>
          </div>
          <div
            className={`${style.stack} shadow-md shadow-main-color transition transform hover:scale-110 duration-300`}
          >
            <h2 className="font-semibold">Typescript</h2>
            <i className={`devicon-typescript-plain ${style.icon}`}></i>
          </div>
          <div
            className={`${style.stack} shadow-md shadow-main-color transition transform hover:scale-110 duration-300`}
          >
            <h2 className="font-semibold">React.js</h2>
            <i className={`devicon-react-original ${style.icon}`}></i>
          </div>
          <div
            className={`${style.stack} shadow-md shadow-main-color transition transform hover:scale-110 duration-300`}
          >
            <h2 className="font-semibold">SASS</h2>
            <i className={`devicon-sass-original ${style.icon}`}></i>
          </div>
          <div
            className={`${style.stack} shadow-md shadow-main-color transition transform hover:scale-110 duration-300`}
          >
            <h2 className="font-semibold">Tailwind CSS</h2>
            <i className={`devicon-tailwindcss-original ${style.icon}`}></i>
          </div>
          <div
            className={`${style.stack} shadow-md shadow-main-color transition transform hover:scale-110 duration-300`}
          >
            <h2 className="font-semibold">Node.js</h2>
            <i className={`devicon-nodejs-plain ${style.icon}`}></i>
          </div>
          <div
            className={`${style.stack} shadow-md shadow-main-color transition transform hover:scale-110 duration-300`}
          >
            <h2 className="font-semibold">Express</h2>
            <i className={`devicon-express-original ${style.icon}`}></i>
          </div>
          <div
            className={`${style.stack} shadow-md shadow-main-color transition transform hover:scale-110 duration-300`}
          >
            <h2 className="font-semibold">Prisma ORM</h2>
            <i className={`devicon-prisma-original ${style.icon}`}></i>
          </div>
          <div
            className={`${style.stack} shadow-md shadow-main-color transition transform hover:scale-110 duration-300`}
          >
            <h2 className="font-semibold">PostgreSQL</h2>
            <i className={`devicon-postgresql-plain ${style.icon}`}></i>
          </div>
          <div
            className={`${style.stack} shadow-md shadow-main-color transition transform hover:scale-110 duration-300`}
          >
            <h2 className="font-semibold">MySQL</h2>
            <i className={`devicon-mysql-original ${style.icon}`}></i>
          </div>
          <div
            className={`${style.stack} shadow-md shadow-main-color transition transform hover:scale-110 duration-300`}
          >
            <h2 className="font-semibold">Nest.js</h2>
            <i className={`devicon-nestjs-original ${style.icon}`}></i>
          </div>
          <div
            className={`${style.stack} shadow-md shadow-main-color transition transform hover:scale-110 duration-300`}
          >
            <h2 className="font-semibold">Python</h2>
            <i className={`devicon-python-plain ${style.icon}`}></i>
          </div>
        </div>
      </div>
    </Fade>
  );
};
