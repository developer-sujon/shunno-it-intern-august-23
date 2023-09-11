import { setGlobal } from "../redux/features/globalSlice";
import { store } from "../redux/store";
import publicInstance from "./axiosConfig";

const responseReturn = (response) => {
  store.dispatch(
    setGlobal({
      isSuccess: true,
      isError: false,
      isLoading: false,
      error: {},
    })
  );
  return response;
};

const errorReturn = (error) => {
  store.dispatch(
    setGlobal({
      isSuccess: false,
      isError: true,
      isLoading: false,
      error:  error
    })
  );
  return error;
};

const getRequest =(url)=> {
  return publicInstance.get(url).then(response=> responseReturn(response.data)).catch(err=> errorReturn(err))
}

const postRequest =(url, postBody)=> {
  return publicInstance.post(url, postBody).then(response=> responseReturn(response.data)).catch(err=> errorReturn(err))
}

export {
  getRequest,
  postRequest
};
