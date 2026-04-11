import { createSlice } from "@reduxjs/toolkit";
import { like, disLike } from "./likeActions";

interface LikeState {
  isLoading: boolean;
  message: string;
}

const initialState: LikeState = {
  isLoading: false,
  message: "",
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(like.pending, (state: LikeState) => {
        state.isLoading = true;
      })
      .addCase(like.fulfilled, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload?.data?.message;
      })
      .addCase(like.rejected, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      })

      .addCase(disLike.pending, (state: LikeState) => {
        state.isLoading = true;
      })
      .addCase(disLike.fulfilled, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload?.data?.message;
      })
      .addCase(disLike.rejected, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      });
  },
});

export default likeSlice.reducer;
