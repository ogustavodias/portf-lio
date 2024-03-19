import Header from "./components/containers/Header";
import Hero from "./components/containers/Hero";
import About from "./components/containers/About";
import Education from "./components/containers/Education";
import Skills from "./components/containers/Skills";
import Projects from "./components/containers/Projects";
import Footer from "./components/containers/Footer";
import { useEffect, useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(0);

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
      <Header scrolled={scrolled} />
      <Hero scrolled={scrolled} />
      <About scrolled={scrolled} />
      <Education scrolled={scrolled} />
      <Skills scrolled={scrolled} />
      <Projects scrolled={scrolled} />
      <Footer scrolled={scrolled} />
    </>
  );
}

export default App;
