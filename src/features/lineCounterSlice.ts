import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 3
};


export const lineCounterSlice = createSlice({
  name: 'lineCounter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if(state.count == 1) {
        state.count = 1;
        return;
      }
      state.count -= 1;
    },
    reset: (state) => {
      state.count = initialState.count;
    }
  }
});

export const { increment, decrement, reset } = lineCounterSlice.actions;

export default lineCounterSlice.reducer;
