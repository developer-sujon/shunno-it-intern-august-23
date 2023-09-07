import { createSlice } from "@reduxjs/toolkit";

export const serviceFeature = createSlice({
    name: "serviceFeature",
    initialState: {
        data: [],
    },
    reducers: {
        setServiceInfo: (state, actions) => {
            state.data = actions.payload.data;
        }
    }
})

export const {setServiceInfo} = serviceFeature.actions;
export default serviceFeature.reducer
