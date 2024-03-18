import styled from "styled-components";

export const Projects = styled.section`
  .container {
    display: grid;
    gap: 40px;
    margin: 10vh auto;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: start;
  gap: 40px;
  flex-wrap: wrap;
`;

export const Disclaimer = styled.span`
  font-family: var(--ROBOTO);
  font-size: 16px;
  color: var(--GRAY-LIGHT);
`;
