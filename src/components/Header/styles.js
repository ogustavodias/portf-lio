import { styled } from "styled-components";

export const Header = styled.header`
  .container {
    display: flex;
    justify-content: space-between;
  }

  padding: 34px 24px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.4);
`;

export const Links = styled.ul`
  display: flex;
  gap: 40px;
`;

export const Link = styled.a`
  color: var(--GRAY-LIGHT);
  font-size: 18px;
  cursor: pointer;
`;
