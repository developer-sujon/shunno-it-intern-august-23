import { createSlice } from "@reduxjs/toolkit";

export const globalFeature = createSlice({
  name: "globalFeature",
  initialState: {
    isSuccess: false,
    isError: false,
    isLoading: true,
    error: undefined,
    theme: 'light',
    language: 'en'
  },
  reducers: {
    setGlobal: (state, {payload}) => {
      // state.apiResponse = actions.payload;
      Object.keys(state).forEach(key => {
        if(state.hasOwnProperty(key)){
          state[key] = payload[key]
        }
      })
    },
  },
});

export const { setGlobal } = globalFeature.actions;

export default globalFeature.reducer;
