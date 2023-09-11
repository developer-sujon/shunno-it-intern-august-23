import { createSlice } from "@reduxjs/toolkit";

export const testimonialSlice = createSlice({
  name: "testimonial",
  initialState: {
    testimonials: [],
    
  },
  reducers: {
    testimonialSection: (state, {payload}) => {
      state.testimonials = payload.data;
      
    },
  },
});

export const { testimonialSection } = testimonialSlice.actions;

export default testimonialSlice.reducer;
