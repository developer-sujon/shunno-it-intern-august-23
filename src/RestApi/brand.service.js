import { setBrand } from "../redux/features/brand.feature";
import { store } from "../redux/store";
import { getRequest } from "./globalApi";

const getBrand = async () => {
  const data = await getRequest("/brands")
  store.dispatch(
    setBrand({
      data: data?.data?.data
    })
  )
};

export default getBrand;
