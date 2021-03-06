import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #FFF;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: Roboto;
    font-size: 14px;
  }
  h1, h2, h3, h4, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  strong {
    font-weight: 700;
  }
`;
