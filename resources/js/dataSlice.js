import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "dataId",
  initialState: {
      dataId: null,
  },

  reducers: {
      setId: (state, action) => {
          state.dataId = action.payload.dataId;
      },
  },
});

export const { setId } = dataSlice.actions;

export const selectNumber = (state) =>state.dataId.dataId;

export default dataSlice.reducer;
