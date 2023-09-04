import { setBrand } from "../redux/features/brand.feature";
import { store } from "../redux/store";
import publicInstance from "./axiosConfig";

const getBrand = () => {
  publicInstance
    .get(`/brands`)
    .then(({ data }) => {
      store.dispatch(
        setBrand({
          data: data?.data,
          isLoading: false,
          isError: false,
          isSuccess: true,
        })
      );
    })
    .catch((err) => {
      store.dispatch(
        setBrand({
          data: [],
          isLoading: false,
          isError: true,
          isSuccess: false,
        })
      );
      console.log(err);
    });
};

export default getBrand;
