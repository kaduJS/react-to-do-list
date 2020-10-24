import { createAction } from "@reduxjs/toolkit";

export const addToList: any = createAction("ADD_TO_LIST");
export const toggleCheckbox: any = createAction("TOGGLE_CHECKBOX");
export const toggleCheckboxAll: any = createAction("TOGGLE_CHECKBOX_ALL");
export const removeFromList: any = createAction("REMOVE_FROM_LIST");
export const removeAllFromList: any = createAction("REMOVE_ALL_FROM_LIST");