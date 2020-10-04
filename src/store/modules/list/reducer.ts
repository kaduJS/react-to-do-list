import { createReducer } from "@reduxjs/toolkit";
import { Item } from "../../../types";

import { addToList } from "./actions";

import { list } from "../../../services";

interface Action {
  type: string;
  payload: Array<Item>;
}

export default createReducer(list, {
  [addToList.type]: (state, action: Action) => [...state, action.payload],
});
