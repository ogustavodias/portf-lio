import styled from "styled-components";

export const Skills = styled.section`
  .container {
    display: grid;
    align-items: center;
    gap: 40px;
    margin: 10vh auto;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 18px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    background-color: var(--BLACK);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--DETAIL-PURPLE);
    border-radius: 4px;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.li`
  width: 100%;
  min-width: 200px;
  padding: 40px;
  background-color: rgba(1, 1, 1, 0.5);
  border-radius: 4px;
  text-align: center;

  img {
    transform: none;
    transition: filter 1s ease, transform 0.5s linear;
    filter: grayscale(100%);
    max-width: 62px;
    width: 100%;
    margin: 0 auto 12px;
  }

  span {
    transform: none;
    transition: color 1s ease, transform 0.5s linear;
    font-family: var(--CODE);
    font-size: 18px;
    font-weight: 700;
    color: var(--GRAY);
  }

  &:hover {
    img {
      filter: none;
      transform: rotateY(360deg);
    }

    span {
      color: var(--WHITE);
      transform: rotateY(360deg);
    }
  }
`;