import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 1 },
  reducers: {
    increase(state) {
      state.value += 1;
    },
    decrease(state) {
      if (state.value <= 1) {
        return;
      } else state.value -= 1;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
