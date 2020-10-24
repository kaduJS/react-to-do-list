import { createReducer } from "@reduxjs/toolkit";
import { Item, Action } from "../../../types";

import { addToList, toggleCheckbox, toggleCheckboxAll, removeFromList, removeAllFromList } from "./actions";

import { list } from "../../../services";

export default createReducer(list, {
  [addToList.type]: (state, action: Action) => [...state, action.payload],
  [toggleCheckbox.type]: (state, action: Action) => {
    const currentItem: Item = state.filter(item => item.id === action.payload)[0];
    const newIsCheckedState: boolean = currentItem.isChecked ? false : true;
    const newItem = { id: currentItem.id, title: currentItem.title, isChecked: newIsCheckedState };
    const rest: Item[] = state.filter(item => item.id !== action.payload);
    return [...rest, newItem];
  },
  [toggleCheckboxAll.type]: (state, action) => {
    const currentItem: boolean = action.payload;
    const newAllIsCheckedState: boolean = !currentItem ? false : true;
    const newList = state.map((item) => {
      return { id: item.id, title: item.title, isChecked: newAllIsCheckedState };
    })
    return newList;
  },
  [removeFromList.type]: (state, action: Action) => {
    const item: Item = { ...action.payload };
    console.log(item);
    return state.filter((obj: any) => item.id !== obj.id)
  },
  [removeAllFromList.type]: (state, action: Action) => {
    return [];
  }
});
