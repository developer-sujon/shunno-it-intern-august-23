import { setTestimonialInfo } from "../redux/features/testimonial.feature";
import { store } from "../redux/store";
import publicInstance from "./axiosConfig";

const getTestimonialInfo = () => {
    store.dispatch(
        setTestimonialInfo({
            data:[],
            isLoading: true,
            isError: false,
            isSuccess: false,
        })
    )
    publicInstance
    .get("/testimonials")
    .then(({data})=>{
        // console.log(data.data)
        store.dispatch(
            setTestimonialInfo({
                data:data?.data,
                isLoading: false,
                isError: true,
                isSuccess: false,
            })
        )
    })
    .catch(()=>{
        store.dispatch(
            setTestimonialInfo({
                data:null,
                isLoading: false,
                isError: true,
                isSuccess: false,
            })
        )
    })
};

export default getTestimonialInfo;