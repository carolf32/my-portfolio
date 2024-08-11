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
      <AboutMe />
      <Stack />
      <Projects />
      <Contacts />
    </RefsProvider>
  );
}

export default App;
