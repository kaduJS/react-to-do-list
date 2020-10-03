import React from "react";

import { Container } from "./styles";

import Todolist from "../../Todolist";

import { list } from "../../../services";

const Main: React.FC = () => {
  return (
    <Container>
      <Todolist item={list} />
    </Container>
  );
};

export default Main;
