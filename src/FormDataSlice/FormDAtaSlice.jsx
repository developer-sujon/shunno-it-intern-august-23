import { createSlice } from "@reduxjs/toolkit"


const initialState = {
     FromData : [] 
}

const FormDataSlice = createSlice({
    name : 'FromData',
    initialState,
    reducers : {
        GetFromData : (state, action) => {
            state.FromData = [...state.FromData, action.payload]
        }

    }
})


export const {GetFromData} = FormDataSlice.actions

export default FormDataSlice.reducer