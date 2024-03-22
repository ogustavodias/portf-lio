// Libraries & frameworks imports
import { css, styled } from "styled-components";

const flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 40px;
`;

export const Header = styled.header`
  .container {
    ${flex};
    @media only screen and (max-width: 800px) {
      flex-direction: column;
      align-items: initial;
      transition: gap 0.3s ease;

      &[data-expanded="true"] {
        gap: 40px;
      }
    }
  }

  transition: box-shadow 0.3s ease;
  &[data-position="true"] {
    position: sticky;
    z-index: 2;
    top: 0;
    background-color: rgba(15, 23, 42, 0.9);
  }
  background-color: var(--BG-PRIMARY);
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.4);
`;

export const Head = styled.div`
  ${flex}
`;

export const Logo = styled.img`
  max-height: 25px;
  height: 100%;

  @media only screen and (max-width: 500px) {
    max-height: 18px;
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 40px;
  transition: transform 0.3s ease, height 0.3s ease;
  transform-origin: top;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    height: 265px;

    &:not([data-expanded="true"]) {
      height: 0;
      transform: scaleY(0);
    }
  }
`;

export const Link = styled.a`
  color: var(--GRAY-LIGHT);
  font-size: 0.88rem;
  cursor: pointer;
  position: relative;

  &:hover {
    color: var(--WHITE);
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 4px;
    position: absolute;
    bottom: -8px;
    background-color: var(--DETAIL-PURPLE);
    transition: width 0.3s ease;
  }

  &[data-active="true"] {
    color: var(--WHITE);
    &::after {
      width: 100%;
    }
  }
`;
