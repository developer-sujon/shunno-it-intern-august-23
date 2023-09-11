//Internal Imports
import { setBrand } from "../redux/features/brandSlice";
import { store } from "../redux/store";
import { getRequest } from "./RestClient";

const getHeroInfo = async() => {
  const data = await getRequest('/siteinfo')
  console.log(data);
  store.dispatch(setBrand(data))
};

export default getHeroInfo;
