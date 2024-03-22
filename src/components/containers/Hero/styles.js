// External imports
import styled from "styled-components";

// Internal imports
import { fade } from "../../../styles/global";

export const Hero = styled.section`
  position: relative;
  ${fade};

  &[data-faded="false"] {
    opacity: 1;
    transform: initial;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    gap: 40px;
    margin: 10vh auto;

    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

export const Title = styled.h1`
  font-family: var(--INTER);
  font-size: 3.5rem;
  font-weight: 400;
  color: var(--WHITE);
`;

export const Button = styled.a`
  width: max-content;
  padding: 18px 58px;
  border: 1px solid var(--DETAIL-PINK);
  border-radius: 4px;
  font-family: var(--ROBOTO);
  font-size: 1rem;
  font-weight: 700;
  color: var(--DETAIL-PINK);
  text-transform: uppercase;
  cursor: pointer;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--DETAIL-PINK);
    color: var(--WHITE);
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: var(--GRAY-LIGHT);
`;

export const IMGWrapper = styled.div`
  transition: opacity 0.3s ease;
  @media only screen and (max-width: 900px) {
    position: absolute;
    z-index: -1;
    opacity: 0.2;
    padding: inherit;
  }
`;
