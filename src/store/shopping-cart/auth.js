// import axios from "axios";
// import { createSlice } from "@reduxjs/toolkit";


// const initialState ={
//     login: {
//         currentUser: null,
//         loading: 'idle',
//         error: false
//     }
// };

// const auth = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         loginStart: (state) => {
//             state.login.loading = 'pending';
//         },
//         loginSuccess: (state, action) => {
//             state.login.loading = 'success';
//             state.login.currentUser = action.payload;
//             state.login.error = false;
//         },
//         loginFailed: (state) => {
//             state.login.loading = 'idle';
//             state.login.error = true;
//         }
//     }
// });

// export const {
//     loginStart,
//     loginSuccess,
//     loginFailed
// } =auth.actions

// export default auth.reducer;