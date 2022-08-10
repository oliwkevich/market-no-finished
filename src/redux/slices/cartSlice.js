import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    removeProducts: (state, action) => {
      state.quantity = 0;
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, removeProducts } = cartSlice.actions;
export default cartSlice.reducer;
