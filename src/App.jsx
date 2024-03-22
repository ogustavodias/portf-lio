// Libraries & frameworks imports
import React, { useEffect, useRef, useState } from "react";

// Reset & global styles
import GlobalStyle from "./styles/global";

// Components imports
import Header from "./components/containers/Header";
import Hero from "./components/containers/Hero";
import About from "./components/containers/About";
import Education from "./components/containers/Education";
import Skills from "./components/containers/Skills";
import Projects from "./components/containers/Projects";
import Footer from "./components/containers/Footer";
import Loading from "./components/containers/Loading";

function App() {
  const [scrolled, setScrolled] = useState(0);
  const [loading, setLoading] = useState(true);
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

  const handleLoaded = () => {
    setLoading(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const delay = setTimeout(() => {
      handleLoaded();
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(delay);
    };
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />

      {loading ? (
        <Loading />
      ) : (
        <>
          <Header
            scrolled={scrolled}
            sections={sections}
            scrollToSection={scrollToSection}
          />
          <Hero
            scrolled={scrolled}
            ref={sections.hero}
            nextElement={sections.about}
            scrollToSection={scrollToSection}
            data-faded="true"
          />
          <About scrolled={scrolled} ref={sections.about} />
          <Education scrolled={scrolled} ref={sections.education} />
          <Skills scrolled={scrolled} ref={sections.skills} />
          <Projects scrolled={scrolled} ref={sections.projects} />
          <Footer scrolled={scrolled} />
        </>
      )}
    </React.Fragment>
  );
}

export default App;
