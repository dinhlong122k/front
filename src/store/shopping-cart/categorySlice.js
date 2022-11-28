import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// export const getCate = createAsyncThunk(
//     'categorySlice/getCate',
//     async(taskName) => {
//         const response = await new Promise((resolve) =>
//             setTimeout(() => resolve({data: taskName}) , 1000)
//         );
//         return response.data;
//     }
// );

export const getCate = createAsyncThunk('category/getCate', async () => {
    // console.log(response);
    return axios
            // .get("http://localhost:8002/category/1")
            .get("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
            // .then((response) => response.json())
})

export const cateSlice = createSlice({
    // name: 'Categories',
    name: 'posts',
    initialState: {
        posts: [],
        loading: false
    },
    extraReducers: {
        [getCate.pending] : (state, action) => {
            state.loading = true 
        },
        [getCate.fulfilled] : (state, action) => {
            state.loading = false;
            state.posts = action.payload
            console.log(action.payload);
        },
        [getCate.rejected] : (state, action) => {
            state.loading = false;
        },
    },
});

// export default cateSlice.reducer;
//export const {getCateById} = cateSlice.actions;
export default cateSlice.reducer;