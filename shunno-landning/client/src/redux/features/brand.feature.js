import { createSlice } from "@reduxjs/toolkit";

export const brandFeature = createSlice({
  name: "brandFeature",
  initialState: {
    brands: [],
    apiResponse: {
      isSuccess: false,
      isError: false,
      isLoading: true,
    },
  },
  reducers: {
    setBrand: (state, actions) => {
      state.brands = actions.payload.data;
      state.apiResponse = {
        isSuccess: actions.payload.isSuccess,
        isError: actions.payload.isError,
        isLoading: actions.payload.isLoading,
      };
    },
  },
});

export const { setBrand } = brandFeature.actions;

export default brandFeature.reducer;
