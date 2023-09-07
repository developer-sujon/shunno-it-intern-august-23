import { setHeroInfo } from "../redux/features/hero.feature";
import { store } from "../redux/store";
import { getRequest } from "./globalApi";

const getHeroInfo = async () => {
  const {data} = await getRequest("/siteinfo")
  store.dispatch(
    setHeroInfo({
      data: data?.data[0]
    })
  )
// console.log(data?.data[0])
};

export default getHeroInfo;
