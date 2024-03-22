// Libraries & frameworks imports
import React from "react";

// Styles with styled-components
import * as S from "./styles";

// Components
import { Container } from "@/styles/global";
import { Title } from "@/components/Title/styles";

// Data
import skills from "@/data/skills";

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
