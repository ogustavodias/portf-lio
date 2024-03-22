// Libraries & frameworks imports
import { useEffect, useRef, useState } from "react";

// Styles with styled-components
import * as S from "./styles";

// Components
import { Container } from "@/styles/global";
import MobileToggler from "./MobileToggler";

// SRC of img
import logo from "@/assets/logo.svg";

const Header = ({ scrolled, sections, scrollToSection }) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(null);
  const [activeSection, setActiveSection] = useState({});
  const ref = useRef(null);

  useEffect(() => {
    const { hero, about, education, skills, projects } = sections;
    if (
      scrolled >=
      projects.current.offsetTop - projects.current.offsetHeight * 0.3
    ) {
      setActiveSection(() => ({ projects: true }));
      projects.current.dataset.faded = "false";
    } else if (
      scrolled >=
      skills.current.offsetTop - projects.current.offsetHeight * 0.3
    ) {
      setActiveSection(() => ({ skills: true }));
      skills.current.dataset.faded = "false";
    } else if (
      scrolled >=
      education.current.offsetTop - projects.current.offsetHeight * 0.3
    ) {
      setActiveSection(() => ({ education: true }));
      education.current.dataset.faded = "false";
    } else if (
      scrolled >=
      about.current.offsetTop - projects.current.offsetHeight * 0.3
    ) {
      setActiveSection(() => ({ about: true }));
      about.current.dataset.faded = "false";
    } else {
      setActiveSection(() => ({ hero: true }));
      hero.current.dataset.faded = "false";
    }
  }, [scrolled, sections]);

  useEffect(() => {
    if (ref.current) setHeight(+ref.current.clientHeight);
  }, []);

  return (
    <S.Header ref={ref} data-position={scrolled >= height ? "true" : "false"}>
      <Container className="container" data-expanded={expanded}>
        <S.Head>
          <S.Logo src={logo} alt="Logo" />
          <MobileToggler expanded={expanded} setExpanded={setExpanded} />
        </S.Head>

        <S.Links data-expanded={expanded}>
          <li>
            <S.Link
              onClick={() => scrollToSection(sections.hero)}
              data-active={activeSection.hero}
            >
              Início
            </S.Link>
          </li>
          <li>
            <S.Link
              onClick={() => scrollToSection(sections.about)}
              data-active={activeSection.about}
            >
              Sobre mim
            </S.Link>
          </li>
          <li>
            <S.Link
              onClick={() => scrollToSection(sections.education)}
              data-active={activeSection.education}
            >
              Formações
            </S.Link>
          </li>
          <li>
            <S.Link
              onClick={() => scrollToSection(sections.skills)}
              data-active={activeSection.skills}
            >
              Habilidades
            </S.Link>
          </li>
          <li>
            <S.Link
              onClick={() => scrollToSection(sections.projects)}
              data-active={activeSection.projects}
            >
              Projetos
            </S.Link>
          </li>
        </S.Links>
      </Container>
    </S.Header>
  );
};

export default Header;
