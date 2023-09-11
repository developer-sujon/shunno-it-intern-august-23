import { createSlice } from "@reduxjs/toolkit";

export const globalFeature = createSlice({
  name: "globalFeature",
  initialState: {
      isSuccess: false,
      isError: false,
      isLoading: true,
      error: {},
  },
  reducers: {
    setGlobal: (state, {payload}) => {
      state.isLoading = payload.isLoading,
      state.isError = payload.isError,
      state.isLoading = payload.isLoading,
      state.error = payload.error
    },
  },
});

export const { setGlobal } = globalFeature.actions;

export default globalFeature.reducer;
