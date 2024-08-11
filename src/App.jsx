import { AboutMe } from "./components/aboutMe";
import { Banner } from "./components/banner";
import { Contacts } from "./components/contacts";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { Stack } from "./components/stack";
import { RefsProvider } from "./context/refsContext";

function App() {
  return (
    <RefsProvider>
      <Header />
      <Banner />
      <div className="hidden lg:flex justify-center ">
        <iframe
          className="dark:hidden"
          src="https://lottie.host/embed/fe17fdce-104a-48cf-ae96-2b9845470523/WFxO5GoxTS.json"
        ></iframe>
        <iframe
          className="hidden dark:block"
          src="https://lottie.host/embed/228377da-72f1-4379-88ed-7b434b093568/Thf5Fc4Bwq.json"
        ></iframe>
      </div>
      <AboutMe />
      <Stack />
      <Projects />
      <Contacts />
    </RefsProvider>
  );
}

export default App;
