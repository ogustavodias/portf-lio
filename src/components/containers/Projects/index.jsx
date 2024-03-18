// Internal imports
import * as S from "./styles";
import { Container } from "../../../styles";
import { Title } from "../../Title/styles";
import Card from "./Card";

const Projects = () => {
  return (
    <S.Projects>
      <Container className="container">
        <Title>
          <span>Os meus</span>
          Principais <strong>projetos</strong>
        </Title>
        <S.List>
          <Card />
          <Card />
          <Card />
        </S.List>
        <S.Disclaimer>
          Imagens geradas por IA, meramente ilustrativas.
        </S.Disclaimer>
      </Container>
    </S.Projects>
  );
};

export default Projects;
