// Internal imports
import { Container } from "../../../styles";
import * as S from "./styles";
import Logo from "../../../assets/icons/logo.svg";
import MobileToggler from "./MobileToggler";

// External imports
import { useEffect, useRef, useState } from "react";

const Header = ({ scrolled }) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) setHeight(+ref.current.clientHeight);
  }, []);

  return (
    <S.Header ref={ref} data-position={scrolled >= height ? "true" : "false"}>
      <Container className="container" data-expanded={expanded}>
        <S.Head>
          <S.Logo src={Logo} alt="Logo" />
          <MobileToggler expanded={expanded} setExpanded={setExpanded} />
        </S.Head>

        <S.Links data-expanded={expanded}>
          <li>
            <S.Link>Início</S.Link>
          </li>
          <li>
            <S.Link>Sobre mim</S.Link>
          </li>
          <li>
            <S.Link>Formações</S.Link>
          </li>
          <li>
            <S.Link>Habilidades</S.Link>
          </li>
          <li>
            <S.Link>Projetos</S.Link>
          </li>
        </S.Links>
      </Container>
    </S.Header>
  );
};

export default Header;
