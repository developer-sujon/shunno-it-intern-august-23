import { createSlice } from "@reduxjs/toolkit";

export const heroFeature = createSlice({
  name: "heroFeature",
  initialState: {
    siteInfo: {},
   
  },
  reducers: {
    setHeroInfo: (state, {payload}) => {
      state.siteInfo = payload.data;
      
    },
  },
});

export const { setHeroInfo } = heroFeature.actions;

export default heroFeature.reducer;
