// Internal imports
import * as S from "./styles";
import { Container } from "../../../styles";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <S.Footer>
      <Container className="container">
        <S.Social>
          <a href="https://linkedin.com/in/ogustavodias" target="_blank">
            <S.Icon icon={faLinkedin} />
          </a>
          <a href="https://github.com/ogustavodias" target="_blank">
            <S.Icon icon={faGithub} />
          </a>
          <a href="">
            <S.Icon icon={faWhatsapp} />
          </a>
        </S.Social>
        <S.Copyright>
          Copyright &copy; 2024 by Gustavo Alves Dias. All rights reserved.
        </S.Copyright>
      </Container>
    </S.Footer>
  );
};

export default Footer;
