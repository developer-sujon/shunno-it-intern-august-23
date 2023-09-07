import { createSlice } from "@reduxjs/toolkit";

const testimonialFeature = createSlice({
    name: "testimonialFeature",
    initialState:{
        data: [],
    },
    reducers:{
        setTestimonialInfo:(state,actions)=>{
            state.data = actions.payload.data;
        }
    }
})
export const {setTestimonialInfo} = testimonialFeature.actions;
export default testimonialFeature.reducer;