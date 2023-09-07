import { setBlogInfo, setSingleBlogInfo } from "../redux/features/blog.feature";
import { store } from "../redux/store";
import publicInstance from "./axiosConfig";
import { getRequest } from "./globalApi";

const getBlogInfo = async () => {
    const data = await getRequest("/blogs")
    store.dispatch(
        setBlogInfo({
            data: data?.data?.data
        })
    )
};
const getSingleBlogInfo = async (id) => {
    const data = await getRequest(`/blogs/${id}`)
    store.dispatch(
        setSingleBlogInfo(data?.data)
    )
};

export {getSingleBlogInfo};
export default getBlogInfo;