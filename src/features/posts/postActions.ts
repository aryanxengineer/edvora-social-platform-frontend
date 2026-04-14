import axiosInstance from "@/helpers/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createPost = createAsyncThunk(
  "posts/create",
  async (postData: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/posts/", postData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create post",
      );
    }
  },
);

export const getSinglePost = createAsyncThunk(
  "posts/single",
  async (postId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/posts/post/${postId}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch posts",
      );
    }
  },
);

export const getProfilePosts = createAsyncThunk(
  "posts/profilePosts",
  async (profileId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/posts/${profileId}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch posts",
      );
    }
  },
);
// export const getSinglePost = createAsyncThunk("post/single", async () => {});
// export const getSinglePost = createAsyncThunk("post/single", async () => {});
