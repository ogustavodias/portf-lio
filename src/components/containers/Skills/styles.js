// Libraries & frameworks imports
import styled from "styled-components";

// Global styles
import { scrollBarStyles } from "@/styles/global";
import { fade } from "@/styles/global";

export const Skills = styled.section`
  ${fade};

  &[data-faded="false"] {
    opacity: 1;
    transform: initial;
  }

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
  ${scrollBarStyles};

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

  .content {
    transform: none;
    transition: color 1s ease, filter 1s ease, transform 0.5s linear;
    filter: grayscale(100%);
    color: var(--GRAY);
  }

  img {
    max-width: 62px;
    width: 100%;
    margin: 0 auto 12px;
  }

  span {
    font-family: var(--CODE);
    font-size: 1rem;
    font-weight: 700;
  }

  &:hover {
    .content {
      filter: none;
      transform: rotateY(360deg);
      color: var(--WHITE);
    }
  }
`;
