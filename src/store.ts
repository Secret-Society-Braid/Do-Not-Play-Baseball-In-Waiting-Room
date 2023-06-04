import { configureStore } from "@reduxjs/toolkit";
import lineCounterReducer from "./features/lineCounterSlice";
import linesResponder from "./features/linesResponder";

export const store = configureStore({
  reducer: {
    lineCounter: lineCounterReducer,
    linesResponder: linesResponder
  }
});
