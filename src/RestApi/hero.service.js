import { setHeroInfo } from "../redux/features/hero.feature";
import { store } from "../redux/store";
import publicInstance from "./axiosConfig";

const getHeroInfo = () => {
  publicInstance
    .get("/siteinfo")
    .then(({ data }) => {
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
