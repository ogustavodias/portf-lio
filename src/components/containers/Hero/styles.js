import styled from "styled-components";

export const Hero = styled.section`
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }

  padding: 34px 24px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

export const Title = styled.h1`
  font-family: var(--INTER);
  font-size: 64px;
  font-weight: 400;
  color: var(--WHITE);
`;

export const Button = styled.a`
  width: max-content;
  padding: 18px 58px;
  border: 1px solid var(--DETAIL-PINK);
  border-radius: 4px;
  font-family: var(--ROBOTO);
  font-weight: 700;
  font-size: 18px;
  color: var(--DETAIL-PINK);
  text-transform: uppercase;
  cursor: pointer;

  transition: background-color .3s ease;
  &:hover {
    background-color: var(--DETAIL-PINK);
    color: var(--WHITE);
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: var(--GRAY-LIGHT);
`;
