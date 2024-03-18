import * as S from "./styles";
import imgTeste from "../../../../assets/images/projects/project-dogs-ilus.jpeg";
import git_icon from "../../../../assets/icons/github.svg";
import deploy_icon from "../../../../assets/icons/deploy.svg";

const Card = () => {
  return (
    <S.Card>
      <S.Image src={imgTeste} />
      <S.Infos>
        <S.Head>
          <S.Name>dogs</S.Name>
          <S.Links>
            <a href="#">
              <S.Icon src={git_icon} />
            </a>
            <a href="#">
              <S.Icon src={deploy_icon} />
            </a>
          </S.Links>
        </S.Head>
        <S.Resume>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolorum minus excepturi in inventore optio placeat. Officiis ab
          incidunt, assumenda porro possimus optio dicta voluptatem fugit quia
          natus, totam veniam?
        </S.Resume>
        <S.Footer>
          <S.Tech>JavaScript</S.Tech>
          <S.Tech>JavaScript</S.Tech>
          <S.Tech>JavaScript</S.Tech>
        </S.Footer>
      </S.Infos>
    </S.Card>
  );
};

export default Card;
