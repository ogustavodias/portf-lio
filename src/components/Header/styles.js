import { styled } from "styled-components";

export const Header = styled.header`
  .container {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    @media only screen and (max-width: 800px) {
      flex-direction: column;
    }
  }

  padding: 34px 24px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.4);
`;

export const Logo = styled.img`
  width: 188px;
  heigth: 25px;
`;

export const Toggler = styled.span`
  width: 32px;
  height: 28px;
  border-top: 4px solid var(--WHITE);
  border-bottom: 4px solid var(--WHITE);
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    display: block;
    width: inherit;
    height: 4px;
    background-color: var(--WHITE);
    border-radius: inherit;
  }

  display: none;
  @media only screen and (max-width: 800px) {
    display: block;
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 40px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Link = styled.a`
  color: var(--GRAY-LIGHT);
  font-size: 16px;
  cursor: pointer;
`;
