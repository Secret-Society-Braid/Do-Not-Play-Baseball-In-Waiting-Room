import { configureStore } from "@reduxjs/toolkit";
import lineCounterReducer from "./features/lineCounterSlice";

export const store = configureStore({
  reducer: {
    lineCounter: lineCounterReducer
  }
});
