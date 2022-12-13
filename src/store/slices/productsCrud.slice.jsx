import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const productsCrudSlice = createSlice({
  name: "productsCrud",
  initialState: [],
  reducers: {
    SetProducts: (state, action) => {
      return action.payload;
    },
  },
});
export const GetProductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then((res) => dispatch(SetProducts(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
};
export const GetProductsFilterThunk = (product) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `hhttps://e-commerce-api.academlo.tech/api/v1/products?query=${product}`
    )
    .then((res) => dispatch(SetProducts(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
};
export const GetProductsByCategoryThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`
    )
    .then((res) => dispatch(SetProducts(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { SetProducts } = productsCrudSlice.actions;

export default productsCrudSlice.reducer;
