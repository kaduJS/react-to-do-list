import styled from "styled-components";

export const Container = styled.header`
  width: inherit;
  min-height: 75px;

  display: inherit;
  flex-direction: column;
  justify-content: center;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  background-color: var(--header-bg-color);

  input {
    width: 225px;
  }

  button {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;
