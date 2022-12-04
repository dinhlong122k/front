import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initalState ={
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.token = action.payload.token;
        }
    },

})

const {loginSuccess} = authSlice.actions;

export const login = ({email, password}) => async dispatch => {
    const res = await axios.post('http://localhost:8001/user/login', {
        email, password
    })
    dispatch(loginSuccess(res.data));
}

export default authSlice.reducer;