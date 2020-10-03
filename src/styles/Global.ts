import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Roboto", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
  }

  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
