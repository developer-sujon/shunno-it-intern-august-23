import { createSlice } from "@reduxjs/toolkit";

export const heroFeature = createSlice({
  name: "heroFeature",
  initialState: {
    data: {}
  },
  reducers: {
    setHeroInfo: (state, actions) => {
      state.data = actions.payload.data;
    },
  },
});

export const { setHeroInfo } = heroFeature.actions;

export default heroFeature.reducer;
