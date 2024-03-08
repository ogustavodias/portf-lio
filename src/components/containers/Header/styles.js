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

  padding: 34px 24px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.4);

  @media only screen and (max-width: 500px) {
    padding: 34px 14px;
  }
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
  font-size: 16px;
  cursor: pointer;
`;
