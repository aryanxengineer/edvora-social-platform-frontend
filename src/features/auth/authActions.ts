import type { SigninInputType, SignupInputType } from "@/@types/auth.types";
import axiosInstance from "@/helpers/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { UserResponseType } from "@/@types/auth.types";

/*===================
    signup Action
===================*/
export const signupUser = createAsyncThunk<UserResponseType, SignupInputType>(
  "auth/signup",
  async (signupInput, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/signup", signupInput, {
        withCredentials: true,
      });
      console.log(data);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Registration failed - Try again later",
      );
    }
  },
);

/*===================
    signin Action
===================*/
export const signinUser = createAsyncThunk<UserResponseType, SigninInputType>(
  "auth/signin",
  async (signinInput, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/signin", signinInput, {
        withCredentials: true,
      });

      console.log(data);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed - Try again later",
      );
    }
  },
);

/*===================
    signin Action
===================*/
export const authenticUser = createAsyncThunk<
  UserResponseType
>("auth/authenticUser", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get("/auth/me", {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "User fetching failed - Login again",
    );
  }
});

/*===================
    signin Action
===================*/
export const signout = createAsyncThunk(
  "auth/signout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/signout", {
        withCredentials: true,
      });
      console.log(data);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Sign out failed - Try again later",
      );
    }
  },
);
