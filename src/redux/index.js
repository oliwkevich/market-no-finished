import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";


export default configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});
