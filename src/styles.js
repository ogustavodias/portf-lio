import { css, styled } from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 34px 24px;
`;

export const scrollBarStyles = css`
  &::-webkit-scrollbar {
    background-color: var(--BLACK);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--DETAIL-PURPLE);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(65, 67, 164, 0.9);
    border-radius: 4px;
  }
`;
