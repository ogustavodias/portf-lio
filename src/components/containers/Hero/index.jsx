import * as S from "./styles";
import { Container } from "../../../styles";
import binarySVG from "../../../assets/images/hero/binary-code.png";

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
          <img src={binarySVG} alt="Binary code illustration" />
        </S.ImagesWrapper>
      </Container>
    </S.Hero>
  );
};

export default Hero;
