import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    
  },
  reducers: {
    allService: (state, {payload}) => {
      state.services = payload.data;
      
    },
  },
});

export const { allService } = serviceSlice.actions;

export default serviceSlice.reducer;
