import { setTestimonialInfo } from "../redux/features/testimonial.feature";
import { store } from "../redux/store";
import publicInstance from "./axiosConfig";
import { getRequest } from "./globalApi";

const getTestimonialInfo = async () => {
    const data = await getRequest("/testimonials")
    store.dispatch(
        setTestimonialInfo({
            data: data?.data?.data
        })
    )
};

export default getTestimonialInfo;