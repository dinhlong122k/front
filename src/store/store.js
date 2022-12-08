import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
// import cateSlice from "./shopping-cart/categorySlice";
import CateReducer from "./shopping-cart/categorySlice";
import ProductReducer from "./shopping-cart/productSlice";
import authReducer from "./shopping-cart/authSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    // Categories: cateSlice.reducer
    categories: CateReducer,
    products: ProductReducer,
    auth : authReducer
  },
});

export default store;
