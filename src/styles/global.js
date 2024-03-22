import { createGlobalStyle } from "styled-components";
import { css, styled } from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 34px 24px;
`;

export const fade = css`
  transition: transform 0.3s linear, opacity 0.3s linear;
  transform: translateX(-200px);
  opacity: 0;
`;

export const scrollBarStyles = css`
  &::-webkit-scrollbar {
    background-color: var(--BG-PRIMARY);
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

const GlobalStyle = createGlobalStyle`
  :root {
  /* Colors */
  --BLACK: rgb(1, 1, 1);
  --WHITE: #FFFFFF;
  --GRAY: #5C5C5C;
  --GRAY-LIGHT: #CCCCCC;
  --BG-PRIMARY: rgb(15, 23, 42);
  --DETAIL-PINK: #de1486;
  --DETAIL-PURPLE: rgb(65, 67, 164);

  /* Fonts */
  --INTER: "Inter", sans-serif;
  --CODE: "Source Code Pro", monospace;
  --ROBOTO: "Roboto", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 18px;

  @media only screen and (max-width: 500px) {
    font-size: 16px;
  }
}

body {
  ${scrollBarStyles};
  background-color: var(--BG-PRIMARY);
  color: var(--WHITE);
  font-family: var(--INTER);
  font-weight: 400;
}

img {
  display: block;
  max-width: 100%;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
