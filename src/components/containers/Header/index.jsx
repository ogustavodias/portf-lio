// Internal imports
import { Container } from "../../../styles";
import * as S from "./styles";
import Logo from "../../../assets/icons/logo.svg";
import MobileToggler from "./MobileToggler";

// External imports
import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <S.Header>
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
