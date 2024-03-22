// Libraries & frameworks imports
import styled from "styled-components";

export const MobileToggler = styled.button`
  display: none;
  background-color: transparent;
  outline: none;
  border: none;
  width: 32px;
  height: 22px;
  cursor: pointer;

  rect {
    transition: y 300ms ease-in 300ms, rotate 300ms ease-in, opacity 0ms 300ms;
    transform-origin: center;
  }

  &[data-expanded="true"] {
    rect {
      transition: y 300ms ease-in, rotate 300ms ease-in 300ms, opacity 0ms 300ms;
      transform-origin: center;
    }

    :is(.top, .bottom) {
      y: 8;
    }

    .top {
      rotate: 45deg;
    }

    .middle {
      opacity: 0;
    }

    .bottom {
      rotate: -45deg;
    }
  }

  @media only screen and (max-width: 800px) {
    display: block;
  }
`;
