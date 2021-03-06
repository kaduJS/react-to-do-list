import styled from "styled-components";

export const Container = styled.header`
  padding-top: 25px;
  width: inherit;
  height: 75px;
  min-height: 75px;

  display: inherit;
  flex-direction: column;
  justify-content: center;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  box-shadow: var(--primary-color);

  background-color: var(--header-bg-color);

  input {
    width: 225px;
  }

  input:focus {
    color: #3f51b5;
  }

  button {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;
