import { setBrand } from "../redux/features/brandSlice";
import { store } from "../redux/store";
import { getRequest } from "./RestClient";

const getBrand = async() => {
    const data = await getRequest('/brands');
    
    store.dispatch(setBrand(data))
};

export default getBrand;
