import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: {},
   
  },
  reducers: {
    blogSection: (state, {payload}) => {
      state.blogs = payload.data;
      
    },
  },
});

export const { blogSection } = blogSlice.actions;

export default blogSlice.reducer;
