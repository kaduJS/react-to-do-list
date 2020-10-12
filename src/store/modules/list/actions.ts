import { createAction } from "@reduxjs/toolkit";

export const addToList: any = createAction("ADD_TO_LIST");
export const toggleCheckbox: any = createAction("TOGGLE_CHECKBOX");
export const removeFromList: any = createAction("REMOVE_FROM_LIST");