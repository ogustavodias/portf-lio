// Internal imports
import * as S from "./styles";
import { Container } from "../../../styles";
import boyCoding from "../../../assets/images/about-ilust.png";

const About = () => {
  return (
    <S.About>
      <Container className="container">
        <div>
          <S.Title>
            <span>Um pouco</span>
            Sobre <strong>mim</strong>
          </S.Title>
          <S.Resume>
            Olá! Meu nome é Gustavo e sou um entusiasta da tecnologia,
            especialmente no campo do desenvolvimento. Minha paixão por
            programação começou cedo, quando tive meu primeiro contato com uma
            linguagem de programação durante a adolescência, inicialmente como
            um hobby, em servidores derivados de Tibia. Hoje, sou graduado em
            Análise e Desenvolvimento de Sistemas pela Anhembi Morumbi. Embora
            ainda não tenha experiência profissional formal na área, trago
            comigo um conjunto sólido de conhecimentos adquiridos ao longo de
            anos de estudo dedicado. Estou animado e pronto para continuar
            aprendendo e evoluindo na minha jornada como desenvolvedor.
          </S.Resume>
        </div>
        <S.ImageWrapper>
          <S.Image src={boyCoding} alt="Boy coding illustration" />
        </S.ImageWrapper>
      </Container>
    </S.About>
  );
};

export default About;
