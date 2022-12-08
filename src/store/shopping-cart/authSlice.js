import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    login: {
        currentUser: null,
        loading: 'idle',
        error: false,
        accessToken: localStorage.getItem('accessToken')
    },
    register: {
        loading: 'idle',
        error: false
    }
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.login.loading = 'pending';
        },
        loginSuccess: (state, action) => {
            state.login.loading = 'success';
            state.login.currentUser = action.payload;
            // state.accessToken = action.payload.
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.loading = 'idle';
            state.login.error = true;
        },
        registerStart: (state) => {
            state.register.loading = 'pending';
        },
        registerSuccess: (state, action) => {
            state.register.loading = 'success';
            state.register.error = false;
        },
        registerFailed: (state) => {
            state.register.loading = 'idle';
            state.register.error = true;
        }
    }
});

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerFailed,
    registerStart,
    registerSuccess
} =auth.actions


export default auth.reducer;