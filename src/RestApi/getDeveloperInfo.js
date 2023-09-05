import { setDeveloperInfo } from "../redux/features/developer.feature";
import { store } from "../redux/store";
import publicInstance from "./axiosConfig";

const getDeveloperInfo = () => {
    store.dispatch(
        setDeveloperInfo({
            data:[],
            isLoading: true,
            isError: false,
            isSuccess: false,
        })
    )
    publicInstance
    .get("/teams")
    .then(({data})=>{
        // console.log(data.data)
        store.dispatch(
            setDeveloperInfo({
                data:data?.data,
                isLoading: false,
                isError: false,
                isSuccess: true,
            })
        )
    })
    .catch(()=>{
        store.dispatch(
            setDeveloperInfo({
                data:null,
                isLoading: false,
                isError: true,
                isSuccess: false,
            })
        )
    })
};

export default getDeveloperInfo;