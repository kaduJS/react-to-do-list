import React from "react";

import { Container } from "./styles";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default Layout;
