import * as S from "./styles";
import { Container } from "../../../styles";

const Hero = () => {
  return (
    <S.Hero>
      <Container className="container">
        <S.Info>
          <S.Title>FRONT-END DEVELOPER</S.Title>
          <S.Description>
            Olá, meu nome é Gustavo. Bem-vindo(a) ao meu portfólio. Aqui você
            irá encontrar um pouco do meu trabalho como desenvolvedor web.
          </S.Description>
          <S.Button>Vamos lá!</S.Button>
        </S.Info>
        <S.ImagesWrapper>
          <S.SVG fill={"var(--DETAIL-PINK)"} width={"100%"} />
          <S.SVG fill={"var(--DETAIL-PURPLE)"} width={"100%"} />
        </S.ImagesWrapper>
      </Container>
    </S.Hero>
  );
};

export default Hero;
