import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
// import cateSlice from "./shopping-cart/categorySlice";
import CateReducer from "./shopping-cart/categorySlice"

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    // Categories: cateSlice.reducer
    cate: CateReducer
  },
});

export default store;
