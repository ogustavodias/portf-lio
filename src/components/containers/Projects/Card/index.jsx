// Styles with styled-components
import * as S from "./styles";

// SRC of icons
import git_icon from "@/assets/icons/github.svg";
import deploy_icon from "@/assets/icons/deploy.svg";

const Card = ({ data }) => {
  return (
    <S.Card>
      <S.Image src={data.image} />
      <S.Infos>
        <S.Head>
          <S.Name>{data.name}</S.Name>
          <S.Links>
            <a href={data.src}>
              <S.Icon src={git_icon} />
            </a>
            <a href={data.deploy}>
              <S.Icon src={deploy_icon} />
            </a>
          </S.Links>
        </S.Head>
        <S.Resume>{data.resume}</S.Resume>
        <S.Footer>
          {data.techs.map((tech) => {
            return <S.Tech key={tech}>{tech}</S.Tech>;
          })}
        </S.Footer>
      </S.Infos>
    </S.Card>
  );
};

export default Card;
