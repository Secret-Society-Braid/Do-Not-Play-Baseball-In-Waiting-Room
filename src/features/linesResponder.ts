import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first: "控え室で",
  second: "野球をしては",
  third: "いけません！",
};

export const linesResponderSlice = createSlice({
  name: 'linesResponder',
  initialState,
  reducers: {
    setFirst: (state, action) => {
      state.first = action.payload;
    },
    setSecond: (state, action) => {
      state.second = action.payload;
    },
    setThird: (state, action) => {
      state.third = action.payload;
    },
    setAll: (state, action) => {
      state.first = action.payload.first;
      state.second = action.payload.second;
      state.third = action.payload.third;
    }
  }
});

export const { setFirst, setSecond, setThird, setAll } = linesResponderSlice.actions;

export default linesResponderSlice.reducer;
