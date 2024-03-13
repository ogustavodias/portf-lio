import styled from "styled-components";

export const Skills = styled.section`
  .container {
    display: grid;
    align-items: center;
    gap: 40px;
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
    transition: filter 0.6s ease;
    filter: grayscale(100%);
    max-width: 62px;
    width: 100%;
    margin: 0 auto 12px;
  }

  span {
    transition: color 0.6s ease;
    font-family: var(--CODE);
    font-size: 18px;
    font-weight: 700;
    color: var(--GRAY);
  }

  transition: transform 0.5s linear;
  transform: none;
  &:hover {
    transform: rotateY(360deg);
    img {
      filter: none;
    }

    span {
      color: var(--WHITE);
    }
  }
`;
