import React from "react";
import { Provider } from "react-redux";

import Layout from "./components/Layout";

import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
