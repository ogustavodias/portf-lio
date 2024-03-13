import styled, { keyframes } from "styled-components";
import { Title as T } from "../../Title/styles";

export const About = styled.section`
  font-family: var(--INTER);

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 40px;
    min-height: 800px;

    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      min-height: 700px;
    }

    @media only screen and (max-width: 500px) {
      min-height: 600px;
    }
  }
`;

export const Title = T;

export const Resume = styled.p`
  font-family: var(--CODE);
  color: var(--GRAY-LIGHT);
  margin-top: 40px;
`;

const shadowPulse = keyframes`
  to {
    opacity: 0.3;
  }
`;

export const ImageWrapper = styled.div`
  justify-self: center;
  align-self: flex-start;
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
