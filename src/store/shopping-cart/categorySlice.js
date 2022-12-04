import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

export const getCate = createAsyncThunk(
    "categories/getCate",
    async() =>{
        const response = await axios.get("http://localhost:8002/category");
        // console.log(response.data);
        return response.data.rows;
    }
)

const initialState = {
    categories: [],
    loading: 'idle',
    size: 0,
}
export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: {
        [getCate.pending] : (state) => {
            state.loading = 'pending'
        },
        [getCate.fulfilled] : (state, action) => {
            state.loading = 'success';
            state.categories = action.payload;
            state.size = action.payload.count;
        },
        [getCate.rejected] : (state) => {
            state.loading ='failed';
        }
    }
})
export const selectCategories = (state) => state.categories.categories;


export default categorySlice.reducer;