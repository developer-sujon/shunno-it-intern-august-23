import { createSlice } from "@reduxjs/toolkit";

export const developerFeature = createSlice({
    name: "developerFeature",
    initialState:{
        data: [],
    },
    reducers:{
        setDeveloperInfo: ((state,actions)=>{
            state.data = actions.payload.data;
        }) 
    }
})

export const {setDeveloperInfo} = developerFeature.actions;
export default developerFeature.reducer;