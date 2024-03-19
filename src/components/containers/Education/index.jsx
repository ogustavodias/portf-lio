// Internal imports
import { Container } from "../../../styles";
import * as S from "./styles";
import BookSVG from "../../../assets/images/education/grad-book.png";
import React from "react";

const Education = React.forwardRef((props, ref) => {
  return (
    <S.Education ref={ref}>
      <Container className="container">
        <S.Title>
          <span>As minhas</span>
          Principais <strong>formações</strong>
        </S.Title>
        <S.Content>
          <S.List>
            <S.Item>
              <S.Period>2020 - 2022</S.Period>
              <S.Infos>
                <S.Course>Análise e Desenvolvimento de Sistemas</S.Course>
                <S.Classification>Curso superior</S.Classification>
                <S.Institution>Universidade Anhembi Morumbi</S.Institution>
              </S.Infos>
            </S.Item>
            <S.Item>
              <S.Period>2023 - atual</S.Period>
              <S.Infos>
                <S.Course>Desenvolvimento Front-end</S.Course>
                <S.Classification>Curso livre</S.Classification>
                <S.Institution>Origamid</S.Institution>
              </S.Infos>
            </S.Item>
            <S.Item>
              <S.Period>2023 - atual</S.Period>
              <S.Infos>
                <S.Course>Desenvolvimento Full-stack Java</S.Course>
                <S.Classification>Curso livre</S.Classification>
                <S.Institution>Universidade Anhembi Morumbi</S.Institution>
              </S.Infos>
            </S.Item>
          </S.List>
          <S.Image src={BookSVG} />
        </S.Content>
      </Container>
    </S.Education>
  );
});

Education.displayName = "Education";

export default Education;
