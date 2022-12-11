import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "../store/shopping-cart/authSlice";
import axiosClient from "../axios/axiosClient";

export const loginUser = async(user, dispatch, navigate) =>{
    dispatch(loginStart());

    try {
        const res = await axiosClient.post("http://localhost:8002/user/login", user);   
        dispatch(loginSuccess(res.data));
        navigate("/home");
    } catch (error) {
        dispatch(loginFailed());
    }
    // nhu cc
};

export const registerUser = async(user, dispatch, navigate) =>{
    dispatch(registerStart());

    try {
        const res = await axiosClient.post("http://localhost:8002/user/register", user);   
        dispatch(registerSuccess(res.data));
        navigate("/login");
    } catch (error) {
        dispatch(registerFailed());
    }
};