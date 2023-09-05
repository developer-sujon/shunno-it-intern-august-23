import { createSlice } from "@reduxjs/toolkit";

const testimonialFeature = createSlice({
    name: "testimonialFeature",
    initialState:{
        data: [],
        apiResponse:{
            isSuccess: false,
            isLoading: false,
            isError: false,
        }
    },
    reducers:{
        setTestimonialInfo:(state,actions)=>{
            state.data = actions.payload.data;
            state.apiResponse = {
                isSuccess: actions.payload.isSuccess,
                isError: actions.payload.isError,
                isLoading: actions.payload.isLoading,
            }
        }
    }
})
export const {setTestimonialInfo} = testimonialFeature.actions;
export default testimonialFeature.reducer;