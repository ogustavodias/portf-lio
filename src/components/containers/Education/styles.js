// Libraries & frameworks imports
import styled from "styled-components";

// Global styles
import { fade } from "../../../styles/global";

export const Education = styled.section`
  ${fade};

  &[data-faded="false"] {
    opacity: 1;
    transform: initial;
  }

  .container {
    margin: 10vh auto;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;

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
  display: grid;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  border: 2px solid var(--DETAIL-PURPLE);
  border-radius: 4px;

  position: relative;
  &:not(:last-child)::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -28px;
    right: 50%;
    height: 18px;
    border: 2px dashed var(--GRAY-LIGHT);
    border-radius: 4px;
  }
`;

export const Period = styled.span`
  color: var(--GRAY-LIGHT);
  font-size: 0.88rem;
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
