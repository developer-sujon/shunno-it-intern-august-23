import { allService } from "../redux/features/servicesSlice";
import { store } from "../redux/store";
import { getRequest } from "./RestClient";

const getService = async() => {
  const data = await getRequest('/services');
  store.dispatch(allService(data));
};

export default getService;
