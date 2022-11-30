import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:8002/"

export const getCate = createAsyncThunk(
    "categories/getCate",
    async() =>{
        const response = await axios.get("http://localhost:3000/categories");
        return response.data;
    }
)


export const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        loading: 'idle'
    },
    reducers: {
    },
    extraReducers: {
        [getCate.pending] : (state) => {
            state.loading = 'pending'
        },
        [getCate.fulfilled] : (state, action) => {
            state.loading = 'success';
            state.categories = action.payload;
        },
        [getCate.rejected] : (state) => {
            state.loading ='failed';
        }
    }
})

export default categorySlice.reducer;