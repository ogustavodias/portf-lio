import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = styled.footer`
  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
  }
`;

export const Copyright = styled.p`
  font-family: var(--INTER);
  font-weight: 400;
  font-size: 18px;
  color: var(--WHITE);
  margin: 0 auto;
`;

export const Social = styled.div`
  display: flex;
  gap: 24px;
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 40px;
  height: 40px;
  opacity: 0.5;
  color: var(--WHITE);

  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;
