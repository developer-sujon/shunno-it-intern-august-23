//External Lib Import
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Internal Lib Import
import i18next from "i18next";
import { apiPrefix, baseURL } from "../../config";
import ToastMessage from "../../helpers/ToastMessage";
import { setLoading } from "../features/setting.reducer";

//constant env variable
const SERVER_URL = baseURL;
const API_PREFIX_PATH = apiPrefix;

const baseQuery = fetchBaseQuery({
  baseUrl: SERVER_URL + API_PREFIX_PATH,
  prepareHeaders: (headers, { getState }) => {
    const {
      setting: { language },
      auth: { accessToken },
    } = getState();
    headers.set("authorization", accessToken ? `Bearer ${accessToken}` : "");
    headers.set("accept-language", language);
    return headers;
  },
  mode: "cors",
  // credentials: 'include',
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  api.dispatch(setLoading(true));
  let result = await baseQuery(args, api, extraOptions);
  const { error, data } = result;

  if (error) {
    api.dispatch(setLoading(false));
    switch (error?.data?.code) {
      case 400:
      case 406:
        error.data?.message &&
          ToastMessage.errorMessage(
            error.data?.message || i18next.t("Bad Request error occurs")
          );
        break;
      default:
        ToastMessage.errorMessage(
          data?.message || i18next.t("Server Error occurred")
        );
    }
  }

  if (data) {
    api.dispatch(setLoading(false));
    switch (data.code) {
      case 201:
      case 204:
        data.message && ToastMessage.successMessage(data.message);
        break;
      default:
    }
  }
  return result;
};

export const apiService = createApi({
  reducerPath: API_PREFIX_PATH,
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
