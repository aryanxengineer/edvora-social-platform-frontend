import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/helpers/axiosInstance";

export const follow = createAsyncThunk(
  "follow/user",
  async (userId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`/follow/`, {
        targetUserId: userId,
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Rejected follow a user",
      );
    }
  },
);

export const unFollow = createAsyncThunk(
  "unFollow/user",
  async (userId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(`/follow/${userId}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Rejected unFollow a user",
      );
    }
  },
);
