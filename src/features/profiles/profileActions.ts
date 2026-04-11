import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/helpers/axiosInstance";

export const myProfile = createAsyncThunk(
  "profile/me",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/profiles/me");
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Request is rejected by action",
      );
    }
  },
);

export const getProfileById = createAsyncThunk(
  "profile/otherUser",
  async (profileId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/profiles/${profileId}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Request rejected for profile by id",
      );
    }
  },
);
