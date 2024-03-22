// Libraries & frameworks imports
import React, { useState } from "react";

// Styles with styled-components
import * as S from "./styles";

// Components
import { Container } from "@/styles/global";
import { Title } from "@/components/Title/styles";
import Card from "./Card";

// Data
import projects from "@/data/projects";

const Projects = React.forwardRef((props, ref) => {
  const [quant, setQuant] = useState(3);

  const changeQuant = () => {
    if (quant === 3) setQuant(projects.length);
    else setQuant(3);
  };

  return (
    <S.Projects ref={ref}>
      <Container className="container">
        <Title>
          <span>Os meus</span>
          Principais <strong>projetos</strong>
        </Title>
        <S.List>
          {projects
            .filter((project, index) => index + 1 <= quant)
            .map((project) => {
              return <Card key={project.name} data={project} />;
            })}
        </S.List>
        <S.Disclaimer>
          Imagens geradas por IA, meramente ilustrativas.
        </S.Disclaimer>
        <S.SeeMore onClick={changeQuant}>
          {projects.length > 3
            ? quant > 3
              ? "VER MENOS..."
              : "VER MAIS..."
            : ""}
        </S.SeeMore>
      </Container>
    </S.Projects>
  );
});

Projects.displayName = "Projects";

export default Projects;
