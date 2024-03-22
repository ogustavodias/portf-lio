// Libraries & frameworks imports
import React from "react";

// Styles with styled-components
import * as S from "./styles";

// Components
import { Container } from "../../../styles/global";
import { Title } from "../../Title/styles";
import AnimationIMG from "./AnimationIMG";

// Data
import formations from "../../../data/education";

const Education = React.forwardRef((props, ref) => {
  return (
    <S.Education ref={ref}>
      <Container className="container">
        <Title>
          <span>As minhas</span>
          Principais <strong>formações</strong>
        </Title>
        <S.Content>
          <S.List>
            {formations.map((formation) => (
              <React.Fragment key={formation.course}>
                <S.Item>
                  <S.Period>{formation.period}</S.Period>
                  <S.Infos>
                    <S.Course>{formation.course}</S.Course>
                    <S.Classification>
                      {formation.classification}
                    </S.Classification>
                    <S.Institution>{formation.institution}</S.Institution>
                  </S.Infos>
                </S.Item>
              </React.Fragment>
            ))}
          </S.List>
          <AnimationIMG play={ref?.current?.dataset.faded} />
        </S.Content>
      </Container>
    </S.Education>
  );
});

Education.displayName = "Education";

export default Education;
