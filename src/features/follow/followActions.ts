import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/helpers/axiosInstance";

export const isFollowed = createAsyncThunk(
  "follow/user",
  async (profileId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/follow/${profileId}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong",
      );
    }
  },
);

export const follow = createAsyncThunk(
  "follow/isFollowed",
  async (profileId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`/follow/`, {
        targetProfileId: profileId,
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong",
      );
    }
  },
);

export const unFollow = createAsyncThunk(
  "unFollow/user",
  async (profileId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(`/follow/${profileId}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Rejected unFollow a user",
      );
    }
  },
);
