import React from "react";
import { useSelector } from "react-redux";

import { Container } from "./styles";

import ToDoList from "../../ToDoList";
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
      <ToDoList item={list} />
    </Container>
  );
};

export default Main;
