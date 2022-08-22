import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const productDetalSlice = createSlice({
    name: 'productDetal',
    initialState: {},
    reducers: {
        saveProductDetail : (state , action) =>{
            return action.payload;
        }

    }
})

export const GetProductDetailThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
        .then((res) =>dispatch(saveProductDetail(res.data.data.product)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { saveProductDetail } = productDetalSlice.actions;

export default productDetalSlice.reducer;
