// Libraries & frameworks imports
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = styled.footer`
  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
  }

  position: sticky;
  bottom: 0;
  z-index: 2;
  &[data-sticky="false"] {
    position: relative;
    z-index: 0;
  }
`;

export const Copyright = styled.p`
  font-family: var(--INTER);
  font-weight: 400;
  font-size: 1rem;
  color: var(--WHITE);
  margin: 0 auto;

  display: none;
  &[data-sticky="false"] {
    display: block;
  }
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
