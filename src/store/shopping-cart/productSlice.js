import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:8002/"

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async() =>{
        const response = await axios.get(baseUrl + "products?pageNumber=1&pageSize=12");
        return response.data;
    }
)

const initialState = {
    products: [],
    loading: 'idle',
    size: 0,
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: {
        [getProducts.pending] : (state) => {
            state.loading = 'pending'
        },
        [getProducts.fulfilled] : (state, action) => {
            state.loading = 'success';
            state.products = action.payload.data;
        },
        [getProducts.rejected] : (state) => {
            state.loading ='failed';
        }
    }
})

export const selectProducts = (state) => state.products.products;


export default productSlice.reducer;