import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  //font
  @font-face {
    font-family: 'ROKAFSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts2201-3@1.0/ROKAFSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
		padding: 0;
    overscroll-behavior: none;
    font-family: 'ROKAFSansBold', sans-serif;
  }

  div,span,main {
    margin: 0;
    padding: 0;
  }

  input, select {
    border: none;
    &:focus{
      outline: none;
    }
  }
`;

export default GlobalStyle;
