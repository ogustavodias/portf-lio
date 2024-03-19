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

export const SeeMore = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  color: var(--GRAY-LIGHT);
  cursor: pointer;

  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;
