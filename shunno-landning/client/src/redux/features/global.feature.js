import { createSlice } from "@reduxjs/toolkit";

export const globalFeature = createSlice({
  name: "globalFeature",
  initialState: {
    apiResponse: {
      isSuccess: false,
      isError: false,
      isLoading: true,
    },
  },
  reducers: {
    setGlobal: (state, actions) => {
      state.apiResponse = actions.payload;
    },
  },
});

export const { setGlobal } = globalFeature.actions;

export default globalFeature.reducer;
