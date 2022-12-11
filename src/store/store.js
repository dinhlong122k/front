import { configureStore } from "@reduxjs/toolkit";
// import cateSlice from "./shopping-cart/categorySlice";
import CateReducer from "./shopping-cart/categorySlice";
import ProductReducer from "./shopping-cart/productSlice";
// import authReducer from "./shopping-cart/authSlice";
import authReducer from "./features/authSlice";
import cartReducer from "./shopping-cart/cartSlice";
import cartUiReducer from "./shopping-cart/cartUiSlice";

const store = configureStore({
  reducer: {
    auth : authReducer,
    cart: cartReducer,
    cartUi: cartUiReducer,

    // Categories: cateSlice.reducer
    categories: CateReducer,
    products: ProductReducer,
  },
});

export default store;
