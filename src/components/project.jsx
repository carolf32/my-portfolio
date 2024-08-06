import { useState } from "react";

export default function Project({ src, alt }) {
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
      <div
        className={`-bottom-4 rounded-b-lg bg-main-grey z-20 flex flex-col items-center justify-center duration-500 ease-in-out ${
          isHovered ? "block" : "hidden"
        } `}
      >
        <p>Seu texto aqui</p>
        <button>Clique aqui</button>
      </div>
    </div>
  );
}
