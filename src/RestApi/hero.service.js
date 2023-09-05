import { setHeroInfo } from "../redux/features/hero.feature";
import { store } from "../redux/store";
import publicInstance from "./axiosConfig";

const getHeroInfo = () => {
  store.dispatch(
    setHeroInfo({
      data:[],
      isLoading: true,
      isError: false,
      isSuccess: false,
    })
  )
  publicInstance
    .get("/siteinfo")
    .then(({ data }) => {
      console.log(data)
      store.dispatch(
        setHeroInfo({
          data: data?.data?.[0],
          isLoading: false,
          isError: false,
          isSuccess: true,
        })
      );
    })
    .catch((err) => {
      store.dispatch(
        setHeroInfo({
          data: null,
          isLoading: false,
          isError: true,
          isSuccess: false,
        })
      );
      console.log(err);
    });
};

export default getHeroInfo;
