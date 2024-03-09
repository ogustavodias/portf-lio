import styled, { keyframes } from "styled-components";

export const About = styled.section`
  min-height: 80vh;
  font-family: var(--INTER);

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const Title = styled.h2`
  color: var(--WHITE);
  text-transform: uppercase;
  font-weight: normal;
  font-size: 32px;

  span {
    display: block;
    font-size: 20px;
    color: var(--GRAY-LIGHT);
    opacity: 0.8;
    margin-bottom: 8px;
  }

  strong {
    color: var(--DETAIL-PINK);
    font-size: inherit;
  }
`;

export const Resume = styled.p`
  font-family: var(--CODE);
  color: var(--GRAY-LIGHT);
  margin-top: 88px;
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
