// Internal imports
import * as S from "./styles";
import { Container } from "../../../styles/global";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";

const Footer = ({ scrolled }) => {
  const [distanceInPage, setDistanceInPage] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) setDistanceInPage(ref.current.offsetTop);
  }, []);

  return (
    <S.Footer
      ref={ref}
      data-position={scrolled * 1.3 >= distanceInPage ? "true" : "false"}
    >
      <Container className="container">
        <S.Social>
          <a href="https://linkedin.com/in/ogustavodias" target="_blank">
            <S.Icon icon={faLinkedin} />
          </a>
          <a href="https://github.com/ogustavodias" target="_blank">
            <S.Icon icon={faGithub} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+5511952817444&text=Olá, vim através do seu portfólio!"
            target="_blank"
          >
            <S.Icon icon={faWhatsapp} />
          </a>
        </S.Social>
        <S.Copyright
          data-position={scrolled * 1.3 >= distanceInPage ? "true" : "false"}
        >
          Copyright &copy; 2024 by Gustavo Alves Dias. All rights reserved.
        </S.Copyright>
      </Container>
    </S.Footer>
  );
};

export default Footer;
