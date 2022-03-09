import { createSlice } from "@reduxjs/toolkit";

const modalToggle = createSlice({
  name: "modal-toggle",
  initialState: { isVisible: false },
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggle } = modalToggle.actions;
export default modalToggle.reducer;
