// External imports
import styled from "styled-components";

// Internal imports
import { fade } from "../../../styles/global";

export const Projects = styled.section`
  ${fade};
  &[data-faded="false"] {
    opacity: 1;
    transform: initial;
  }

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
  font-size: 0.88rem;
  color: var(--GRAY-LIGHT);
`;

export const SeeMore = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.11rem;
  color: var(--GRAY-LIGHT);
  cursor: pointer;

  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;
