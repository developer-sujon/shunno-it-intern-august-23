import { createSlice } from "@reduxjs/toolkit";

export const heroFeature = createSlice({
  name: "heroFeature",
  initialState: {
    siteInfo: {
      homeTitle: "..................",
      homeSubtitle: "................",
      homeLinkLabel: ".............",
      homeLink: "...............",
    },
    apiResponse: {
      isSuccess: false,
      isError: false,
      isLoading: true,
    },
  },
  reducers: {
    setHeroInfo: (state, actions) => {
      state.siteInfo = actions.payload.data;
      state.apiResponse = {
        isSuccess: actions.payload.isSuccess,
        isError: actions.payload.isError,
        isLoading: actions.payload.isLoading,
      };
    },
  },
});

export const { setHeroInfo } = heroFeature.actions;

export default heroFeature.reducer;
