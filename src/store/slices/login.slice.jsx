import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "Login",
  initialState: "",
  reducers: {
    saveLogin: (state, action) => {
      return action.payload;
    },
  },
});

export const { saveLogin } = loginSlice.actions;

export default loginSlice.reducer;
