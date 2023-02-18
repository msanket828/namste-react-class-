import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: function (state, action) {
      state.items.push({ ...action.payload, itemScore: 1 });
    },
    removeItem: function (state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearAllItems: function (state, action) {
      state.items = [];
    },
    addCount: function (state, action) {
      const currentIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(currentIndex, 1, action.payload);
    },
    subCount: function (state, action) {
      const currentIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(currentIndex, 1, action.payload);
    },
  },
});

export const { addItem, removeItem, clearAllItems, addCount, subCount } =
  cartSlice.actions;
export default cartSlice.reducer;
