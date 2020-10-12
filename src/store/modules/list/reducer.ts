import { createReducer } from "@reduxjs/toolkit";
import { Item } from "../../../types";

import { addToList, toggleCheckbox, removeFromList } from "./actions";

import { list } from "../../../services";

interface Action {
  type: string;
  payload: Array<Item> | any;
}

export default createReducer(list, {
  [addToList.type]: (state, action: Action) => [...state, action.payload],
  [toggleCheckbox.type]: (state, action: Action) => {
    const item: Item = { ...action.payload };

    item.isChecked ? item.isChecked = false : item.isChecked = true;

    state.map((obj: any) => {
      const newObj: Item = obj;
      if (item.id === obj.id) {
        newObj.isChecked ? newObj.isChecked = false : newObj.isChecked = true;
      }
      return newObj;
    })
  },
  [removeFromList.type]: (state, action: Action) => {
    const item: Item = { ...action.payload };

    return state.filter((obj: any) => item.id !== obj.id)
  }
});
