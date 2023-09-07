import { setGlobal } from "../redux/features/global.feature";
import { store } from "../redux/store"
import publicInstance from "./axiosConfig";

const resRequestHandler = (response) => {
    store.dispatch(
        setGlobal({
            isSuccess: true,
            isError: false,
            isLoading: false,
            error: undefined,
        })
    )
    return response;
}
const resErrorHandler = (error) => {
    store.dispatch(
        setGlobal({
            isSuccess: false,
            isError: true,
            isLoading: false,
            error: error,
        })
    )
    return error;
}

const getRequest = (url) => {
    return publicInstance
        .get(url)
        .then(response => resRequestHandler(response))
        .catch(error => resErrorHandler(error))
}

export { getRequest }