import { blogSection } from "../redux/features/blogSlice";
import { store } from "../redux/store";
import { getRequest } from "./RestClient";

const getBlogs = async() => {
    const data = await getRequest('/blogs')
    store.dispatch(blogSection(data))
};

export default getBlogs;
