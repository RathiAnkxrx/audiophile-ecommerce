import { createSlice } from "@reduxjs/toolkit";

const FormSuccessToggle = createSlice({
  name: "Success-toggle",
  initialState: { formValid: false },
  reducers: {
    toggleSuccess(state) {
      state.formValid = !state.formValid;
      console.log(state.formValid);
    },
  },
});

export const { toggleSuccess } = FormSuccessToggle.actions;
export default FormSuccessToggle.reducer;
