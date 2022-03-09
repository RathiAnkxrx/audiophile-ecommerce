import { createSlice } from "@reduxjs/toolkit";

const ProductAdd = createSlice({
  name: "Add product to cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    onAdd(state, action) {
      const { data } = action.payload;
      const { counter } = action.payload;
      const existingItem = state.items.find((item) => item.id === data.id);
      state.totalAmount += data.price * counter;
      if (!existingItem) {
        state.items.push({
          ...data,
          totalQuantity: counter,
        });
      } else {
        existingItem.totalQuantity += counter;
      }
    },
    onRemove(state, action) {
      const { data } = action.payload;
      const { counter } = action.payload;
      const existingItem = state.items.find((item) => item.id === data.id);
      state.totalAmount -= existingItem.price;
      if (existingItem.totalQuantity === 1) {
        state.items = state.items.filter((item) => item.id !== data.id);
      } else {
        existingItem.totalQuantity -= counter;
      }
    },
    onClear(state) {
      console.log(state);
      state = state.initialState;
      console.log(state.items, state.totalAmount);
    },
  },
});

export const { onAdd, onRemove, onClear } = ProductAdd.actions;
export default ProductAdd.reducer;
