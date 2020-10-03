import styled from "styled-components";

export const Container = styled.header`
  width: inherit;
  min-height: 75px;

  display: inherit;
  flex-direction: column;
  justify-content: center;

  background-color: var(--header-bg-color);

  input {
    padding: 5px;

    min-width: 325px;
    min-height: 25px;

    outline: none;
    text-align: center;

    border: none;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    color: var(--secondary-color);
    background-color: var(--primary-color);
  }

  button {
    cursor: pointer;

    min-width: 325px;
    min-height: 25px;

    border: none;
    border-top: 1px solid var(--header-bg-color);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;

    color: var(--secondary-color);
    background-color: var(--button-bg-color);
  }
`;
