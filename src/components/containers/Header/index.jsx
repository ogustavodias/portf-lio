// Internal imports
import { Container } from "../../../styles";
import * as S from "./styles";
import Logo from "../../../assets/icons/logo.svg";
import MobileToggler from "./MobileToggler";

// External imports
import { useEffect, useRef, useState } from "react";

const Header = ({ scrolled, sections, scrollToSection }) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(null);
  const [activeSection, setActiveSection] = useState({});
  const ref = useRef(null);

  useEffect(() => {
    const { about, education, skills, projects } = sections;
    if (scrolled >= projects.current.offsetTop - (projects.current.offsetHeight * 0.3) )
      setActiveSection(() => ({ projects: true }));
    else if (scrolled >= skills.current.offsetTop - (projects.current.offsetHeight * 0.3) )
      setActiveSection(() => ({ skills: true }));
    else if (scrolled >= education.current.offsetTop - (projects.current.offsetHeight * 0.3) )
      setActiveSection(() => ({ education: true }));
    else if (scrolled >= about.current.offsetTop - (projects.current.offsetHeight * 0.3) )
      setActiveSection(() => ({ about: true }));
    else
      setActiveSection(() => ({ hero: true }));
  }, [scrolled, sections]);

  useEffect(() => {
    if (ref.current) setHeight(+ref.current.clientHeight);
  }, []);

console.log(activeSection);  

  return (
    <S.Header ref={ref} data-position={scrolled >= height ? "true" : "false"}>
      <Container className="container" data-expanded={expanded}>
        <S.Head>
          <S.Logo src={Logo} alt="Logo" />
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
            <S.Link onClick={() => scrollToSection(sections.about)} data-active={activeSection.about}>
              Sobre mim
            </S.Link>
          </li>
          <li>
            <S.Link onClick={() => scrollToSection(sections.education)} data-active={activeSection.education}>
              Formações
            </S.Link>
          </li>
          <li>
            <S.Link onClick={() => scrollToSection(sections.skills)} data-active={activeSection.skills}>
              Habilidades
            </S.Link>
          </li>
          <li>
            <S.Link onClick={() => scrollToSection(sections.projects)} data-active={activeSection.projects}>
              Projetos
            </S.Link>
          </li>
        </S.Links>
      </Container>
    </S.Header>
  );
};

export default Header;
