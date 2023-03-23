import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Features/Products/productsSlice";
import cartReducer from "./Features/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer,
  },
});
