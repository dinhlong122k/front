import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

export const getCate = createAsyncThunk(
    "categories/getCate",
    async() =>{
        const response = await axios.get("http://localhost:8002/category");
        return response.data;
    }
)


export const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        loading: 'idle',
        size: 0,
    },
    reducers: {
    },
    extraReducers: {
        [getCate.pending] : (state) => {
            state.loading = 'pending'
        },
        [getCate.fulfilled] : (state, action) => {
            state.loading = 'success';
            state.categories = action.payload.rows;
            state.size = action.payload.count;
        },
        [getCate.rejected] : (state) => {
            state.loading ='failed';
        }
    }
})

export default categorySlice.reducer;