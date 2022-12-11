import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../axios/axiosClient";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../../utils/localStorage";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await axiosClient.post("/user/login", {
        email: email,
        password: password,
      });
      return response.data.data;
    } catch (err) {
      throw new Error("Has ERROR!");
    }
  }
);
export const loginSlice = createSlice({
  name: "auth/login",
  initialState: {
    accessToken: getAccessToken(),
    error: false,
    loading: false,
    user: {
      username: "",
      fullName: "",
      email: "",
      avatar: "",
      phone: "",
      address: "",
      birthday: "", // date có sai thì tự gắn lại sau
    },
  },
  reducers: {
    logout: (state) => {
      state.accessToken = "";
      removeAccessToken();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.access_token;
        setAccessToken(state.accessToken);
      });
  },
});
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
