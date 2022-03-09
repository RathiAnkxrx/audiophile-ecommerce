import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import modalToggleReducer from "./modalToggle";
import productAddReducer from "./productAdd";
import successReducer from "./SuccessToggle";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    modalToggle: modalToggleReducer,
    product: productAddReducer,
    successToggle: successReducer,
  },
});

export default store;
