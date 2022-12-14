import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/GetConfig";
import { setIsLoading } from "./isLoading.slice";

export const purchasesSlice = createSlice({
  name: "purchases",
  initialState: [],
  reducers: {
    savePurchases: (state, action) => {
      return action.payload;
    },
  },
});
export const GetPurchasesThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      "https://e-commerce-api.academlo.tech/api/v1/purchases",
      getConfig()
    )
    .then((res) => dispatch(savePurchases(res.data.data.purchases)))
    .finally(() => dispatch(setIsLoading(false)));
};
export const PostPurchasesThunk = (productsCar) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      "https://e-commerce-api.academlo.tech/api/v1/purchases",
      productsCar,
      getConfig()
    )
    .then(() => dispatch(dispatch(GetPurchasesThunk())))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { savePurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
