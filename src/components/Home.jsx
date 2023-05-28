import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Timeline from "./Timeline";
import Intro from "./Intro";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Projects />
      {/* <Portfolio /> */}
      <Timeline />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
