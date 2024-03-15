// Internal imports
import * as S from "./styles";
import { Container } from "../../../styles";
import { Title } from "../../Title/styles";
import DogIlus from "../../../assets/images/project-dogs-ilus.jpeg";
import githubSVG from "../../../assets/icons/github.svg";
import deploySVG from "../../../assets/icons/deploy.svg";

const Projects = () => {
  return (
    <S.Projects>
      <Container className="container">
        <Title>
          <span>Os meus</span>
          Principais <strong>projetos</strong>
        </Title>
        <S.List>
          <S.Card>
            <S.Image src={DogIlus} alt="" />
            <S.Info>
              <S.Head>
                <S.Title>Dogs</S.Title>
                <S.Links>
                  <a href="#"><img src={githubSVG} alt="" /></a>
                  <a href="#"><img src={deploySVG} alt="" /></a>
                </S.Links>
              </S.Head>
              <S.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                quasi eos atque natus, temporibus reprehenderit doloremque nobis
                odio, architecto soluta dicta delectus voluptatum ut quisquam
                unde voluptatem repudiandae tempora ea?{" "}
              </S.Description>
              <S.Resources>
                <span>ReactJS</span>
                <span>JavaScript</span>
              </S.Resources>
            </S.Info>
          </S.Card>
          <S.Card>
            <S.Image src={DogIlus} alt="" />
            <S.Info>
              <S.Head>
                <S.Title>Dogs</S.Title>
                <S.Links>
                  <a href="#"><img src={githubSVG} alt="" /></a>
                  <a href="#"><img src={deploySVG} alt="" /></a>
                </S.Links>
              </S.Head>
              <S.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                quasi eos atque natus, temporibus reprehenderit doloremque nobis
                odio, architecto soluta dicta delectus voluptatum ut quisquam
                unde voluptatem repudiandae tempora ea?{" "}
              </S.Description>
              <S.Resources>
                <span>ReactJS</span>
                <span>JavaScript</span>
              </S.Resources>
            </S.Info>
          </S.Card>
          <S.Card>
            <S.Image src={DogIlus} alt="" />
            <S.Info>
              <S.Head>
                <S.Title>Dogs</S.Title>
                <S.Links>
                  <a href="#"><img src={githubSVG} alt="" /></a>
                  <a href="#"><img src={deploySVG} alt="" /></a>
                </S.Links>
              </S.Head>
              <S.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                quasi eos atque natus, temporibus reprehenderit doloremque nobis
                odio, architecto soluta dicta delectus voluptatum ut quisquam
                unde voluptatem repudiandae tempora ea?{" "}
              </S.Description>
              <S.Resources>
                <span>ReactJS</span>
                <span>JavaScript</span>
              </S.Resources>
            </S.Info>
          </S.Card>
          <S.Card>
            <S.Image src={DogIlus} alt="" />
            <S.Info>
              <S.Head>
                <S.Title>Dogs</S.Title>
                <S.Links>
                  <a href="#"><img src={githubSVG} alt="" /></a>
                  <a href="#"><img src={deploySVG} alt="" /></a>
                </S.Links>
              </S.Head>
              <S.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                quasi eos atque natus, temporibus reprehenderit doloremque nobis
                odio, architecto soluta dicta delectus voluptatum ut quisquam
                unde voluptatem repudiandae tempora ea?{" "}
              </S.Description>
              <S.Resources>
                <span>ReactJS</span>
                <span>JavaScript</span>
              </S.Resources>
            </S.Info>
          </S.Card>
        </S.List>
        <span className="disclaimer">
          Imagens geradas por IA, meramente ilustrativas.
        </span>
      </Container>
    </S.Projects>
  );
};

export default Projects;
