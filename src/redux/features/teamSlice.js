import { createSlice } from "@reduxjs/toolkit";

export const teamSlice = createSlice({
  name: "team",
  initialState: {
    teams: [],
    
  },
  reducers: {
    teamSection: (state, {payload}) => {
      state.teams = payload.data;
      
    },
  },
});

export const { teamSection } = teamSlice.actions;

export default teamSlice.reducer;
