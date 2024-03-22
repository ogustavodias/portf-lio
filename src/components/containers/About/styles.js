// Libraries & frameworks imports
import styled, { keyframes } from "styled-components";

// Global styles
import { fade } from "@/styles/global";

export const About = styled.section`
  ${fade};
  font-family: var(--INTER);

  &[data-faded="false"] {
    opacity: 1;
    transform: initial;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 40px;
    margin: 10vh auto;

    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const Resume = styled.div`
  line-height: 1.5;
  color: var(--GRAY-LIGHT);
  margin-top: 40px;

  p:not(:last-child) {
    margin-bottom: 34px;
  }
`;

const shadowPulse = keyframes`
  to {
    opacity: 0.3;
  }
`;

export const ImageWrapper = styled.div`
  justify-self: center;
  align-self: flex-end;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 20px;
    background-color: var(--BLACK);
    margin-top: 10px;
    border-radius: 50%;
    opacity: 0.5;
    animation: ${shadowPulse} 1.5s ease alternate infinite;
  }
`;

const float = keyframes`
  to { 
    transform: translateY(-20px);
  }
`;

export const Image = styled.img`
  background-color: var(--DETAIL-PURPLE);
  border-radius: 50%;
  animation: ${float} 1.5s ease alternate infinite;
`;
