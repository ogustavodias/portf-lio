import styled from "styled-components";

export const Title = styled.h2`
  color: var(--WHITE);
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1.77rem;

  span {
    display: block;
    font-size: 1.11rem;
    font-weight: normal;
    color: var(--GRAY-LIGHT);
    opacity: 0.8;
    margin-bottom: 8px;
  }

  strong {
    color: var(--DETAIL-PINK);
    font-size: inherit;
    font-weight: normal;
  }
`;
