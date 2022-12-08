import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:8002/"

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async(page) =>{
        console.log(page);
        const response = await axios.get(baseUrl + `products?pageNumber=${page.pageNumber}&pageSize=${page.pageSize}&name=${page.properties}&order=${page.orderby}&search=${page.search}`);
        return response.data;
    }
)

const initialState = {
    products: [],
    loading: 'idle',
    pageNumber: 0,
    pageSize: 4,
    total: 0 
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
            state.pageNumber = action.payload.pageNumber;
            state.total = action.payload.total;
            state.pageSize = action.payload.pageSize;
        },
        [getProducts.rejected] : (state) => {
            state.loading ='failed';
        }
    }
})

export const selectProducts = (state) => state.products.products;
export const selectTotalPage = (state) => state.products.total;
export const selectProductPerPage = (state) => state.products.pageSize;
export const selectPageNumber = (state) => state.products.pageNumber;
 export default productSlice.reducer;