import { createSlice } from "@reduxjs/toolkit";

export const brandFeature = createSlice({
  name: "brandFeature",
  initialState: {
    data: []
  },
  reducers: {
    setBrand: (state, actions) => {
      state.data = actions.payload.data;
    },
  },
});

export const { setBrand } = brandFeature.actions;

export default brandFeature.reducer;
