import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:8002/"

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async() =>{
        const response = await axios.get("http://localhost:3000/products");
        console.table(response);
        return response.data;
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: 'idle'
    },
    reducers: {
    },
    extraReducers: {
        [getProducts.pending] : (state) => {
            state.loading = 'pending'
        },
        [getProducts.fulfilled] : (state, action) => {
            state.loading = 'success';
            state.products = action.payload;
        },
        [getProducts.rejected] : (state) => {
            state.loading ='failed';
        }
    }
})

export default productSlice.reducer;