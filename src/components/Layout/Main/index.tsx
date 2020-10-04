import React from "react";
import { useSelector } from "react-redux";

import { Container } from "./styles";

import Todolist from "../../Todolist";
import { Item } from "../../../types";

interface List {
  list?: Array<Item>;
}

const Main: React.FC = () => {
  const list = useSelector((state: List) => {
    return state.list;
  });
  return (
    <Container>
      <Todolist item={list} />
    </Container>
  );
};

export default Main;
