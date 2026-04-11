import { createSlice } from "@reduxjs/toolkit";
import { follow, unFollow } from "./followActions";

interface FollowState {
  isLoading: boolean;
  message: string;
}

const initialState: FollowState = {
  isLoading: false,
  message: "",
};

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(follow.pending, (state: FollowState) => {
        state.isLoading = true;
      })
      .addCase(follow.fulfilled, (state: FollowState, action) => {
        state.isLoading = false;
        state.message = action.payload?.data?.message;
      })
      .addCase(follow.rejected, (state: FollowState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      })

      .addCase(unFollow.pending, (state: FollowState) => {
        state.isLoading = true;
      })
      .addCase(unFollow.fulfilled, (state: FollowState, action) => {
        state.isLoading = false;
        state.message = action.payload?.data?.message;
      })
      .addCase(unFollow.rejected, (state: FollowState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      });
  },
});

export default followSlice.reducer;
