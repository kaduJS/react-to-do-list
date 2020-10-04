import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "./styles";

import { addToList } from "../../../store/modules/list/actions";
import { Item } from "../../../types";

interface List {
  list?: Array<Item>;
}

const Header: React.FC = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const list = useSelector((state: List) => {
    return state.list?.length ? state.list?.length : 0;
  });

  return (
    <Container>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => dispatch(addToList({ id: list + 1, title: input }))}
      >
        Adicionar
      </button>
    </Container>
  );
};

export default Header;
