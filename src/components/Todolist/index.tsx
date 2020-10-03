import React from "react";
import { Item } from "../../types";

import { Container } from "./styles";

interface Props {
  item?: Array<Item>;
}

const Todolist: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <ul>
        {item?.map((item) => (
          <li key={item.id}>
            {item.title}
            <button>Remover</button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Todolist;
