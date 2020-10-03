import React from "react";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <input type="text" />
      <button>Adicionar</button>
    </Container>
  );
};

export default Header;
