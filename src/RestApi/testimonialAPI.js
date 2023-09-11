import { testimonialSection } from "../redux/features/testimonialSlice";
import { store } from "../redux/store";
import { getRequest } from "./RestClient";

const getTestimonial = async() => {
    const data = await getRequest('/testimonials');
   
    store.dispatch(testimonialSection(data));
};

export default getTestimonial;
