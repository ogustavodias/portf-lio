// Libraries & frameworks imports
import React from "react";

// Styles with styled-components
import * as S from "./styles";

// Components
import { Container } from "@/styles/global";

// Image SRC
import binarySVG from "@/assets/images/hero/binary-code.png";

const Hero = React.forwardRef((props, ref) => {
  return (
    <S.Hero ref={ref}>
      <Container className="container">
        <S.Info>
          <S.Title><strong>FRONT-END</strong> DEVELOPER</S.Title>
          <S.Description>
            Olá, meu nome é Gustavo. Bem-vindo(a) ao meu portfólio. Aqui você
            irá encontrar um pouco do meu trabalho como desenvolvedor web.
          </S.Description>
          <S.Button onClick={() => props.scrollToSection(props.nextElement)}>
            Vamos lá!
          </S.Button>
        </S.Info>
        <S.IMGWrapper>
          <img src={binarySVG} alt="Binary code illustration" />
        </S.IMGWrapper>
      </Container>
    </S.Hero>
  );
});

Hero.displayName = "Hero";

export default Hero;
