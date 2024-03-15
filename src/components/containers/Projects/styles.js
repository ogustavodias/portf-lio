import styled, { css } from "styled-components";
import { scrollBarStyles } from "../../../styles";

export const Projects = styled.section`
  .container {
    display: grid;
    align-items: center;
    gap: 40px;
    margin: 10vh auto;
  }

  .disclaimer {
    font-family: var(--ROBOTO);
    font-size: 16px;
    color: var(--GRAY-LIGHT);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 42px;
`;

const transition = css`
  transition: transform 0.3s ease, z-index 0.3s ease, background-color 0.3s ease;
`;

const sizes = css`
  max-width: 300px;
  max-height: 500px;
  width: 100%;
  height: 100%;
  ${transition};
`;

const inBackground = css`
  transform: translate(32px, 29px);
  z-index: -1;
`;

const inSurface = css`
  transform: none;
  z-index: 0;
`;

export const Info = styled.div`
  display: grid;
  align-content: start;
  grid-template-rows: auto 1fr auto;
  gap: 18px;
  padding: 12px;
  background-color: rgba(1, 1, 1, 0.9);
  border-radius: 4px;
  position: absolute;
  top: 0;
  ${sizes};
  ${inBackground};
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;

export const Links = styled.div`
  display: flex;
  gap: 8px;

  img {
    opacity: 0.5;

    transition: opacity 0.3s ease;
    &:hover {
      opacity: 1;
    }
  }
`;

export const Title = styled.h3`
  font-family: var(--INTER);
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--WHITE);
`;

export const Description = styled.p`
  font-family: var(--INTER);
  font-size: 18px;
  font-weight: 400;
  color: var(--GRAY-LIGHT);
`;

export const Resources = styled.ul`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  ${scrollBarStyles};
  padding-bottom: 5px;

  span {
    display: block;
    background-color: var(--DETAIL-PURPLE);
    padding: 4px;
    border-radius: 4px;
    font-family: var(--CODE);
    font-size: 16px;
    color: var(--WHITE);
  }
`;

export const Image = styled.img`
  border-radius: 4px;
  position: absolute;
  top: 0;
  ${sizes};
  ${inSurface};
`;

export const Card = styled.li`
  width: 329px;
  height: 532px;
  position: relative;

  &:hover {
    ${Info} {
      ${inSurface};
      background-color: rgba(1, 1, 1, 0.9);
    }

    ${Image} {
      ${inBackground};
    }
  }
`;
