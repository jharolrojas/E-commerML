import { createSlice } from '@reduxjs/toolkit';

// Cambiamos countShoppingSlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const countShoppingSlice = createSlice({
		name: 'countShopping',
    initialState: 0,
    reducers: {
        saveCound : (state, actions) =>{
          return state + 1;

        },
        saveCoundSubtract : (state, actions) =>{
        if(state > 0) return state - 1;
        },
        saveReset : (state, actions) =>{
          return 0;
        }  
    }
})

export const { saveCound, saveCoundSubtract,saveReset } = countShoppingSlice.actions;

export default countShoppingSlice.reducer;