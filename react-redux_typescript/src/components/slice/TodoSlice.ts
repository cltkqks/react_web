import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Todo } from "../model/todo.model";

const initialState = [] as Todo[];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add(state, action: PayloadAction<string>) {
      state.push({ id: Math.random().toString(), text: action.payload });
    },
    remove(state, action: PayloadAction<string>) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer;
