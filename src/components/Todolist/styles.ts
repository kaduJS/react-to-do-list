import styled from "styled-components";

export const Container = styled.div`
  margin-top: 25px;

  height: min-content;

  display: inherit;
  flex-direction: column;
  align-items: center;

  border: 1px solid var(--header-bg-color);
  border-radius: 8px;

  ul {
    padding: 25px;
    list-style-type: none;

    li {
      margin-top: 10px;

      font-weight: 700;
      border-bottom: 1px solid var(--header-bg-color);
      button {
        margin-bottom: -1px;
        cursor: pointer;
        margin-left: 15px;
        padding: 5px;
        background-color: transparent;
        border: 1px solid var(--header-bg-color);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }

      button:hover {
        color: var(--primary-color);
        background-color: var(--header-bg-color);
      }
    }
  }
`;
