import { createSlice } from "@reduxjs/toolkit";

export const developerFeature = createSlice({
    name: "developerFeature",
    initialState:{
        data: [],
        apiResponse:{
            isSuccess: false,
            isLoading: false,
            isError: false,
        }
    },
    reducers:{
        setDeveloperInfo: ((state,actions)=>{
            state.data = actions.payload.data;
            state.apiResponse= {
                isSuccess: actions.payload.isSuccess,
                isError: actions.payload.isError,
                isLoading: actions.payload.isLoading,
            }
        }) 
    }
})

export const {setDeveloperInfo} = developerFeature.actions;
export default developerFeature.reducer;