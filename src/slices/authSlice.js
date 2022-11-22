import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../services/authAPI";

const initialState = {
  user: JSON.parse(localStorage.getItem("user") || null),
  loading: false,
  erorr: null,
};

export const signin = createAsyncThunk("auth/signin", async (values) => {
  try {
    const data = await authAPI.signin(values);
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
});

export const signupAction = createAsyncThunk("auth/signup", async (values) => {
  try {
    const data = await authAPI.signup(values);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("user");
      return { ...state, user: null };
    },
  },
  extraReducers: (buider) => {
    buider.addCase(signin.pending, (state, action) => {
      return { ...state, loading: true };
    });
    buider.addCase(signin.fulfilled, (state, action) => {
      return { ...state, loading: false, user: action.payload };
    });
    buider.addCase(signin.rejected, (state, action) => {
      return { ...state, loading: false, erorr: action.error.message };
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
