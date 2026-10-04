import About from "./components/sections/About";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/projects/Projects";
import Skills from "./components/sections/Skills";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;
