// Internal imports
import * as S from "./styles";
import { Container } from "../../../styles";
import { Title } from "../../Title/styles";
import skills from "../../../data/skills";
import React from "react";

const Skills = React.forwardRef((props, ref) => {
  return (
    <S.Skills ref={ref}>
      <Container className="container">
        <Title>
          <span>As minhas</span>
          Principais <strong>habilidades</strong>
        </Title>
        <S.List>
          {skills.map((skill) => {
            return (
              <S.Card key={skill.name}>
                <div className="content">
                  <img src={skill.src} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              </S.Card>
            );
          })}
        </S.List>
      </Container>
    </S.Skills>
  );
});

Skills.displayName = "Skills";

export default Skills;
