import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: function (state, action) {
      state.items.push(action.payload);
    },
    removeItem: function (state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearAllItems: function (state, action) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearAllItems } = cartSlice.actions;
export default cartSlice.reducer;
