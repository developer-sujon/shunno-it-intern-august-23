import { createSlice } from "@reduxjs/toolkit";

export const serviceFeature = createSlice({
    name: "serviceFeature",
    initialState: {
        data: [],
        apiResponse: {
            isSuccess: false,
            isError: false,
            isLoading: false,
        },
    },
    reducers: {
        setServiceInfo: (state, actions) => {
            state.data = actions.payload.data;
            state.apiResponse = {
                isSuccess: actions.payload.isSuccess,
                isError: actions.payload.isError,
                isLoading: actions.payload.isLoading,
            };
        }
    }
})

export const {setServiceInfo} = serviceFeature.actions;
export default serviceFeature.reducer
