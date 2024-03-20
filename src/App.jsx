import Header from "./components/containers/Header";
import Hero from "./components/containers/Hero";
import About from "./components/containers/About";
import Education from "./components/containers/Education";
import Skills from "./components/containers/Skills";
import Projects from "./components/containers/Projects";
import Footer from "./components/containers/Footer";
import { useEffect, useRef, useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(0);
  const sections = {
    hero: useRef(null),
    about: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
  };

  const scrollToSection = ({ current }) => {
    current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleScroll = () => {
    setScrolled(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header scrolled={scrolled} sections={sections} scrollToSection={scrollToSection} />
      <Hero scrolled={scrolled} ref={sections.hero} nextElement={sections.about}  scrollToSection={scrollToSection}/>
      <About scrolled={scrolled} ref={sections.about} />
      <Education scrolled={scrolled} ref={sections.education} />
      <Skills scrolled={scrolled} ref={sections.skills} />
      <Projects scrolled={scrolled} ref={sections.projects} />
      <Footer scrolled={scrolled} />
    </>
  );
}

export default App;
