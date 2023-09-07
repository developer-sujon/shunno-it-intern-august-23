import { createSlice } from "@reduxjs/toolkit";

export const blogFeature = createSlice({
    name: "blogFeature",
    initialState:{
        data: [],
        singleBlogData: {},
    },
    reducers:{
        setBlogInfo: (state,actions) => {
            state.data = actions.payload.data;
        },
        setSingleBlogInfo: (state,actions) => {
            state.singleBlogData = actions.payload.data;
        }
    }
})
export const {setBlogInfo, setSingleBlogInfo} = blogFeature.actions
export default blogFeature.reducer