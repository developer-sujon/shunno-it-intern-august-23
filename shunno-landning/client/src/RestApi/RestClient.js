import { setGlobal } from "../redux/features/global.feature";
import { store } from "../redux/store";
import publicInstance from "./axiosConfig";

const responseReturn = (response) => {
  store.dispatch(
    setGlobal({
      isSuccess: true,
      isError: false,
      isLoading: false,
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
    })
  );
  return error;
};

class RestClient {
  static getRequest() {
    store.dispatch(SetLoading());
    return publicInstance
      .get("/brands")
      .then((response) => {
        return responseReturn(response);
      })
      .catch((error) => {
        return errorReturn(error);
      });
  }
  static postRequest() {}
  static deleteRequest() {}
  static putRequest() {}
  static patchRequest() {}
}
