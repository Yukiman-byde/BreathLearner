import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categoryId",
  initialState: {
      categoryId: null,
  },

  reducers: {
      setId: (state, action) => {
          state.categoryId = action.payload.categoryId;
      },
  },
});

export const { setId } = categorySlice.actions;

export const selectCategory = (state) =>state.categoryId.categoryId;

export default categorySlice.reducer;
