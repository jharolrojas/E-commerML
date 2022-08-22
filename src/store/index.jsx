import { configureStore } from "@reduxjs/toolkit";
import productDetalSlice from "./slices/productDetail.slice";
import productsCrudSlice from "./slices/productsCrud.slice";
import purchasesSlice from "./slices/purchases.slice";
import tokenSlice from "./slices/token.slice";
import carShoppingSlice from "./slices/carShopping.slice";
import loginSlice from "./slices/login.slice";

export default configureStore({
  reducer: {
    productsCrud: productsCrudSlice,
    purchases: purchasesSlice,
    productDetal: productDetalSlice,
    token: tokenSlice,
    carShopping: carShoppingSlice,
    Login: loginSlice,
  },
});
