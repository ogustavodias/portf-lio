import styled, { css } from "styled-components";
import { scrollBarStyles } from "../../../../styles";

const in_common = css`
  position: absolute;
  top: 0;
  width: calc(100% - 29px);
  height: calc(100% - 32px);
  border-radius: 4px;
  transition: z-index 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
`;

const inBackground = css`
  z-index: 0;
  transform: translate(29px, 32px);
  opacity: 0.5;
`;
const inSurface = css`
  z-index: 1;
  transform: none;
  opacity: 1;
`;

export const Image = styled.img`
  ${in_common};
  ${inSurface};
`;

export const Infos = styled.div`
  ${in_common};
  ${inBackground};
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-content: start;
  gap: 18px;
  padding: 12px;
  background-color: rgba(1, 1, 1, 0.95);
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const Name = styled.h3`
  font-weight: 700;
  text-transform: uppercase;
  color: var(--WHITE);
`;

export const Links = styled.div`
  display: flex;
  gap: 8px;
`;

export const Icon = styled.img`
  max-width: 24px;
  width: 100%;
  opacity: 0.5;

  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

export const Resume = styled.p`
  font-size: 16px;
  color: var(--GRAY-LIGHT);
`;

export const Footer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 2px;
  ${scrollBarStyles};
`;

export const Tech = styled.span`
  display: block;
  padding: 4px;
  background-color: var(--DETAIL-PURPLE);
  border-radius: 4px;
  font-family: var(--CODE);
  font-size: 16px;
  color: var(--WHITE);
`;

export const Card = styled.li`
  position: relative;
  width: 329px;
  height: 532px;

  &:hover {
    ${Image} {
      ${inBackground};
    }

    ${Infos} {
      ${inSurface};
    }
  }
`;
