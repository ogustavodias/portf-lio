// Internal imports
import * as S from "./styles";
import { Container } from "../../../styles";
import { Title } from "../../Title/styles";
import skills from "../../../data/skills";

const Skills = () => {
  return (
    <S.Skills>
      <Container className="container">
        <Title>
          <span>As minhas</span>
          Principais <strong>habilidades</strong>
        </Title>
        <S.List>
          {skills.map((skill) => {
            return (
              <>
                <S.Card>
                  <img src={skill.src} alt={skill.name} />
                  <span>{skill.name}</span>
                </S.Card>
              </>
            );
          })}
        </S.List>
      </Container>
    </S.Skills>
  );
};

export default Skills;
