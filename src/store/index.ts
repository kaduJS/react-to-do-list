import { configureStore } from "@reduxjs/toolkit";

import listReducer from "./modules/list/reducer";

export default configureStore({
  reducer: { list: listReducer },
});
