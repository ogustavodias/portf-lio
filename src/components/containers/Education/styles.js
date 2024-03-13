import styled from "styled-components";
import { Title as T } from "../../Title/styles";

export const Education = styled.section`
  .container {
    min-height: 800px;

    @media only screen and (max-width: 900px) {
      min-height: 700px;
    }

    @media only screen and (max-width: 500px) {
      min-height: 600px;
    }
  }
`;

export const Title = styled(T)`
  margin-bottom: 40px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const List = styled.ul`
  display: grid;
  align-content: start;
  gap: 32px;
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Period = styled.span`
  color: var(--GRAY-LIGHT);
  min-width: 107px;
`;

export const Infos = styled.div`
  display: grid;
  gap: 5px;
  font-family: var(--CODE);
`;

export const Course = styled.span`
  color: var(--WHITE);
  font-weight: 700;
`;

export const Classification = styled.span`
  color: var(--GRAY-LIGHT);
  font-weight: 400;
`;

export const Institution = styled.span`
  color: var(--GRAY-LIGHT);
  font-weight: 400;
  font-style: italic;
`;

export const Image = styled.img`
  justify-self: center;
`;
