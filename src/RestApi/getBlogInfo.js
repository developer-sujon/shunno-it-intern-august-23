import { setBlogInfo, setSingleBlogInfo } from "../redux/features/blog.feature";
import { store } from "../redux/store";
import publicInstance from "./axiosConfig";

const getBlogInfo = () => {
    store.dispatch(
        setBlogInfo({
            data:[],
            isLoading: true,
            isError: false,
            isSuccess: false,
        })
    )
    publicInstance
    .get("/blogs")
    .then(({data})=>{
        // console.log(data.data)
        store.dispatch(
            setBlogInfo({
                data:data?.data,
                isLoading: false,
                isError: false,
                isSuccess: true,
            })
        )
    })
    .catch(()=>{
        store.dispatch(
            setBlogInfo({
                data:null,
                isLoading: false,
                isError: true,
                isSuccess: false,
            })
        )
    })
};
const getSingleBlogInfo = (id) => {
    store.dispatch(
        setSingleBlogInfo({
            data:{},
            isLoading: true,
            isError: false,
            isSuccess: false,
        })
    )
    publicInstance
    .get(`/blogs/${id}`)
    .then(({data})=>{
        // console.log(data.data)
        store.dispatch(
            setSingleBlogInfo({
                data:data?.data,
                isLoading: false,
                isError: false,
                isSuccess: true,
            })
        )
    })
    .catch(()=>{
        store.dispatch(
            setSingleBlogInfo({
                data:null,
                isLoading: false,
                isError: true,
                isSuccess: false,
            })
        )
    })
};

export {getSingleBlogInfo};
export default getBlogInfo;