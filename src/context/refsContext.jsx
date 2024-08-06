import { createContext, useRef } from "react";

export const RefsContext = createContext();

export const RefsProvider = ({ children }) => {
  const helloRef = useRef(null);
  const aboutMeRef = useRef(null);
  const myStackRef = useRef(null);
  const myProjectsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <RefsContext.Provider
      value={{ helloRef, aboutMeRef, myStackRef, myProjectsRef, contactsRef }}
    >
      {children}
    </RefsContext.Provider>
  );
};
