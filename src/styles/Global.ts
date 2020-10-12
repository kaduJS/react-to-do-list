import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  :root {
    --header-bg-color: #f50057;
    --main-bg-color: #F2F2F2;
    --footer-bg-color: #ffbed5;

    --button-bg-color: #C9F2F2;

    --primary-color: #F2F2F2;
    --secondary-color: #132623;

    --primary-color: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  }
  
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
