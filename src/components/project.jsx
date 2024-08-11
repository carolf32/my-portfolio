import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Project({ src, alt, href, text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-40 md:h-52 lg:h-60 relative transform transition-transform duration-500 ease-in-out ${
        isHovered ? "scale-125" : "scale-100"
      } ${isHovered ? "z-20" : "z-10"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className={`${isHovered ? "rounded-t-lg" : "rounded-lg"}`}
      />
      <a
        href={href}
        target="_blank"
        className="absolute top-3 right-3 bg-black rounded-full p-0.5 text-white"
      >
        <FaGithub size={30} />
      </a>
      <div
        className={`-bottom-4 rounded-b-lg bg-main-grey z-20 flex flex-col items-center justify-center duration-500 ease-in-out ${
          isHovered ? "block" : "hidden"
        } `}
      >
        <p className="text-sm p-3">{text}</p>
      </div>
    </div>
  );
}
