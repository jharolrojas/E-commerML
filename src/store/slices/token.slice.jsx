import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {},
    reducers: {
        saveToken : (state, action) =>{
            return action.payload;
        }

    }
})

export const { saveToken } = tokenSlice.actions;

export default tokenSlice.reducer;
