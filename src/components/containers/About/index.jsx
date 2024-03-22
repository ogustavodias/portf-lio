// Libraries & frameworks imports
import React from "react";

// Styles with styled-components
import * as S from "./styles";

// Components
import { Container } from "@/styles/global";
import { Title } from "@/components/Title/styles";

// SRC of img
import boyCoding from "@/assets/images/about/about-ilust.png";

const About = React.forwardRef((props, ref) => {
  return (
    <S.About ref={ref}>
      <Container className="container">
        <div>
          <Title>
            <span>Um pouco</span>
            Sobre <strong>mim</strong>
          </Title>
          <S.Resume>
            <p>
              Apaixonado por tecnologia, especialmente por desenvolvimento de
              software. Meu primeiro contato com a área foi cedo, na
              adolescência, quando tive a oportunidade de escrever minhas
              primeiras linhas de código, em LUA, linguagem muito utilizada em
              jogos.
            </p>
            <p>
              Hoje, sou graduado em Análise e Desenvolvimento de Sistemas pela
              Anhembi Morumbi. Embora ainda não tenha experiência profissional
              formal na área, trago comigo um conjunto sólido de conhecimentos
              adquiridos ao longo de anos de estudo dedicado. Estou animado e
              pronto para continuar aprendendo e evoluindo na minha jornada como
              desenvolvedor.
            </p>
          </S.Resume>
        </div>
        <S.ImageWrapper>
          <S.Image src={boyCoding} alt="Boy coding illustration" />
        </S.ImageWrapper>
      </Container>
    </S.About>
  );
});

About.displayName = "About";

export default About;
