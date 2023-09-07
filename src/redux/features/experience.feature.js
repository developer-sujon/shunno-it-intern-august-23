import { createSlice } from "@reduxjs/toolkit";

export const experienceFeature = createSlice({
    name: "experienceFeature",
    initialState: {
        data: [],
    },
    reducers:{
        setExperienceInfo:((state,actions)=>{
            state.data = actions.payload.data;
        })
    }
})
export const {setExperienceInfo} = experienceFeature.actions;
export default experienceFeature.reducer;