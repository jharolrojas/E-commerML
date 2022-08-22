import { createSlice } from '@reduxjs/toolkit';

// Cambiamos userNameslice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameslice = createSlice({
	name: 'userName',
    initialState: "",
    reducers: {
        SaveUserName : (state, index) =>{
           return index.payload;
        }
    }
})

export const { SaveUserName } = userNameslice.actions;

export default userNameslice.reducer;