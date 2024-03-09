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

export const ImageWrapper = styled.div`
  justify-self: center;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -50px;
    width: 100%;
    height: 20px;
    background-color: var(--BLACK);
    opacity: 0.3;
    border-radius: 50%;
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
