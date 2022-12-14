import { createSlice } from "@reduxjs/toolkit";
import getConfig from "../../utils/GetConfig";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";
import { saveCound } from "./countShopping.slice";

export const carShoppingSlice = createSlice({
  name: "carShopping",
  initialState: [],
  reducers: {
    saveCarShopping: (state, action) => {
      return action.payload;
    },
  },
});
export const GetProductsCarThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://e-commerce-api.academlo.tech/api/v1/cart", getConfig())
    .then((res) => dispatch(saveCarShopping(res.data.data.cart.products)))
    .catch((err) => console.log(err))
    .finally(() => dispatch(setIsLoading(false)));
};
export const PostProductCarThunk = (body) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      "https://e-commerce-api.academlo.tech/api/v1/cart",
      body,
      getConfig()
    )
    .then(() => dispatch(GetProductsCarThunk(), dispatch(saveCound())))
    .finally(() => dispatch(setIsLoading(false)));
};
export const DeleteProductCarThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(
      `https://e-commerce-api.academlo.tech/api/v1/cart/${id}`,
      getConfig()
    )
    .then(() => dispatch(GetProductsCarThunk()))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { saveCarShopping } = carShoppingSlice.actions;

export default carShoppingSlice.reducer;
