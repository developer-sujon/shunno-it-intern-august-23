import { createSlice } from "@reduxjs/toolkit";

export const experienceFeature = createSlice({
    name: "experienceFeature",
    initialState: {
        data: [],
        apiResponse: {
            isSuccess: false,
            isError: false,
            isLoading: false,
        },
    },
    reducers:{
        setExperienceInfo:((state,actions)=>{
            state.data = actions.payload.data;
            state.apiResponse = {
                isSuccess: actions.payload.isSuccess,
                isError: actions.payload.isError,
                isLoading: actions.payload.isLoading,
            };
        })
    }
})
export const {setExperienceInfo} = experienceFeature.actions;
export default experienceFeature.reducer;