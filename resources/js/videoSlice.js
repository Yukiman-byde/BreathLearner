import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "videoData",
  initialState: {
      videoURL: null,
      title: null,
      description: null,
      thumbnail: null,
  },

  reducers: {
      postRequest: (state, action) => {
        state.videoURL = action.payload.videoURL;
        state.title = action.payload.title;
        state.description = action.payload.description;
        state.thumbnail = action.payload.thumbnail;
      },
  },
});

export const { postRequest } = videoSlice.actions;

export const selectVideoData = (state) =>state.videoData;

export default videoSlice.reducer;
