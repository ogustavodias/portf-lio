// Libraries & frameworks imports
import styled, { keyframes } from "styled-components";

// Global styles
import { fade } from "@/styles/global";

export const Hero = styled.section`
  ${fade};
  position: relative;

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

const text_fill = keyframes`
  to {
    text-shadow: 0px 0px 10px var(--DETAIL-PINK);
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-family: var(--INTER);
  font-size: 3.5rem;
  font-weight: 400;
  color: var(--WHITE);

  strong {
    display: block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: transparent;
    -webkit-text-stroke: 2px var(--DETAIL-PINK);

    position: relative;
    max-width: max-content;

    --before-text: "${(props) => props.children[0].props.children}";

    &:before {
      content: var(--before-text);
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
      height: 0%;
      overflow: hidden;
      color: var(--DETAIL-PINK);
      border-bottom: 2px solid var(--DETAIL-PINK);
      animation: ${text_fill} 2s ease-in-out infinite alternate;
    }
  }
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
