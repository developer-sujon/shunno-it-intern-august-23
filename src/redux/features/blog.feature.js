import { createSlice } from "@reduxjs/toolkit";

export const blogFeature = createSlice({
    name: "blogFeature",
    initialState:{
        data: [],
        singleBlogData: {},
        apiResponse:{
            isSuccess: false,
            isLoading: false,
            isError: false,
        }
    },
    reducers:{
        setBlogInfo: (state,actions) => {
            state.data = actions.payload.data;
            state.apiResponse= {
                isSuccess: actions.payload.isSuccess,
                isError: actions.payload.isError,
                isLoading: actions.payload.isLoading,
            }
        },
        setSingleBlogInfo: (state,actions) => {
            state.singleBlogData = actions.payload.data;
            state.apiResponse= {
                isSuccess: actions.payload.isSuccess,
                isError: actions.payload.isError,
                isLoading: actions.payload.isLoading,
            }
        }
    }
})
export const {setBlogInfo, setSingleBlogInfo} = blogFeature.actions
export default blogFeature.reducer