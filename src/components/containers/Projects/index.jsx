// Internal imports
import * as S from "./styles";
import { Container } from "../../../styles";
import { Title } from "../../Title/styles";
import Card from "./Card";
import projects from "../../../data/projects";
import { useState } from "react";

const Projects = () => {
  const [quant, setQuant] = useState(3);

  const changeQuant = () => {
    if (quant === 3) setQuant(projects.length);
    else setQuant(3);
  };

  return (
    <S.Projects>
      <Container className="container">
        <Title>
          <span>Os meus</span>
          Principais <strong>projetos</strong>
        </Title>
        <S.List>
          {projects.map((project, index) => {
            if (index + 1 <= quant) {
              return <Card key={project.name} data={project} />;
            }
          })}
        </S.List>
        <S.Disclaimer>
          Imagens geradas por IA, meramente ilustrativas.
        </S.Disclaimer>
        <S.SeeMore onClick={changeQuant}>
          {projects.length > 3 ? quant > 3 ? "VER MENOS..." : "VER MAIS..." : ""}
        </S.SeeMore>
      </Container>
    </S.Projects>
  );
};

export default Projects;
