import { Container } from "../../styles";
import * as S from "./styles";
import Logo from "../../assets/icons/Logo.svg";

const Header = () => {
  return (
    <S.Header>
      <Container className="container">
        <img src={Logo} alt="Logo" />
        <S.Links>
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
